import type { Nation } from "./nation";

export type Trip = {
  id: number;
  title: string;
  images: string[];
  nation: Nation;
  city: string;
  startDate: Date;
  endDate: Date;
  tags: string[];
};
