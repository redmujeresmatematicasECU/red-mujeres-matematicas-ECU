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
  a {
    color: var(--main-red-yellow);
    text-decoration: none;
  }
`;

const womanList = [
  {
    name: "Selene Casas",
    flag: <img src={mexico} alt="mexico" />,
    ref: "https://drive.google.com/uc?export=download&id=15yczP5-E8S6nLXA3CG_OuGE_JkDqcpNv",
  },
  // {
  //   name: "Maria Vlasiu",
  //   flag: <img src={paisesBajos} alt="paisesBajos" />,
  //   ref: "https://drive.google.com/uc?export=download&id=1EBtBIV_rGAv6rK7gH3TldEMpnsA4TEop",
  // },
  // {
  //   name: "María Eugenia Martínez",
  //   flag: <img src={argentina} alt="argentina" />,
  //   ref: "",
  // },
];

export const InterviewNotes = () => {
  return (
    <InterviewContainer>
      {womanList.map((item, idx) => (
        <li key={idx}>
          <div>
            <a href={item.ref}>{item.name}</a> {item.flag}
          </div>
        </li>
      ))}
    </InterviewContainer>
  );
};
