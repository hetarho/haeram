import ThemeSwitch from "~/components/ThemeSwitch";
import type { Route } from "./+types/home";
import PhotoCard from "~/components/PhotoCard";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "haeram trip" },
    { name: "description", content: "haeram trip" },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex h-10 items-center justify-between w-full px-8 py-4">
        <div>
          <h1 className="text-l font-bold">Haeram's trip</h1>
        </div>
        <ThemeSwitch />
      </div>
      <div className="grid grid-cols-3 gap-4 p-4">
        <Link to="/detail/Nha Trang">
          <PhotoCard src="/nhatrang/01.jpeg" title="Nha Trang" />
        </Link>
        <Link to="/detail/nhatrang">
          <PhotoCard src="/nhatrang/01.jpeg" title="Nha Trang" />
        </Link>
        <Link to="/detail/nhatrang">
          <PhotoCard src="/nhatrang/01.jpeg" title="Nha Trang" />
        </Link>
        <Link to="/detail/nhatrang">
          <PhotoCard src="/nhatrang/01.jpeg" title="Nha Trang" />
        </Link>
      </div>
    </div>
  );
}
