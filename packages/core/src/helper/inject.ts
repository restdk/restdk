export function injectBaseModel() {
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
export function injectRequest({ baseURL }) {
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
export function injectLib() {
  return `
  import Axios from "axios";

  `;
}
export function injectEnv() {
  return `
  let env = "local";
  `;
}
export function injectTools() {
  return `
    function parseUrl(url: string, param: any) {
      return url.replace(/:(\w+)/gim, (_, $1) => {
        return param[$1];
      });
    }

  `;
}
