import ThemeSwitch from "~/components/ThemeSwitch";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "haeram trip" },
    { name: "description", content: "haeram trip" },
  ];
}

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <ThemeSwitch />
    </div>
  );
}
