import { globalCss } from "@stitches/react";

export const GlobalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "'Poppins', sans-serif",
  },

  html: {
    scrollBehavior: "smooth",
  },
});
