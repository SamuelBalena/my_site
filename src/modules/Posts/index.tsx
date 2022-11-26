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
  <Container>
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
          src="/images/facebook.png"
          alt=""
          title="teste"
          content="teste"
        />
      </PostsCarouselItem>
      <PostsCarouselItem>
        <CardPosts
          src="/images/facebook.png"
          alt=""
          title="teste"
          content="teste"
        />
      </PostsCarouselItem>
      <PostsCarouselItem>
        <CardPosts
          src="/images/facebook.png"
          alt=""
          title="teste"
          content="teste"
        />
      </PostsCarouselItem>
    </PostsCarousel>
  </Container>
);
