import styled from "styled-components";
import papel from "../../../public/assets/photos/papel_clara.png";

const WhoAreWeContainer = styled.div`
  background-image: url(${papel});
  background-color: white;
  margin-bottom: 2rem;
  padding: 2rem;
  height: fit-content;
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1.5;
`;

export const WhoAreWe = () => (
  <div>
    <WhoAreWeContainer>
      La Red de Mujeres Matemáticas del Ecuador, es una comunidad de actores
      sociales, representada por la figura legal de Corporación, interesadas en
      consolidarnos como un referente nacional e internacional en el área de las
      matemáticas, sensibilizando a la comunidad científica, educativa y
      empresarial sobre la equidad de género, y siendo un lugar de encuentro
      para las mujeres matemáticas.
    </WhoAreWeContainer>
    <div>
      <strong>Carta de constitución y firmas:</strong> <a href="#">aquí</a>.
    </div>
    <div>
      <strong>Tiempo de constitución:</strong>
      <p>La Red se constituye por un periodo de 5 años.</p>
    </div>
  </div>
);
