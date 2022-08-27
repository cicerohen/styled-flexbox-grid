import Grid, { GridProps } from "./Grid";
import GridContext, { GridContextProps } from "./GridContext";

export type GridWrapperProps = Partial<
  GridProps & GridContextProps & { children: React.ReactNode }
>;

const GridWrapper = ({
  container,
  item,
  gutter = 12,
  columns = 12,
  sm,
  md,
  lg,
  children,
}: GridWrapperProps) => {
  return (
    <GridContext.Provider value={{ gutter, columns }}>
      <Grid item={item} container={container} sm={sm} md={md} lg={lg}>
        {children}
      </Grid>
    </GridContext.Provider>
  );
};

export default GridWrapper;
