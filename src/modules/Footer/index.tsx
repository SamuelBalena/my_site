import Link from "next/link";
import { Paragraph } from "../../components/Paragraph/styles";
import { Subtitle } from "../../components/Subtitle/styles";
import { Title } from "../../components/Title/style";
import { Container } from "./styles";

export const Footer = (): JSX.Element => (
  <Container>
    <div>
      <span>
        <Title color={"white"}>Vamos conversar!</Title>
        <Subtitle color={"white"} size={"medium"}>
          Contatos
        </Subtitle>
        <Paragraph color={"white"}>samucabalena@gmail.com</Paragraph>
        <Paragraph color={"white"}>+55 11 95374-8908</Paragraph>
      </span>
      <span>
        <Subtitle color={"white"}>Siga-me nas redes sociais</Subtitle>
        <Paragraph color={"white"}>
          Se você gostou dos meus serviços entre em contato comigo e me siga nas
          redes sociais.
        </Paragraph>
      </span>
      <span>
        <Subtitle color={"white"}>Redes Sociais</Subtitle>
        <ul>
          <li>
            <Link href={"https://www.linkedin.com/in/samuelbalena/"}>
              Linkedin
            </Link>
          </li>
          <li>
            <Link
              href={
                "https://api.whatsapp.com/send/?phone=5511953748908&text&app_absent=0"
              }
            >
              Whatsapp
            </Link>
          </li>
          <li>
            <Link href={"https://www.facebook.com/samuel.balenadasilva/"}>
              Facebook
            </Link>
          </li>
        </ul>
      </span>
    </div>
  </Container>
);
