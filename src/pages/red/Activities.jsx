import styled, { keyframes } from "styled-components";
import {
  FaChalkboardTeacher,
  FaNetworkWired,
  FaHandsHelping,
  FaUserGraduate,
  FaGlobeAmericas,
} from "react-icons/fa";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ActivitiesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 1rem 2rem;
`;

const ActivitiesContainer = styled.div`
  width: 18rem;
  height: fit-content;
  padding: 2rem;
  text-align: center;
  letter-spacing: 1px;
  border-radius: 1rem;
  color: #fff;
  background: linear-gradient(135deg, #2aa47c, #1f8b68);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  animation: ${fadeInUp} 0.8s ease forwards;
  animation-delay: ${(props) => props.delay || "0s"};
  opacity: 0;

  &:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
  }

  &:after {
    content: "✨";
    display: block;
    margin-top: 0.5rem;
    font-size: 1.5rem;
    opacity: 0.5;
  }

  svg {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #fff;
  }

  h3 {
      font-size: 1.3rem;
      margin-bottom: 0.5rem;
    }

  p {
    font-size: 1rem;
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
  
`;

export const Activities = () => (
  <ActivitiesWrapper>
    <ActivitiesContainer delay="0s">
      <FaChalkboardTeacher />
      <h3>Conferencias y publicaciones</h3>
      <p>Organización de conferencias, proyecto de investigación y publicaciones científicas</p>
    </ActivitiesContainer>
    <ActivitiesContainer delay="0.1s">
      <FaNetworkWired />
      <h3>Networking</h3>
      <p>Creación de conexiones entre actores nacionales e internacionales</p>
    </ActivitiesContainer>
    <ActivitiesContainer delay="0.2s">
      <FaHandsHelping />
      <h3>Mentorías</h3>
      <p>Apoyo e intercambio de experiencias entre profesionales e investigadores</p>
    </ActivitiesContainer>
    <ActivitiesContainer delay="0.3s">
      <FaUserGraduate />
      <h3>Promoción de investigadoras</h3>
      <p>Fomentar la visbilidad y el reconocimiento de las mujeres en la investigación</p>
    </ActivitiesContainer>
    <ActivitiesContainer delay="0.4s">
      <FaGlobeAmericas />
      <h3>Eventos Internacionales</h3>
      <p>Participación y organización de eventos a nivel mundial</p>
    </ActivitiesContainer>
  </ActivitiesWrapper>
);
