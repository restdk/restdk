import { Axios } from "axios";
import * as project from "./api-service";

type Project = typeof project;
type ProjectKeys = keyof Project;
type ProjectMap = {
  [key in ProjectKeys]: ReturnType<Project[key]>;
};

export function createRestdk(appName: ProjectKeys, restdkOption) {
  const axios = new Axios(restdkOption);
  axios.interceptors.request.use((config) => {
    return config;
  });
  axios.interceptors.response.use((res) => {
    if (Math.floor(res.status / 100) !== 2) {
      throw new Error(res.statusText);
    }
    const body: any = res.data;
    if (body?.code) {
      //TODO: 抛错管理
    }
    return body?.data;
  });
  const restdkApi = project[appName];
  return restdkApi((option) => {
    return axios.request({
      method: option.method,
      url: parseUrlParam(option.url, option.param),
      data: option.body,
      params: option.query,
    });
  });
}

function parseUrlParam(url: string, param: any) {
  return url.replace(/:(w+)/gim, (_, $1) => {
    return param[$1];
  });
}
