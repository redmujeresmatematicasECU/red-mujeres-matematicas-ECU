import styled from "styled-components";
import papel from "../../assets/photos/papel_clara.png";

const Section = styled.section`
  background-image: url(${papel});
  background-repeat: repeat;
  background-color: #f4ebd0;
  padding: 4rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  margin: 3rem auto;
  color: #333;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  color: var(--main-red-blue);
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: 700;
  letter-spacing: 0.5px;
`;

const Text = styled.p`
  font-size: 1.15rem;
  line-height: 1.8;
  text-align: justify;
  margin-bottom: 2rem;
`;

export const InfoBlock = styled.div`
  background-color: #f4ebd0;
  border-left: 4px solid var(--main-red-blue);
  padding: 1rem 1.5rem;
  margin-bottom: 1.5rem;
  border-radius: 0.5rem;

  strong {
    color: var(--main-red-blue);
  }

  a {
    color: var(--main-red-blue);
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const WhoAreWe = () => (
  <Section>
    <Title>¿Quiénes somos?</Title>

    <Text>
      La <strong>Red de Mujeres Matemáticas del Ecuador</strong> es una comunidad de
      actores sociales, representada por la figura legal de Corporación,
      interesadas en consolidarnos como un referente nacional e internacional en
      el área de las matemáticas, sensibilizando a la comunidad científica,
      educativa y empresarial sobre la equidad de género, y siendo un lugar de
      encuentro para las mujeres matemáticas.
    </Text>

    <InfoBlock>
      <strong>Carta de constitución y firmas:</strong> <a href="#">aquí</a>.
    </InfoBlock>

    <InfoBlock>
      <strong>Tiempo de constitución:</strong>
      <p>La Red se constituye por un periodo de 5 años.</p>
    </InfoBlock>
  </Section>
);
