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
        {trips.map((trip) => (
          <Link
            to={`/detail/${trip.name}?image=${trip.image}&position=${trip.position}`}
            key={trip.id}
          >
            <PhotoCard src={trip.image} title={trip.name} />
          </Link>
        ))}
      </div>
    </div>
  );
}

const trips = [
  {
    id: 1,
    name: "Nha Trang",
    image: "/nhatrang.jpeg",
  },
  {
    id: 2,
    name: "Maldives",
    image: "/maldives.jpeg",
    position: "bottom",
  },
  {
    id: 3,
    name: "Singapore",
    image: "/singapore.jpeg",
    position: "top",
  },
  {
    id: 4,
    name: "Osaka",
    image: "/osaka.jpeg",
    position: "bottom",
  },
  {
    id: 5,
    name: "Tong Young",
    image: "/tongyoung.jpeg",
    position: "bottom",
  },
  {
    id: 6,
    name: "Tae An",
    image: "/taean.jpeg",
  },
];
