import { styled } from "../../styles";

export const Container = styled("section", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  maxWidth: 1110,
  margin: "150px auto",
  padding: "50px 0",

  "img": {
    width: "100%",
    height: "auto",
  },

  "@tablet": {
    margin: "50px 0",
  },

  // backgroundColor: "#F8F9FF",
});

export const PortfolioItem = styled("div", {
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
});

export const PortfolioWorks = styled("ul", {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridGap: "30px",
  margin: "50px 0",

  "@laptop": {
    display: "flex",
    flexDirection: "column",
  },
});
