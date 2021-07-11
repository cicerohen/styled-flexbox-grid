import { createContext } from "react";

export type GridContextType = {
  gutter: number;
  columns: number;
};

const GridContext = createContext<GridContextType>({
  gutter: 12,
  columns: 12,
});

export default GridContext;
