import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("detail/:title", "./routes/detail.tsx"),
] satisfies RouteConfig;
