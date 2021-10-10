import { createRestdk } from "../src/index";

const restdk = createRestdk("defaultService", {
  baseURL: "https://102.168.0.1/api",
});

restdk.userApi.gets();
