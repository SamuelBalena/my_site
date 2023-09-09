import { styled } from "@stitches/react";

export const Container = styled("div", {
  width: 350,
  height: 450,
  padding: 25,

  header: {
    display: "flex",
    alignItems: "center",
    marginTop: 20,
  },

  img: {
    borderRadius: 50,
  },

  div: {
    paddingLeft: 15,
  },

  main: {
    marginTop: 20,
  },

  borderRadius: 5,
  boxShadow: "0px 10px 20px -3px rgba(0,0,0,0.2)",
});
