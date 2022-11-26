import Image from "next/image";
import { Paragraph } from "../../Paragraph/styles";
import { Title } from "../../Title/style";
import { Container } from "./styles";

interface CardPostsProps {
  src: string;
  alt: string;
  title: string;
  content: string;
}

export const CardPosts = ({
  src,
  alt,
  title,
  content,
}: CardPostsProps): JSX.Element => (
  <Container>
    <header>
      <Image src={src} alt={alt} width={100} height={100} />
    </header>
    <article>
      <Title size={"medium"} weight={"bold"} textTransform={"uppercase"}>
        {title}
      </Title>
      <Paragraph size={"small"} color={"gray"} weight={"regular"}>
        {content}
      </Paragraph>
    </article>
  </Container>
);
