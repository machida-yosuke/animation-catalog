import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    layout("./layout/layout.tsx", 
        [route('about', './routes/about.tsx')]
    ),
    route("teams/:teamId", "./team.tsx"),
] satisfies RouteConfig;
