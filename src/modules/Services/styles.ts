import { styled } from "../../styles";

export const Container = styled("section", {
  maxWidth: 1110,
  margin: "200px auto",

  "@lg": {
    alignItems: "center",
  },

  "@tablet": {
    margin: "75px 0",
  },
});

export const ServicesItem = styled("div", {
  margin: "0 auto",

  h1: {
    textAlign: "center",
  },

  h2: {
    textAlign: "center",
  },

  p: {
    textAlign: "center",
  },

  "@tablet": {
    marginBottom: "-50px",
  },
});

export const CardContainer = styled("li", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  flexWrap: "wrap",
  width: "100%",

  margin: "75px 0",

  "@laptop": {
    flexDirection: "column",
    justifyContent: "center",
  },
});
