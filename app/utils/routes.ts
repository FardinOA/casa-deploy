import type { UserConfig } from "vite";

export const defineAppRoutes: Exclude<
    NonNullable<
        Parameters<NonNullable<UserConfig["plugins"]>[number]>[0]["routes"]
    >,
    undefined
> = (defineRoutes) => {
    return defineRoutes((route) => {
        // Public route
        route("/", "routes/layout.tsx", () => {
            route("", "routes/index.tsx", { index: true });
        });
    });
};
