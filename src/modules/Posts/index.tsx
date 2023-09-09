import { CardPosts } from "../../components/Cards/CardPosts";
import { Paragraph } from "../../components/Paragraph/styles";
import { Subtitle } from "../../components/Subtitle/styles";
import { Title } from "../../components/Title/style";
import {
  Container,
  PostsCarousel,
  PostsCarouselItem,
  PostsItem,
} from "./styles";

export const Posts = (): JSX.Element => (
  <Container id="Articles">
    <PostsItem>
      <Title size={"medium"} textTransform={"uppercase"}>
        Posts Recentes
      </Title>
      <Subtitle color={"dark_blue"} size={"biggest"}>
        Artigos do meu Linkedin
      </Subtitle>
      <Paragraph color={"gray"}>
        Aqui estão alguns dos meus artigos sobre programação.
      </Paragraph>
    </PostsItem>

    <PostsCarousel>
      <PostsCarouselItem>
        <CardPosts
          src="/images/Banner código.jfif"
          alt="Banner Código"
          title="Algoritmos: Tipos de Dados"
          content="No contexto do mundo da programação, dados é tudo aquilo..."
          href="https://www.linkedin.com/pulse/algoritmos-tipos-de-dados-samuel-balena/?trackingId=RZuLexAeRtypqV4lfccBxQ%3D%3D"
        />
      </PostsCarouselItem>
      <PostsCarouselItem>
        <CardPosts
          src="/images/Banner React.png"
          alt="Banner React"
          title="Mergulhando no React 🤿"
          content="Hoje em dia no ramo de programação sabemos que existe..."
          href="https://www.linkedin.com/pulse/mergulhando-react-samuel-balena/?trackingId=RZuLexAeRtypqV4lfccBxQ%3D%3D"
        />
      </PostsCarouselItem>
      <PostsCarouselItem>
        <CardPosts
          src="/images/Banner código.jfif"
          alt="Banner Código"
          title="Introdução a Algoritmos 👨‍💻"
          content="Algoritmos é um assunto básico que está presente em nossa..."
          href="https://www.linkedin.com/pulse/introdu%25C3%25A7%25C3%25A3o-algoritmos-samuel-balena/?trackingId=RZuLexAeRtypqV4lfccBxQ%3D%3D"
        />
      </PostsCarouselItem>
    </PostsCarousel>
  </Container>
);
