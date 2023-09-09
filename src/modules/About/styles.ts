import { styled } from "../../styles";

export const Container = styled("main", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",

  maxWidth: 1110,
  margin: "125px auto",
  padding: "0 50px",

  "@tablet": {
    margin: "75px 0",
  },
});

export const AboutItem = styled("div", {
  maxWidth: 555,

  h2: {
    width: 275,
    margin: "5px 0 15px 0",
  },
});

export const AboutSocialMedia = styled("div", {
  maxWidth: 425,
  marginTop: 50,

  p: {
    margin: "15px 0",
  },
});

export const SocialMediaIcons = styled("div", {
  display: "flex",
  alignItems: "center",

  margin: "25px 0",

  img: {
    marginRight: 15,
  },
});
