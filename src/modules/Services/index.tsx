import Image from "next/image";
import { CardServices } from "../../components/Cards/CardServices";
import { Paragraph } from "../../components/Paragraph/styles";
import { Subtitle } from "../../components/Subtitle/styles";
import { Title } from "../../components/Title/style";
import { CardContainer, Container, ServicesItem } from "./styles";

export const Services = (): JSX.Element => (
  <Container>
    <ServicesItem>
      <Title size={"medium"} textTransform={"uppercase"}>
        Serviços
      </Title>
      <Subtitle color={"dark_blue"} size={"biggest"}>
        Veja os serviços que posso oferecer
      </Subtitle>
      <Paragraph color={"gray"}>
        Aqui estão alguns dos meus seriços disponíveis
      </Paragraph>
    </ServicesItem>

    <CardContainer>
      <CardServices>
        <Image
          src={"/images/facebook.png"}
          alt="Texto aqui"
          height={50}
          width={50}
        />
        <Subtitle size={"medium"} color={"dark_blue"}>
          Algum texto aqui
        </Subtitle>
        <Paragraph size={"small"} color={"gray"}>
          Algum texto aqui
        </Paragraph>
      </CardServices>
      <CardServices>
        <Image
          src={"/images/facebook.png"}
          alt="Texto aqui"
          height={50}
          width={50}
        />
        <Subtitle size={"medium"} color={"dark_blue"}>
          Algum texto aqui
        </Subtitle>
        <Paragraph size={"small"} color={"gray"}>
          Algum texto aqui
        </Paragraph>
      </CardServices>
      <CardServices>
        <Image
          src={"/images/facebook.png"}
          alt="Texto aqui"
          height={50}
          width={50}
        />
        <Subtitle size={"medium"} color={"dark_blue"}>
          Algum texto aqui
        </Subtitle>
        <Paragraph size={"small"} color={"gray"}>
          Algum texto aqui
        </Paragraph>
      </CardServices>
      <CardServices>
        <Image
          src={"/images/facebook.png"}
          alt="Texto aqui"
          height={50}
          width={50}
        />
        <Subtitle size={"medium"} color={"dark_blue"}>
          Algum texto aqui
        </Subtitle>
        <Paragraph size={"small"} color={"gray"}>
          Algum texto aqui
        </Paragraph>
      </CardServices>
    </CardContainer>
  </Container>
);
