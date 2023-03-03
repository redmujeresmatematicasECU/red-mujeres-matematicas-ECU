import styled from "styled-components";

const ActivitiesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const ActivitiesContainer = styled.div`
  font-size: 2rem;
  line-height: 3rem;
  width: 26rem;
  height: 5rem;
  padding: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  border: 1px solid #288c70;
  background-color: #288c70;
  border-radius: 2%;
`;

export const Activities = () => (
  <ActivitiesWrapper>
    <ActivitiesContainer>
      Conferencias, proyectos de investigación y publicaciones
    </ActivitiesContainer>
    <ActivitiesContainer>
      Networking nacional e internacional
    </ActivitiesContainer>
    <ActivitiesContainer>Mentorías</ActivitiesContainer>
    <ActivitiesContainer>Promoción de investigadoras</ActivitiesContainer>
    <ActivitiesContainer>Eventos Internacionales</ActivitiesContainer>
  </ActivitiesWrapper>
);
