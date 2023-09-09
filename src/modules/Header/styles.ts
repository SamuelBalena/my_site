import { styled } from "../../styles";

export const Container = styled("header", {
  display: "flex",
  height: 550,
  width: "100%",
  margin: "0 auto",
  backgroundColor: "rgb(9,30,121)",
  background:
    "linear-gradient(90deg, rgba(9,30,121,1) 0%, rgba(0,236,255,1) 100%)",

  "@tablet": {
    height: 650,
  },
});

export const Hero = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: 1110,
  margin: "0 auto",

  "@laptop": {
    padding: "0 50px",
  },

  "@tablet": {
    padding: 0,
    flexDirection: "column-reverse",
    justifyContent: "normal",
    marginBottom: 50,
  },
});

export const HeroItem = styled("div", {
  maxWidth: 375,

  h1: {
    lineHeight: "40px",
  },

  a: {
    marginTop: 15,
  },

  "@tablet": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

export const HeroImage = styled("div", {
  img: {
    borderRadius: "50%",
  },
});
