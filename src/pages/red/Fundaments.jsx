import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faHandsHelping } from "@fortawesome/free-solid-svg-icons";

import { InfoBlock } from "./WhoAreWe";

const Section = styled.section`
  padding: 0.5rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 2rem;
  align-items: stretch;
`;

const Card = styled.div`
  background: linear-gradient(135deg, #14615F 0%, #2BD4CE 100%);
  color: #f4ebd0;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  text-align: center;
  margin: 1rem 0;
  color: #0C3B3A;
`;

const Title = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing: 0.5px;
  color: #0C3B3A;
  text-align: center;
`;

const Text = styled.p`
  font-size: 1.05rem;
  line-height: 1.8;
  text-align: justify;
  color: #0C3B3A;
`;

export const Fundaments = () => (
  <Section>
    <Grid>
      <InfoBlock>
        <IconWrapper>
          <FontAwesomeIcon icon={faBullseye} />
        </IconWrapper>
        <Title>Visión</Title>
        <Text>
          Consolidar a la red como un referente nacional e internacional en el
          área de las matemáticas, sensibilizando a la comunidad científica,
          educativa y empresarial sobre la equidad de género, y siendo un lugar
          de encuentro para las mujeres matemáticas.
        </Text>
      </InfoBlock>

      <InfoBlock>
        <IconWrapper>
          <FontAwesomeIcon icon={faHandsHelping} />
        </IconWrapper>
        <Title>Misión</Title>
        <Text>
          La Red de Mujeres Matemáticas Ecuatorianas busca organizar
          periódicamente espacios de trabajo, intercambio y desarrollo de
          capacidades para fortalecer el rol de las mujeres en las matemáticas a
          nivel nacional e internacional. Además, la Red quiere consolidar los
          esfuerzos de varias organizaciones que han venido trabajando en este
          tema y ser un referente a nivel nacional.
        </Text>
      </InfoBlock>
    </Grid>
  </Section>
);
