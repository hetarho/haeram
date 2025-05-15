import { mockTrips } from "~/datasource/local/mock";
import type { Trip } from "~/types/trip";

interface TripRepository {
  getAllTrips(): Promise<Trip[]>;
}

export const tripRepository: TripRepository = {
  getAllTrips: async () => {
    return mockTrips;
  },
};
