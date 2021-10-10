import * as project from "./api-service";
declare type Project = typeof project;
declare type ProjectKeys = keyof Project;
export declare function createRestdk(appName: ProjectKeys, restdkOption: any): {
    userApi: import("./api-service/defaultService").UserApi;
};
export {};
//# sourceMappingURL=index.d.ts.map