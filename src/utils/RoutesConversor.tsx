import { Routes, routesKeys } from "../data/Routes";

export const routesArray = Object.keys(Routes).map(
  (key) => Routes[key as routesKeys]
);
