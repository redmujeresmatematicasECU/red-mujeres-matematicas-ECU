import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NodesWrapper = styled.div`
  min-height: 80vh;
  background: var(--main-red-yellow);
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  flex-wrap: wrap;
  padding: 0 5rem;
`;

const NodeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  width: 17rem;
  height: fit-content;
  div {
    display: flex;
    justify-content: space-evenly;
    align-content: center;
    text-align: center;
    margin: 0 1rem;
    gap: 1rem;
    div {
      align-self: center;
    }
  }
  p {
    text-align: center;
  }
`;

export const Nodes = () => (
  <NodesWrapper>
    <NodeCardContainer>
      <div>
        <h2>Academia e investigación</h2>
        <div>
          <FontAwesomeIcon icon="fa-search" />
        </div>
      </div>
      <p>
        Crear y fortalecer una red de contactos que permitan desarrollar
        investigación y actividades académicas, además de eventos
        especializados.
      </p>
    </NodeCardContainer>
    <NodeCardContainer>
      <div>
        <h2>Industria</h2>
        <div>
          <FontAwesomeIcon icon="fa-industry" />
        </div>
      </div>
      <p>
        En este espacio se quiere dar a conocer el trabajo que realizan las
        mujeres matemáticas en la industria, además de que la red permita que se
        puedan hacer contactos entre diferentes personas que estén trabajando es
        este ámbito.
      </p>
    </NodeCardContainer>
    <NodeCardContainer>
      <div>
        <h2>Divulgación</h2>
        <div>
          <FontAwesomeIcon icon="fa-comments" />
        </div>
      </div>
      <p>
        En marzo de 2021 se realizó el primer evento de divulgación de mujeres
        matemáticas. Queremos que este espacio crezca y que se realicen eventos
        similares cada año. En mayo de 2022, se realizó el segundo evento de
        divulgación por el Día Internacional de la Mujer en las Matemáticas.
      </p>
    </NodeCardContainer>
    <NodeCardContainer>
      <div>
        <h2>Sembrar futuro</h2>
        <div>
          <FontAwesomeIcon icon="fa-seedling" />
        </div>
      </div>
      <p>
        El trabajo comienza con las más pequeñas. La Red se plantea realizar
        acciones en escuelas y colegios para motivar a las niñas y jovenes a
        estudiar matemáticas.
      </p>
    </NodeCardContainer>
    <NodeCardContainer>
      <div>
        <h2>Embajadoras</h2>
        <div>
          <FontAwesomeIcon icon="fa-id-card" />
        </div>
      </div>
      <p>
        Las embajadoras son estudiantes de los últimos años de las
        universidades. Creemos que es importante apuntalar las futuras
        generaciones y crear espacios de intercambio.
      </p>
    </NodeCardContainer>
  </NodesWrapper>
);
