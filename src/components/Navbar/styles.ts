import { styled } from "../../styles";

export const Nav = styled("nav", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  maxWidth: 1110,
  margin: "25px auto ",
});

export const List = styled("ul", {
  display: "flex",
  listStyle: "none",

  li: {
    padding: 5,
  },
});

export const Anchor = styled("a", {});

export const Logo = styled("a", {});
