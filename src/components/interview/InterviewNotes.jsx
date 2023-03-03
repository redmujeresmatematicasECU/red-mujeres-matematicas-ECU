import styled from "styled-components";
import mexico from "../../assets/flags/mexico.png";
import argentina from "../../assets/flags/argentina.png";
import paisesBajos from "../../assets/flags/paisesBajos.png";

const InterviewContainer = styled.ul`
  background: var(--main-red-blue);
  display: flex;
  flex-direction: column;
  padding: 2rem;
  line-height: 1.5rem;
  img {
    width: 1.5rem;
  }
`;

const womanList = [
  {
    name: "Selene Casas",
    flag: <img src={mexico} alt="mexico" />
  },
  {
    name: "María Eugenia Martínez",
    flag: <img src={argentina} alt="argentina" />
  },
  {
    name: "Maria Vlasiu",
    flag: <img src={paisesBajos} alt="paisesBajos" />
  }
];

export const InterviewNotes = () => {
  return (
    <InterviewContainer>
      {womanList.map((item, idx) => (
        <li key={idx}>
          <div>
            {item.name} {item.flag}
          </div>
        </li>
      ))}
    </InterviewContainer>
  );
};
