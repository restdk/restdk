import Axios from "axios";
import * as project from "./restdk-api";

type Project = typeof project;
type ProjectKeys = keyof Project;
type ProjectMap = {
  [key in ProjectKeys]: ReturnType<Project[key]>;
};

export function createRestdk(restdkOption) {
  const axios = Axios.create(restdkOption);
  const restdkApiMap = {};
  for (const restdkName in project) {
    const restdkApi = project[restdkName];
    restdkApiMap[restdkName] = restdkApi((option) => {
      return axios({
        method: option.method,
        url: parseUrlParam(option.url, option.param),
        data: option.body,
        params: option.query,
      });
    });
  }
  return restdkApiMap as ProjectMap;
}

function parseUrlParam(url: string, param: any) {
  return url.replace(/:(w+)/gim, (_, $1) => {
    return param[$1];
  });
}
