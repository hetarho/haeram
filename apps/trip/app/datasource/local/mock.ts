import type { Trip } from "~/types/trip";

export const mockTrips: Trip[] = [
  {
    id: 0,
    title: "Honeymoon in Maldives",
    images: [],
    nation: "maldives",
    city: "Maldives",
    startDate: new Date("2024-12-15"),
    endDate: new Date("2024-12-20"),
    tags: ["beach", "maldives"],
  },
  {
    id: 1,
    title: "Honeymoon in Singapore",
    images: [],
    nation: "singapore",
    city: "Singapore",
    startDate: new Date("2024-12-20"),
    endDate: new Date("2024-12-24"),
    tags: ["city", "singapore"],
  },
  {
    id: 2,
    title: "first trip to Japan",
    images: [],
    nation: "japan",
    city: "Osaka",
    startDate: new Date("2025-03-02"),
    endDate: new Date("2025-03-04"),
    tags: ["city", "japan"],
  },
  {
    id: 3,
    title: "Nha Trang",
    images: [],
    nation: "vietnam",
    city: "Nha Trang",
    startDate: new Date("2024-05-05"),
    endDate: new Date("2024-05-08"),
    tags: ["beach", "vietnam"],
  },
];
