import { styled } from "../../../styles";

export const Container = styled("div", {
  width: "100%",
  margin: "0 auto",
  padding: 20,

  h2: {
    marginTop: 15,
  },

  img: {
    maxHeight: 300,
    maxWidth: 500,
    borderRadius: 5,
    boxShadow: "2px 2px 15px 0px rgba(0,0,0,0.75)",
  },

  "img:hover": {
    boxShadow: "5px 5px 30px 0px rgba(0,0,0,0.75)",
  },
});
