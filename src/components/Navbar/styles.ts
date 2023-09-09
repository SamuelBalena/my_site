import { styled } from "../../styles";

export const Nav = styled("nav", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  maxWidth: 1110,
  margin: "auto ",
  paddingTop: 35,

  "@laptop": {
    padding: "25px 50px 0 50px",
  },
});

export const List = styled("ul", {
  display: "flex",
  listStyle: "none",

  li: {
    padding: 5,
    fontWeight: "bold",
  },
});

export const Anchor = styled("a", {
  textDecoration: "none",
  color: "white",
  cursor: "pointer",
});

export const Logo = styled("a", {});

export const Background = styled("div", {
  backgroundColor: "rgb(9,30,121)",
  background:
    "linear-gradient(90deg, rgba(9,30,121,1) 0%, rgba(0,236,255,1) 100%)",
});
