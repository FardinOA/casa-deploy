export const defineAppRoutes = (defineRoutes) => {
    return defineRoutes((route) => {
        // Public route
        route("/", "routes/layout.tsx", () => {
            route("", "routes/index.tsx", { index: true });
        });
    });
};
