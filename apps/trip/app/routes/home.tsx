import ThemeSwitch from "~/components/ThemeSwitch";
import type { Route } from "./+types/home";
import type { Trip } from "~/types/trip";
import { useEffect, useState } from "react";
import { tripRepository } from "~/repositories/tripRepository";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "haeram trip" },
    { name: "description", content: "haeram trip" },
  ];
}

export default function Home() {
  const [trips, setTrips] = useState<Trip[]>([]);

  useEffect(() => {
    tripRepository.getAllTrips().then((trips) => {
      setTrips(trips);
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen items-center gap-10">
      <div className="flex h-10 items-center justify-between w-full px-8 py-4">
        <div>
          <h1 className="text-l font-bold">Haeram's trip</h1>
        </div>
        <ThemeSwitch />
      </div>
      <div className="w-full flex-1">
        {trips.map((trip) => (
          <div
            key={trip.id}
            className="rounded-full overflow-hidden w-24 h-24 relative"
          >
            <img
              src={`/imgs/flags/${trip.nation}.png`}
              alt={trip.title}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-155"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
