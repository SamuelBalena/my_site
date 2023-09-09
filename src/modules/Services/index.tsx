import Image from "next/image";
import { CardServices } from "../../components/Cards/CardServices";
import { Paragraph } from "../../components/Paragraph/styles";
import { Subtitle } from "../../components/Subtitle/styles";
import { Title } from "../../components/Title/style";
import { CardContainer, Container, ServicesItem } from "./styles";

export const Services = (): JSX.Element => (
  <Container id="Services">
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
          src={"/images/landingpage.png"}
          alt="Texto aqui"
          height={50}
          width={50}
        />
        <Subtitle size={"medium"} color={"dark_blue"}>
          Landingpage
        </Subtitle>
        <Paragraph size={"smalles"} color={"gray"}>
          Posso desenvolver o layout do seu site!
        </Paragraph>
      </CardServices>
      <CardServices>
        <Image
          src={"/images/api.png"}
          alt="Texto aqui"
          height={50}
          width={50}
        />
        <Subtitle size={"medium"} color={"dark_blue"}>
          Sistema
        </Subtitle>
        <Paragraph size={"smalles"} color={"gray"}>
          Desenvolvimento da parte lógica do seus serviços.
        </Paragraph>
      </CardServices>
      <CardServices>
        <Image
          src={"/images/email.png"}
          alt="Texto aqui"
          height={50}
          width={50}
        />
        <Subtitle size={"medium"} color={"dark_blue"}>
          E-mail
        </Subtitle>
        <Paragraph size={"smalles"} color={"gray"}>
          Posso desenvolver o seu e-mail, e fazer o marketing.
        </Paragraph>
      </CardServices>
      <CardServices>
        <Image
          src={"/images/analytics.png"}
          alt="Texto aqui"
          height={50}
          width={50}
        />
        <Subtitle size={"medium"} color={"dark_blue"}>
          Analytics
        </Subtitle>
        <Paragraph size={"smalles"} color={"gray"}>
          Utilizo os serviços da Google para monitorar o seu negócio.
        </Paragraph>
      </CardServices>
    </CardContainer>
  </Container>
);
