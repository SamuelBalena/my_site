import Image from "next/image";
import { Paragraph } from "../../Paragraph/styles";
import { Subtitle } from "../../Subtitle/styles";
import { Title } from "../../Title/style";
import { Container } from "./styles";

interface CardTestimonialsProps {
  src: string;
  alt: string;
  name: string;
  jobRole: string;
  testimonial: string;
}

export const CardTestimonials = ({
  src,
  alt,
  name,
  jobRole,
  testimonial,
}: CardTestimonialsProps): JSX.Element => (
  <Container>
    <header>
      <Image src={src} alt={alt} height={50} width={50} />
      <div>
        <Title size={"medium"} weight={"semiBold"}>
          {name}
        </Title>
        <Subtitle size={"small"} color={"gray"} weight={"regular"}>
          {jobRole}
        </Subtitle>
      </div>
    </header>
    <main>
      <Paragraph size={"smalles"} color={"gray"} weight={"medium"}>
        {testimonial}
      </Paragraph>
    </main>
  </Container>
);
