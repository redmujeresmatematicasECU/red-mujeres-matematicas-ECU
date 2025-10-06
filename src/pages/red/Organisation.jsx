import styled from "styled-components";
import anyPhoto from "../../assets/memberPhotos/ana-julia-escobar.jpeg";
import kathyPhoto from "../../assets/memberPhotos/katherine-morales.jpg";
import majoPhoto from "../../assets/memberPhotos/maria-castellano.jpeg";
import eliPhoto from "../../assets/memberPhotos/elizabeth-zuniga.jpeg";
import viviPhoto from "../../assets/memberPhotos/viviana-gavilanes.png";

const OrganisationContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  color: #f4ebd0;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  color: #f4ebd0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Paragraph = styled.p`
  max-width: 800px;
  text-align: left;
  line-height: 1.6;
  font-size: 1.1rem;
  margin-bottom: 3rem;
`;

const DirectiveContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  margin-bottom: 3rem;
`;

const Card = styled.div`
  background-color: #14615F;
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
  width: 220px;
  transition: all 0.3s ease;
  backdrop-filter: blur(6px);

  &:hover {
    background-color: #1C8784;
    transform: translateY(-6px);
  }

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
    border: 3px solid #f4ebd0;
  }

  strong {
    display: block;
    color: #ffe08a;
    margin-bottom: 0.3rem;
  }

  div {
    color: #f4ebd0;
    font-size: 1rem;
    font-weight: 500;
  }
`;

export const Organisation = () => (
  <OrganisationContainer>
    <Paragraph>
      La Directiva Provisional, como previsto en la segunda disposición
      transitoria del Capítulo VII (Estatutos), estará conformada por:
    </Paragraph>

    <Title>Directiva</Title>
    <DirectiveContainer>
      <Card>
        <img src={eliPhoto} alt="eli" />
        <strong>Presidenta</strong>
        <div>Elizabeth Zúñiga</div>
      </Card>
      <Card>
        <img src={anyPhoto} alt="any" />
        <strong>Secretaria General</strong>
        <div>Ana Julia Escobar</div>
      </Card>
      <Card>
        <img src={kathyPhoto} alt="kathy" />
        <strong>Tesorera</strong>
        <div>Katherine Morales</div>
      </Card>
    </DirectiveContainer>

    <Title>Representantes de cada nodo</Title>
    <DirectiveContainer>
      <Card>
        <img src={eliPhoto} alt="eli" />
        <strong>Academia e Investigación</strong>
        <div>Elizabeth Zúñiga</div>
      </Card>
      <Card>
        <img src={kathyPhoto} alt="kathy" />
        <strong>Industria</strong>
        <div>Katherine Morales</div>
      </Card>
      <Card>
        <img src={anyPhoto} alt="any" />
        <strong>Divulgación</strong>
        <div>Ana Julia Escobar</div>
      </Card>
      <Card>
        <img src={majoPhoto} alt="majo" />
        <strong>Sembrar Futuro</strong>
        <div>María José Castellano</div>
      </Card>
      <Card>
        <img src={viviPhoto} alt="vivi" />
        <strong>Embajadoras</strong>
        <div>Viviana Gavilanes</div>
      </Card>
    </DirectiveContainer>
  </OrganisationContainer>
);
