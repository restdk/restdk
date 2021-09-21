import { make } from "@restdk/shared";
import { Model } from "./Model";

export class Sdk {
  name: string;
  baseURL: string;
  env: string;

  models: Model[];

  getModelString() {
    return this.models.map((model) => "export " + model);
  }

  toString() {
    return `
      ${injectLib()}
      /*
      This file is automatically generated. Do not modify it.
      */
      ${injectEnv()}
      ${injectRequest(this)}
      ${injectBaseModel()}
      ${injectTools()}
      ${this.getModelString().join("\n")}
    `;
  }

  static create(props: Partial<Sdk>) {
    return make(new Sdk(), props);
  }
}

function injectBaseModel() {
  return `
  class BaseModel{
    url: string;
    parent:null|BaseModel;

    getUrl(){
      return (this.parent ? this.parent.getUrl() : "") + this.url;
    }
  }
  
  `;
}

function injectRequest({ baseURL }) {
  return `
    const axios = new Axios({baseUrl:"${baseURL}"});

    function request(option){
      return axios({
        method: option.method,
        url: parseUrl(option.url, option.param),
        data: option.body,
        params: option.query,
      });
    }
  `;
}

function injectLib() {
  return `
  import Axios from "axios";

  `;
}

function injectEnv() {
  return `
  let env = "local";
  `;
}

function injectTools() {
  return `
    function parseUrl(url: string, param: any) {
      return url.replace(/:(\w+)/gim, (_, $1) => {
        return param[$1];
      });
    }

  `;
}
