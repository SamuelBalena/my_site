import { styled } from "../../styles";

export const Button = styled("a", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  fontWeight: "bold",
  borderRadius: 10,

  color: "$white",
  textDecoration: "none",

  variants: {
    colors: {
      green: {
        backgroundColor: "$green",
      },
    },
    size: {
      lg: {
        padding: 15,
        width: 250,
      },
      md: {
        padding: 15,
        width: 200,
      },
      sm: {
        padding: 15,
        width: 150,
      },
    },
  },
});
