import styled from "styled-components";
import portailFoto from "../../public/assets/photos/portada.png";

const HomeWrapper = styled.div`
  min-height: 80vh;
  background: var(--main-red-yellow);
  display: flex;
  img {
    height: 100%;
  }
`;

const InfoWrapper = styled.div`
  margin: 0 2rem;
  div {
    font-size: 1.2rem;
    line-height: 1.5;
  }
`;

export const Home = () => (
  <HomeWrapper>
    <InfoWrapper>
      <h1>Red de Mujeres Matemáticas Ecuador</h1>
      <div>
        El 17 de julio de 2021 se firmó una carta de compromiso entre diferentes
        organizaciones, representantes de universidades, docentes,
        investigadores y jóvenes estudiantes de matemáticas para la creación de
        la Red y el 8 de noviembre de 2021 se inscribió oficialmente la Red en
        la SENESCYT la Red de Mujeres matemáticas.
      </div>
    </InfoWrapper>
    <div>
      <img src={portailFoto} alt="Ecuador" />
    </div>
  </HomeWrapper>
);
