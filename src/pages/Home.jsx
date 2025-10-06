import styled from "styled-components";
import portailFoto from "../assets/photos/portada.png";

const HomeWrapper = styled.div`
  display: flex;
  background: var(--main-red-yellow);
  height: -webkit-fill-available;
  img {
    height: 100%;
  }
  
  a {
    color: var(--main-red-blue);
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: auto 2rem;
`;

export const Home = () => (
  <HomeWrapper>
    <InfoWrapper>
      <h1>Red de Mujeres Matemáticas Ecuador</h1>
      <div>
        El 17 de julio de 2021 se firmó una carta de compromiso entre diferentes
        organizaciones, representantes de universidades, docentes,
        investigadores y jóvenes estudiantes de matemáticas para la creación de
        la Red y el 8 de noviembre de 2021 se la inscribió oficialmente en
        la <a href="https://www.senescyt.gob.ec/web/guest/consultas" aria-description="Hipervínculo para acceder a la página de la SENESCYT">SENESCYT</a>.
      </div>
    </InfoWrapper>
    <img src={portailFoto} alt="Ecuador" aria-description="Tres fotos alineadas verticalmente. La primera una playa de las Islas Galápagos con un león marino en primer plano, la segunda un paisaje de la iglesia de San Francisco de Quito y por último una foto del río Napo en el Oriente ecuatoriano" />
  </HomeWrapper>
);
