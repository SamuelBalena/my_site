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

  "@tablet": {
    display: "none",
  },
});

export const ListMobile = styled("ul", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  listStyle: "none",
  marginTop: 65,

  li: {
    marginTop: 25,
    padding: 5,
    fontWeight: "bold",
  },
});

export const Hamburguer = styled("div", {
  "@tablet_menu": {
    display: "none",
  },

  button: {
    background: "none",
    border: "none",
  },
});

export const MenuMobile = styled("div", {
  position: "absolute",
  top: 0,
  width: "45%",
  height: 750,
  backgroundColor: "rgb(9,30,121)",
  background:
    "linear-gradient(90deg, rgba(9,30,121,1) 0%, rgba(0,236,255,1) 100%)",
  boxShadow: "11px 7px 5px 0px rgba(0,0,0,0.41);",
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
