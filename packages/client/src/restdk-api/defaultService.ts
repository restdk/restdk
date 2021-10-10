import { Api } from "../base";

export class User {}

export class UserApi extends Api {
  constructor(private request) {
    super();
  }
  gets(): Promise<User[]> {
    return this.request({});
  }
}

export function defaultService(request) {
  return {
    userApi: new UserApi(request),
  };
}
