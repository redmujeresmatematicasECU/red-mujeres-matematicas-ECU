import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FundamentsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5rem;
  h3 {
    text-align: center;
    color: #ffff;
  }
`;
const IconWrapper = styled.div`
  text-align: center;
`;

export const Fundaments = () => (
  <div>
    <FundamentsContainer>
      <div>
        <IconWrapper>
          <FontAwesomeIcon
            icon="fa-solid fa-circle-check"
            size="xl"
            className="check-icon"
          />
        </IconWrapper>
        <div>
          <h3>Visión</h3>
          <p>
            Consolidar a la red como un referente nacional e internacional en el
            área de las matemáticas, sensibilizando a la comunidad científica,
            educativa y empresarial sobre la equidad de género, y siendo un
            lugar de encuentro para las mujeres matemáticas.
          </p>
        </div>
      </div>
      <div>
        <IconWrapper>
          <FontAwesomeIcon
            icon="fa-solid fa-circle-check"
            size="xl"
            className="check-icon"
          />
        </IconWrapper>
        <div>
          <h3>Misión</h3>
          <p>
            La Red de Mujeres Matemáticas Ecuatorianas busca organizar
            periódicamente espacios de trabajo, intercambio y de desarrollo de
            capacidades para fortalecer el rol de las mujeres en las matemáticas
            a nivel nacional e internacional. Además la Red quiere consolidar
            los esfuerzos de varias organizaciones que han venido trabajando en
            este tema y ser un referente a nivel nacional.
          </p>
        </div>
      </div>
    </FundamentsContainer>
  </div>
);
