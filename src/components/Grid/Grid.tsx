import styled, { css } from "styled-components";
import { useContext } from "react";

import GridContext, { GridContextType } from "./GridContext";
import { mediaQueries, flexBasis } from "./utils";

type CommonProps = {
  item: boolean;
  container: boolean;
  sm: number;
  md: number;
  lg: number;
};

type StyledProps = CommonProps & GridContextType;

type Props = CommonProps & {
  children?: React.ReactNode;
};

const container = css<StyledProps>`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const item = css<StyledProps>`
  padding: ${(props) => props.gutter}px;
  flex-grow: 0;
  ${(props) =>
    props.sm &&
    mediaQueries.sm`
      flex-basis: ${flexBasis(props.sm, props.columns)};
      max-width: ${flexBasis(props.sm, props.columns)};
    `}
  ${(props) =>
    props.md &&
    mediaQueries.md`
        flex-basis: ${flexBasis(props.md, props.columns)};
        max-width: ${flexBasis(props.md, props.columns)};
      `}
  ${(props) =>
    props.lg &&
    mediaQueries.lg`
        flex-basis: ${flexBasis(props.lg, props.columns)};
        max-width: ${flexBasis(props.lg, props.columns)};
      `}

`;

const Wrapper = styled.div<StyledProps>`
  box-sizing: border-box;
  ${(props) => props.container && container};
  ${(props) => props.item && item};
`;

const Grid = ({ item, container, sm, md, lg, children }: Props) => {
  const { columns, gutter } = useContext(GridContext);
  return (
    <Wrapper
      container={container}
      item={item}
      columns={columns}
      gutter={gutter}
      sm={sm}
      md={md}
      lg={lg}
    >
      {children}
    </Wrapper>
  );
};

export default Grid;
