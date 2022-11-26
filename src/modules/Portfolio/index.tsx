import { CardPortfolio } from "../../components/Cards/CardPortfolio";
import { Paragraph } from "../../components/Paragraph/styles";
import { Subtitle } from "../../components/Subtitle/styles";
import { Title } from "../../components/Title/style";
import { Container, PortfolioItem, PortfolioWorks } from "./styles";

export const Portfolio = (): JSX.Element => (
  <Container>
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
        <aside></aside>
        <Subtitle color={"dark_blue"} size={"medium"}>
          Brafé
        </Subtitle>
        <Paragraph color={"gray"}>
          Uma landing page sobre café brasileiro.
        </Paragraph>
      </CardPortfolio>
      <CardPortfolio>
        <aside></aside>
        <Subtitle color={"dark_blue"} size={"medium"}>
          Brafé
        </Subtitle>
        <Paragraph color={"gray"}>
          Uma landing page sobre café brasileiro.
        </Paragraph>
      </CardPortfolio>
      <CardPortfolio>
        <aside></aside>
        <Subtitle color={"dark_blue"} size={"medium"}>
          Brafé
        </Subtitle>
        <Paragraph color={"gray"}>
          Uma landing page sobre café brasileiro.
        </Paragraph>
      </CardPortfolio>
      <CardPortfolio>
        <aside></aside>
        <Subtitle color={"dark_blue"} size={"medium"}>
          Brafé
        </Subtitle>
        <Paragraph color={"gray"}>
          Uma landing page sobre café brasileiro.
        </Paragraph>
      </CardPortfolio>
    </PortfolioWorks>
  </Container>
);
