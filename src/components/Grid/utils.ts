import {
  css,
  FlattenSimpleInterpolation,
  SimpleInterpolation,
} from "styled-components";

type MediaSizes = {
  sm: string;
  md: string;
  lg: string;
};

interface MediaQuery {
  [key: string]: (
    strings: TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
  ) => FlattenSimpleInterpolation;
}

const mediaSizes: MediaSizes = {
  sm: "screen and (max-width: 39.9375em)",
  md: "screen and (min-width: 40em)",
  lg: "screen and (min-width: 64em)",
};

export const flexBasis = (column: number, columns: number): string =>
  `${(column / columns) * 100}%`;

export const mediaQueries = Object.keys(mediaSizes).reduce(
  (acc: MediaQuery, size: string) => {
    acc[size] = (strings, ...interpolations) => css`
      @media ${(mediaSizes as any)[size]} {
        ${css(strings, ...interpolations)};
      }
    `;
    return acc;
  },
  {}
);
