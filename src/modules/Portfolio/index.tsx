import { CardPortfolio } from "../../components/Cards/CardPortfolio";
import { Paragraph } from "../../components/Paragraph/styles";
import { Subtitle } from "../../components/Subtitle/styles";
import { Title } from "../../components/Title/style";
import { Container, PortfolioItem, PortfolioWorks } from "./styles";
import Image from "next/image";

import brafe from "../../../public/images/brafé.png";
import gatos from "../../../public/images/gatos_curiosos.png";
import agency from "../../../public/images/agency.png";
import business from "../../../public/images/start_bussiness.png";
import Link from "next/link";

export const Portfolio = (): JSX.Element => (
  <Container id="Projects">
    <PortfolioItem>
      <Title size={"medium"} textTransform={"uppercase"}>
        Projetos
      </Title>
      <Subtitle color={"dark_blue"} size={"biggest"}>
        Trabalhos Recentes
      </Subtitle>
      <Paragraph color={"gray"}>
        Aqui estão algumas variedades de projetos que participei.
      </Paragraph>
    </PortfolioItem>

    <PortfolioWorks>
      <CardPortfolio>
        <Link href={"https://caff3.netlify.app"}>
          <aside>
            <Image src={brafe} alt="Brafé" />
          </aside>
        </Link>
        <Subtitle color={"dark_blue"} size={"medium"}>
          Brafé
        </Subtitle>
        <Paragraph color={"gray"}>
          Uma landing page sobre café brasileiro.
        </Paragraph>
      </CardPortfolio>
      <CardPortfolio>
        <Link href={"https://starbusiness.netlify.app"}>
          <aside>
            <Image src={business} alt="Start Business" />
          </aside>
        </Link>
        <Subtitle color={"dark_blue"} size={"medium"}>
          Start Business
        </Subtitle>
        <Paragraph color={"gray"}>
          Uma landing page sobre uma agencia de marketing.
        </Paragraph>
      </CardPortfolio>
      <CardPortfolio>
        <Link href={"https://agencytest34.netlify.app"}>
          <aside>
            <Image src={agency} alt="Agency" />
          </aside>
        </Link>
        <Subtitle color={"dark_blue"} size={"medium"}>
          Agency
        </Subtitle>
        <Paragraph color={"gray"}>
          Uma landing page sobre uma agencia de software.
        </Paragraph>
      </CardPortfolio>
      <CardPortfolio>
        <Link href={"https://gatoscuriosos.netlify.app"}>
          <aside>
            <Image src={gatos} alt="Gatos Curiosos" />
          </aside>
        </Link>
        <Subtitle color={"dark_blue"} size={"medium"}>
          Gatos Curiosos
        </Subtitle>
        <Paragraph color={"gray"}>
          Uma landing page sobre curiosidades de gatos.
        </Paragraph>
      </CardPortfolio>
    </PortfolioWorks>
  </Container>
);
