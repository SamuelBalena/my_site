import { Anchor, List, Logo, Nav } from "./styles";

export const Navbar = (): JSX.Element => (
  <Nav>
    <Logo>uma logo aqui</Logo>

    <List>
      <li>
        <Anchor>teste</Anchor>
      </li>
      <li>
        <Anchor>teste</Anchor>
      </li>
      <li>
        <Anchor>teste</Anchor>
      </li>
    </List>
  </Nav>
);
