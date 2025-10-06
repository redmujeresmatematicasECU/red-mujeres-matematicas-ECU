import styled from "styled-components";
import { interviewList } from "../../data/interviewData";

const InterviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 2rem 3rem;
  background: var(--main-red-blue);
`;

const InterviewCard = styled.div`
  width: 20vw;
  border: 1px solid var(--main-red-yellow);
  border-radius: 1rem;
  text-align: center;
  padding: 1.5rem 1rem;
  color: white;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
  }

  img {
    width: 2rem;
    height: 1.5rem;
    margin-top: 0.5rem;
    border-radius: 2px;
  }

  a {
    display: block;
    color: var(--main-red-yellow);
    font-weight: bold;
    font-size: 1rem;
    text-decoration: none;
    margin-top: 0.5rem;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const InterviewNotes = () => {
  return (
    <InterviewContainer>
      {interviewList.map((item, idx) => (
        <InterviewCard key={idx}>
          <a href={item.link} target="_blank" rel="noreferrer">
            {item.name}
          </a>
          <img src={item.flag} alt={`flag-${item.name}`} />
        </InterviewCard>
      ))}
    </InterviewContainer>
  );
};

