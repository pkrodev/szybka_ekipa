import { ServiceArea } from "@/types";

export const serviceAreas: ServiceArea[] = [
  {
    name: "Lublin",
    distance: 0,
  },
  {
    name: "Radzyń Podlaski",
    distance: 60,
  },
  {
    name: "Kock",
    distance: 45,
  },
  {
    name: "Lubartów",
    distance: 30,
  },
  {
    name: "Świdnik",
    distance: 10,
  },
  {
    name: "Niemce",
    distance: 15,
  },
  {
    name: "Łęczna",
    distance: 20,
  },
];

export function getServiceAreaByName(name: string): ServiceArea | undefined {
  return serviceAreas.find(
    (area) => area.name.toLowerCase() === name.toLowerCase()
  );
}

export function calculateTravelCost(distance: number, pricePerKm: number = 2): number {
  return distance * pricePerKm;
}

export function getServiceAreaNames(): string[] {
  return serviceAreas.map((area) => area.name);
}

export function getNearbyAreas(maxDistance: number = 30): ServiceArea[] {
  return serviceAreas.filter((area) => area.distance <= maxDistance);
}
