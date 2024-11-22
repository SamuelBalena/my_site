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
  <Container id="Testimonials">
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
          src="/images/Matheus.png"
          alt="Matheus Sartori"
          name="Matheus Sartori"
          jobRole="Desenvolvedor Full Stack"
          testimonial="O Samuel é uma pessoa extremamente dedicada, e teve uma evolução muito boa no período em que trabalhamos juntos. Teve várias sugestões legais, para melhorar alguns pontos nos projetos que trabalhamos, e pude observar que ele já é um excelente profissional no front-end."
        />
      </TestimonialsContainerItem>
      <TestimonialsContainerItem>
        <CardTestimonials
          src="/images/D_ario.png"
          alt="Dário Junior"
          name="Dário Junior"
          jobRole="Desenvolvedor Full Stack"
          testimonial="Trabalhar com o Samuel foi excelente, dedicação, facilidade de comunicação e um espírito de equipe sensacional, com certeza agrega muito no ambiente em que está e faz muita falta, topa qualquer desafio com muito prazer!"
        />
      </TestimonialsContainerItem>
      <TestimonialsContainerItem>
        <CardTestimonials
          src="/images/Daniel.png"
          alt="Daniel Sobrinho"
          name="Daniel Sobrinho"
          jobRole="Desenvolvedor Full Stack"
          testimonial="Foi um grande prazer trabalhar com o Samuel, sempre apresenta boas sugestões para os projetos em que participa, se dedica bastante naquilo que faz. Certamente o Samuel é um profissional que agrega bastante ao time!"
        />
      </TestimonialsContainerItem>
    </TestimonialsContainer>
  </Container>
);
