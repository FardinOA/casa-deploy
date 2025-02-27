/** @type {import('@remix-run/dev').AppConfig} */
export default {
    serverModule: "@vercel/remix",
    ignoredRouteFiles: ["**/.*"],
    future: {
        v3_routeConvention: true,
    },
};
