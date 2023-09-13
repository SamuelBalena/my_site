import Image from "next/image";
import {
  Anchor,
  Background,
  Hamburguer,
  List,
  ListMobile,
  Logo,
  MenuMobile,
  Nav,
} from "./styles";
import LogoImage from "../../../public/images/Samuel_.png";
import OpenMenuHamburguer from "../../../public/images/menu_hamburger.svg";
import CloseMenuHamburguer from "../../../public/images/close_menu.svg";
import { useState } from "react";

export const Navbar = (): JSX.Element => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
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

          <Hamburguer>
            <button onClick={() => setShowMenu(!showMenu)}>
              {showMenu === false ? (
                <Image
                  src={OpenMenuHamburguer}
                  height={40}
                  width={35}
                  alt="Abra o menu"
                />
              ) : (
                <Image
                  src={CloseMenuHamburguer}
                  height={40}
                  width={35}
                  alt="Fecha o menu"
                />
              )}
            </button>
          </Hamburguer>
        </Nav>
      </Background>

      {showMenu === true ? (
        <MenuMobile>
          <ListMobile>
            <li onClick={() => setShowMenu(!showMenu)}>
              <Anchor href="#About">Sobre</Anchor>
            </li>
            <li onClick={() => setShowMenu(!showMenu)}>
              <Anchor href="#Services">Serviços</Anchor>
            </li>
            <li onClick={() => setShowMenu(!showMenu)}>
              <Anchor href="#Projects">Projetos</Anchor>
            </li>
            <li onClick={() => setShowMenu(!showMenu)}>
              <Anchor href="#Testimonials">Depoimentos</Anchor>
            </li>
            <li onClick={() => setShowMenu(!showMenu)}>
              <Anchor href="#Articles">Artigos</Anchor>
            </li>
          </ListMobile>
        </MenuMobile>
      ) : null}
    </>
  );
};
