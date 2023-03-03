import styled from "styled-components";

import anyPhoto from "../../../public/assets/memberPhotos/ana-julia-escobar.jpeg";
import kathyPhoto from "../../../public/assets/memberPhotos/katherine-morales.jpg";
import majoPhoto from "../../../public/assets/memberPhotos/maria-castellano.jpeg";
import eliPhoto from "../../../public/assets/memberPhotos/elizabeth-zuniga.jpeg";

const OrganisationContainer = styled.div`
  min-height: 80vh;
  background: var(--main-red-blue);
  display: flex;
  flex-direction: column;
  padding: 0 5rem;
`;

const DirectiveContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  div {
    color: var(--main-red-yellow);
    strong {
      color: white;
    }
  }
  img {
    width: 10rem;
    border-radius: 50px;
    height: 11.5rem;
  }
`;

export const Organisation = () => (
  <OrganisationContainer>
    <p>
      La Directiva Provisional como previsto en la segunda disposición
      transitoria del Capítulo VII (Estatutos) estará conformada por:
    </p>

    <h3>Directiva:</h3>
    <DirectiveContainer>
      <CardWrapper>
        <span>
          <img src={eliPhoto} alt="eli" />
        </span>
        <div>
          <strong>Presidenta</strong>
        </div>
        <div>Elizabeth Zúñiga</div>
      </CardWrapper>
      <CardWrapper>
        <span>
          <img src={anyPhoto} alt="any" />
        </span>
        <div>
          <strong>Secretaria general</strong>
        </div>
        <div>Ana Julia Escobar</div>
      </CardWrapper>
      <CardWrapper>
        <span>
          <img src={kathyPhoto} alt="kathy" />
        </span>
        <div>
          <strong>Tesorera</strong>
        </div>
        <div>Katherine Morales</div>
      </CardWrapper>
    </DirectiveContainer>
    <h3>Representantes de cada nodo:</h3>
    <DirectiveContainer>
      <CardWrapper>
        <span>
          <img src={eliPhoto} alt="eli" />
        </span>
        <div>
          <strong>Academia e Investigación</strong>
        </div>
        <div>Elizabeth Zúñiga</div>
      </CardWrapper>
      <CardWrapper>
        <span>
          <img src={kathyPhoto} alt="kathy" />
        </span>
        <div>
          <strong>Industria</strong>
        </div>
        <div>Katherine Morales</div>
      </CardWrapper>
      <CardWrapper>
        <span>
          <img src={anyPhoto} alt="any" />
        </span>
        <div>
          <strong>Divulgación</strong>
        </div>
        <div>Ana Julia Escobar</div>
      </CardWrapper>
      <CardWrapper>
        <span>
          <img src={majoPhoto} alt="majo" />
        </span>
        <div>
          <strong>Sembrar Futuro</strong>
        </div>
        <div>María José Castellano</div>
      </CardWrapper>
      <CardWrapper>
        <span>FOTO</span>
        <div>
          <strong>Embajadoras</strong>
        </div>
        <div>Viviana Gavilanes</div>
      </CardWrapper>
    </DirectiveContainer>
  </OrganisationContainer>
);
