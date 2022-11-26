import { styled } from "../../../styles";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  width: 250,
  height: 300,

  padding: 25,

  h2: {
    textAlign: "center",
  },

  p: {
    textAlign: "center",
  },

  img: {
    margin: 15,
  },

  borderRadius: 5,
  boxShadow: "0px 10px 20px -3px rgba(0,0,0,0.2)",
});
