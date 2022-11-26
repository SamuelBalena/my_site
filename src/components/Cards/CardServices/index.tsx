import { ReactNode } from "react";
import { Container } from "./styles";

interface CardServicesProps {
  children: ReactNode;
}

export const CardServices = ({ children }: CardServicesProps): JSX.Element => (
  <Container>{children}</Container>
);
