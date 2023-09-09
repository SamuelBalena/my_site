import { styled } from "../../../styles";

export const Container = styled("a", {
  width: 350,
  height: 350,
  textDecoration: "none",
  color: "inherit",

  article: {
    padding: 25,
  },

  img: {
    width: "100%",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },

  "&:hover": {
    cursor: "pointer",
    boxShadow: "5px 5px 30px 0px rgba(0,0,0,0.75)",
  },

  borderRadius: 5,
  boxShadow: "0px 10px 20px -3px rgba(0,0,0,0.2)",
});
