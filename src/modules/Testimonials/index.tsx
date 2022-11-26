import { CardTestimonials } from "../../components/Cards/CardTestimonials";
import { Paragraph } from "../../components/Paragraph/styles";
import { Subtitle } from "../../components/Subtitle/styles";
import { Title } from "../../components/Title/style";
import {
  Container,
  TestimonialsContainer,
  TestimonialsContainerItem,
  TestimonialsItem,
} from "./styles";

export const Testimonials = (): JSX.Element => (
  <Container>
    <TestimonialsItem>
      <Title size={"medium"} textTransform={"uppercase"}>
        Incríveis depoimentos
      </Title>
      <Subtitle color={"dark_blue"} size={"biggest"}>
        Quem já trabalhou comigo sabe...
      </Subtitle>
      <Paragraph color={"gray"}>
        Aqui estão alguns depoimentos dos meus colegas de trabalho
      </Paragraph>
    </TestimonialsItem>

    <TestimonialsContainer>
      <TestimonialsContainerItem>
        <CardTestimonials
          src="/images/facebook.png"
          alt="sla"
          name="nome"
          jobRole="front"
          testimonial="aqui"
        />
      </TestimonialsContainerItem>
      <TestimonialsContainerItem>
        <CardTestimonials
          src="/images/facebook.png"
          alt="sla"
          name="nome"
          jobRole="front"
          testimonial="aqui"
        />
      </TestimonialsContainerItem>
      <TestimonialsContainerItem>
        <CardTestimonials
          src="/images/facebook.png"
          alt="sla"
          name="nome"
          jobRole="front"
          testimonial="aqui"
        />
      </TestimonialsContainerItem>
    </TestimonialsContainer>
  </Container>
);
