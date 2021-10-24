import { ApiResult } from "./ApiResult";

export class ApiThrow extends ApiResult {
  message: string; // 错误消息
  error: string; // 错误

  toString() {
    return `${this.type}`;
  }
}
