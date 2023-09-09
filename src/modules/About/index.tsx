import { Paragraph } from "../../components/Paragraph/styles";
import { SocialIcons } from "../../components/Icons/Social";
import { Subtitle } from "../../components/Subtitle/styles";
import { Title } from "../../components/Title/style";
import {
  AboutSocialMedia,
  AboutItem,
  Container,
  SocialMediaIcons,
} from "./styles";

export const About = (): JSX.Element => (
  <Container id="About">
    <AboutItem>
      <Title size={"medium"} weight={"semiBold"} textTransform={"uppercase"}>
        Sobre mim
      </Title>
      <Subtitle size={"biggest"} weight={"bold"} color={"dark_blue"}>
        Talk is cheap, show me the code.
      </Subtitle>
      <Paragraph size={"small"} weight={"regular"} color={"gray"}>
        Sou desenvolvedor com experiência de mercado de trabalho, já participei
        de projetos para grandes marcas!
      </Paragraph>
    </AboutItem>

    <AboutSocialMedia>
      <Subtitle size={"biggest"} weight={"semiBold"}>
        Conecte-se comigo
      </Subtitle>
      <Paragraph size={"small"} weight={"regular"} color={"gray"}>
        Venha me conhecer um pouco mais sobre mim em minhas redes sociais.
      </Paragraph>
      <SocialMediaIcons>
        <SocialIcons
          src="/images/linkedin.png"
          width={25}
          height={25}
          href="https://www.linkedin.com/in/samuelbalena/"
        />
        <SocialIcons
          src="/images/facebook.png"
          width={25}
          height={25}
          href="https://www.facebook.com/samuel.balenadasilva/"
        />
        <SocialIcons
          src="/images/whatsapp.png"
          width={30}
          height={30}
          href="https://api.whatsapp.com/send/?phone=5511953748908&text&app_absent=0"
        />
      </SocialMediaIcons>
    </AboutSocialMedia>
  </Container>
);
