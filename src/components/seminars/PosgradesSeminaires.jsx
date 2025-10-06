import styled from "styled-components";
import { seminarsData } from "../../data/posgradesData";

const SeminarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 3rem;
  justify-items: center;
`;

const CardInfoWrapper = styled.div`
  border: 1px solid var(--main-red-yellow);
  border-radius: 1rem;
  width: 30vw;
  max-width: 280px;
  text-align: center;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
  }

  img {
    width: 100%;
    height: 160px;
    border-radius: 0.5rem;
    object-fit: cover;
  }

  h4 {
    color: var(--main-red-yellow);
    margin: 1rem 0 0.5rem;
    font-size: 1.2rem;
  }

  a {
    color: white;
    text-decoration: none;
    display: block;
    margin-bottom: 0.3rem;
    &:hover {
      color: var(--main-red-yellow);
      text-decoration: underline;
    }
  }
`;


export const PosgradesSeminaires = () => {
  return (
    <SeminarContainer>
      {seminarsData.map((item, idx) => (
        <CardInfoWrapper key={idx}>
          <img src={item.flag} alt={item.country} />
          <h4>{item.country}</h4>
          {item.programs.map((prog, i) => (
            <a key={i} href={prog.link} target="_blank" rel="noreferrer">
              {prog.title}
            </a>
          ))}
        </CardInfoWrapper>
      ))}
    </SeminarContainer>
  );
};
