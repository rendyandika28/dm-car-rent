import { joinURL, withQuery } from "ufo";
import { createError } from "h3";

export default defineEventHandler(async (event) => {
  const { apiUrl } = useRuntimeConfig();
  const path = getRouterParam(event, "path") ?? "";
  const queryParam = getQuery(event);

  return await proxyRequest(
    event,
    withQuery(joinURL(apiUrl, "/api", path), queryParam)
  );
});
