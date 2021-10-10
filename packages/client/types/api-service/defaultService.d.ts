import { Api } from "../base";
export declare class User {
}
export declare class UserApi extends Api {
    private request;
    constructor(request: any);
    gets(): Promise<User[]>;
}
export declare function defaultService(request: any): {
    userApi: UserApi;
};
//# sourceMappingURL=defaultService.d.ts.map