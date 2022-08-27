import { createContext } from "react";

export type GridContextProps = {
  gutter: number;
  columns: number;
};

const GridContext = createContext<GridContextProps>({
  gutter: 12,
  columns: 12,
});

export default GridContext;
