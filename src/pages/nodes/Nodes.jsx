import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InfoBlock } from "../red/WhoAreWe";

const NodesWrapper = styled.div`
  min-height: 80vh;
  background: var(--main-red-yellow);
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  flex-wrap: wrap;
  padding: 1rem 5rem;
`;

const NodesContainer = styled(InfoBlock)`
  width: 20vw;
  &:hover {
    background-color: #FCA903;
    transform: translateY(-6px);
  }
  color: #0C3B3A;
`

const TitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`

export const Nodes = () => (
  <NodesWrapper>
    <NodesContainer>
      <TitleContainer>
        <h2>Academia e investigación</h2>
        <FontAwesomeIcon icon="fa-search" />
      </TitleContainer>
      <p>
        Crear y fortalecer una red de contactos que permitan desarrollar
        investigación y actividades académicas, además de eventos
        especializados.
      </p>
    </NodesContainer>
    <NodesContainer>
      <TitleContainer>
        <h2>Industria</h2>
        <FontAwesomeIcon icon="fa-industry" />
      </TitleContainer>
      <p>
        En este espacio se quiere dar a conocer el trabajo que realizan las
        mujeres matemáticas en la industria, además de que la red permita que se
        puedan hacer contactos entre diferentes personas que estén trabajando es
        este ámbito.
      </p>
    </NodesContainer>
    <NodesContainer>
      <TitleContainer>
        <h2>Divulgación</h2>
        <FontAwesomeIcon icon="fa-comments" />
      </TitleContainer>
      <p>
        En marzo de 2021 se realizó el primer evento de divulgación de mujeres
        matemáticas. Queremos que este espacio crezca y que se realicen eventos
        similares cada año. En mayo de 2022, se realizó el segundo evento de
        divulgación por el Día Internacional de la Mujer en las Matemáticas.
      </p>
    </NodesContainer>
    <NodesContainer>
      <TitleContainer>
        <h2>Sembrar futuro</h2>
        <FontAwesomeIcon icon="fa-seedling" />
      </TitleContainer>
      <p>
        El trabajo comienza con las más pequeñas. La Red se plantea realizar
        acciones en escuelas y colegios para motivar a las niñas y jovenes a
        estudiar matemáticas.
      </p>
    </NodesContainer>
    <NodesContainer>
      <TitleContainer>
        <h2>Embajadoras</h2>
        <FontAwesomeIcon icon="fa-id-card" />
      </TitleContainer>
      <p>
        Las embajadoras son estudiantes de los últimos años de las
        universidades. Creemos que es importante apuntalar las futuras
        generaciones y crear espacios de intercambio.
      </p>
    </NodesContainer>
  </NodesWrapper>
);
