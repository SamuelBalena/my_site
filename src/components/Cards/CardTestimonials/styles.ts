import { styled } from "@stitches/react";

export const Container = styled("div", {
  width: 350,
  height: 450,
  padding: 25,

  header: {
    display: "flex",
    //justifyContent: "space-between",
    alignItems: "center",
  },

  div: {
    paddingLeft: 15,
  },

  borderRadius: 5,
  boxShadow: "0px 10px 20px -3px rgba(0,0,0,0.2)",
});
