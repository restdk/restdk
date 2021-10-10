import { createRestdk } from "../src/index";

const restdk = createRestdk({
  baseURL: "https://102.168.0.1/api",
});

restdk.defaultService.userApi.gets();
