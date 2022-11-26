import Image from "next/image";
import { Container, Hero, HeroImage, HeroItem } from "./styles";
import MyPhoto from "../../../public/images/download.png";
import { Title } from "../../components/Title/style";
import { Subtitle } from "../../components/Subtitle/styles";
import { Button } from "../../components/Button/styles";

export const Header = (): JSX.Element => (
  <Container>
    <Hero>
      <HeroItem>
        <Title size={"mediumgest"} weight={"medium"} color={"white"}>
          Olá 👋 eu sou
        </Title>
        <Title size={"large"} weight={"bold"} color={"white"}>
          Samuel Balena
        </Title>
        <Subtitle size={"mediumgest"} weight={"regular"} color={"white"}>
          Profissional Freelancer Front-End
        </Subtitle>
        <Button size={"sm"} colors={"green"}>
          Contato
        </Button>
      </HeroItem>

      <HeroImage>
        <Image src={MyPhoto} height={350} width={350} alt="Samuel Balena" />
      </HeroImage>
    </Hero>
  </Container>
);
