import { ReactNode } from "react";
import { Container } from "./styles";

interface CardPortfolioProps {
  children: ReactNode;
}

export const CardPortfolio = ({
  children,
}: CardPortfolioProps): JSX.Element => <Container>{children}</Container>;
