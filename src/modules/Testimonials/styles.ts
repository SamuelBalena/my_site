import { styled } from "../../styles";

export const Container = styled("section", {
  maxWidth: 1110,
  margin: "200px auto",

  "@tablet": {
    margin: "75px 0",
  },
});

export const TestimonialsItem = styled("div", {
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

export const TestimonialsContainer = styled("ul", {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "30px",
  margin: "50px 0",

  "@laptop": {
    display: "flex",
    flexDirection: "column",
  },
});

export const TestimonialsContainerItem = styled("li", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  flexWrap: "wrap",
  width: "100%",

  "@laptop": {
    justifyContent: "center",
  },
});
