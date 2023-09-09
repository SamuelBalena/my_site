import Image from "next/image";
import { Anchor, Background, List, Logo, Nav } from "./styles";
import LogoImage from "../../../public/images/Samuel_.png";

export const Navbar = (): JSX.Element => (
  <Background>
    <Nav>
      <Logo>
        <Image src={LogoImage} alt="Samuel" height={25} width={125} />
      </Logo>

      <List>
        <li>
          <Anchor href="#About">Sobre</Anchor>
        </li>
        <li>
          <Anchor href="#Services">Serviços</Anchor>
        </li>
        <li>
          <Anchor href="#Projects">Projetos</Anchor>
        </li>
        <li>
          <Anchor href="#Testimonials">Depoimentos</Anchor>
        </li>
        <li>
          <Anchor href="#Articles">Artigos</Anchor>
        </li>
      </List>
    </Nav>
  </Background>
);
