import { createStitches } from "@stitches/react";

export const { css, styled, globalCss, keyframes, getCssText } = createStitches(
  {
    theme: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        green: "#4db6ac",
        gray: "#959CB1",
        gray_light: "#e2e2e2",
        dark_blue: "#090E34",
      },
    },

    media: {
      sm: "(max-width: 320px)",
      md: "(max-width: 375px)",
      lg: "(max-width: 520px)",
      tablet: "(max-width: 768px)",
      laptop: "(max-width: 1024px)",
      desktop: "(max-width: 1440px)",
      widescreen: "(max-width: 1920px)",
      tablet_menu: "(min-width: 768px)",
    },
  }
);
