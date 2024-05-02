import { methodOverride } from "hono/method-override";
import { createRoute } from "honox/factory";
import app from "../server";

export default createRoute(async (c, next) => {
  const middleware = methodOverride({ app });
  return await middleware(c, next);
});
