'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var axios = require('axios');

class Api {
    parent;
    url;
    getUrl() {
        return (this.parent?.getUrl() ?? "") + this.url;
    }
}

class UserApi extends Api {
    request;
    constructor(request) {
        super();
        this.request = request;
    }
    gets() {
        return this.request({});
    }
}
function defaultService(request) {
    return {
        userApi: new UserApi(request),
    };
}

var project = /*#__PURE__*/Object.freeze({
  __proto__: null,
  defaultService: defaultService
});

function createRestdk(appName, restdkOption) {
    const axios$1 = new axios.Axios(restdkOption);
    axios$1.interceptors.request.use((config) => {
        return config;
    });
    axios$1.interceptors.response.use((res) => {
        if (Math.floor(res.status / 100) !== 2) {
            throw new Error(res.statusText);
        }
        const body = res.data;
        if (body?.code) ;
        return body?.data;
    });
    const restdkApi = project[appName];
    return restdkApi((option) => {
        return axios$1.request({
            method: option.method,
            url: parseUrlParam(option.url, option.param),
            data: option.body,
            params: option.query,
        });
    });
}
function parseUrlParam(url, param) {
    return url.replace(/:(w+)/gim, (_, $1) => {
        return param[$1];
    });
}

exports.createRestdk = createRestdk;
//# sourceMappingURL=client.cjs.js.map
