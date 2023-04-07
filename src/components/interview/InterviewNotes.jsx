import styled from "styled-components";
import mexico from "../../assets/flags/mexico.png";
import argentina from "../../assets/flags/argentina.png";
import paisesBajos from "../../assets/flags/paisesBajos.png";
import peru from "../../assets/flags/peru.png";

const InterviewContainer = styled.ul`
  background: var(--main-red-blue);
  display: flex;
  flex-direction: column;
  padding: 2rem;
  line-height: 1.5rem;
  img {
    width: 1.5rem;
  }
  a {
    color: var(--main-red-yellow);
    text-decoration: none;
  }
`;

const womanList = [
  {
    name: "Selene Casas",
    flag: <img src={mexico} alt="mexico" />,
    ref: "https://drive.google.com/file/d/15yczP5-E8S6nLXA3CG_OuGE_JkDqcpNv/view?usp=share_link",
  },
  {
    name: "Maria Vlasiou",
    flag: <img src={paisesBajos} alt="paisesBajos" />,
    ref: "https://drive.google.com/file/d/1EBtBIV_rGAv6rK7gH3TldEMpnsA4TEop/view?usp=share_link",
  },
  {
    name: "María Eugenia Martínez",
    flag: <img src={argentina} alt="argentina" />,
    ref: "https://drive.google.com/file/d/1xIPxHicBsrx797wealGYO27zEN85aOOJ/view?usp=share_link",
  },
  {
    name: "Roxana López",
    flag: <img src={peru} alt="peru" />,
    ref: "https://drive.google.com/file/d/1P3Zk1d2gQPB42gvd0DiDoDmiSg1DKTpr/view?usp=sharing",
  },
];

export const InterviewNotes = () => {
  return (
    <InterviewContainer>
      {womanList.map((item, idx) => (
        <li key={idx}>
          <div>
            <a href={item.ref} target="_blank">{item.name}</a> {item.flag}
          </div>
        </li>
      ))}
    </InterviewContainer>
  );
};
