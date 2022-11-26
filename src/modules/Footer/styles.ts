import { styled } from "../../styles";

export const Container = styled("footer", {
  width: "100%",
  padding: 50,
  marginTop: 150,
  backgroundColor: "rgb(9,30,121)",
  background:
    "linear-gradient(90deg, rgba(9,30,121,1) 0%, rgba(0,236,255,1) 100%)",

  div: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 75,
    maxWidth: 1110,
    margin: "0 auto",
  },

  span: {
    maxWidth: 400,
  },

  li: {
    listStyle: "none",
  },

  a: {
    textDecoration: "none",
    color: "$white",
  },

  h1: {
    marginBottom: 15,
  },

  h2: {
    marginBottom: 5,
  },
});
