import Image from "next/image";
import { Paragraph } from "../../Paragraph/styles";
import { Title } from "../../Title/style";
import { Container } from "./styles";

interface CardPostsProps {
  src: string;
  alt: string;
  title: string;
  content: string;
  href: string;
}

export const CardPosts = ({
  src,
  alt,
  title,
  content,
  href,
}: CardPostsProps): JSX.Element => (
  <Container href={href}>
    <header>
      <Image src={src} alt={alt} width={350} height={200} />
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
