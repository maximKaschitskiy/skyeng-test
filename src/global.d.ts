import "@testing-library/jest-dom/extend-expect";
import "@emotion/react";
import { ThemeType } from "./types";

declare module "@emotion/react" {
  export interface Theme extends ThemeType {}
}