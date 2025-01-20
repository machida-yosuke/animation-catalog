import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "about" },
    { name: "description", content: "about" },
  ];
}

export default function Home() {
  return <h1>about</h1>;
}
