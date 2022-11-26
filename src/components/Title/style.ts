import { styled } from "../../styles";

export const Title = styled("h1", {
  variants: {
    size: {
      largest: {
        fontSize: 42,
      },
      large: {
        fontSize: 36,
      },
      biggest: {
        fontSize: 28,
      },
      big: {
        fontSize: 24,
      },
      mediumgest: {
        fontSize: 22,
      },
      medium: {
        fontSize: 18,
      },
      small: {
        fontSize: 16,
      },
      smalles: {
        fontSize: 14,
      },
    },

    color: {
      white: {
        color: "$white",
      },
      black: {
        color: "$black",
      },
    },

    weight: {
      thin: {
        fontWeight: 100,
      },
      extraLight: {
        fontWeight: 200,
      },
      light: {
        fontWeight: 300,
      },
      regular: {
        fontWeight: 400,
      },
      medium: {
        fontWeight: 500,
      },
      semiBold: {
        fontWeight: 600,
      },
      bold: {
        fontWeight: 700,
      },
      extraBold: {
        fontWeight: 800,
      },
    },
    textTransform: {
      uppercase: {
        textTransform: "uppercase",
      },
    },
  },
});
