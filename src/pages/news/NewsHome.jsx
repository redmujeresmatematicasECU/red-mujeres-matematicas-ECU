import { useState } from "react";
import styled from "styled-components";
// import { InterviewNotes } from "../../components/interview/InterviewNotes";
import { PosgradesSeminaires } from "../../components/seminars/PosgradesSeminaires";

const NewsContainer = styled.div`
  min-height: 80vh;
  background: var(--main-red-blue);
  display: flex;
  flex-direction: column;
  padding-left: 5rem;
  padding-right: 5rem;
`;

const SeminaireWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--main-red-yellow);
  border-radius: 50px;
  margin-bottom: 2rem;
  .titleSeminar {
    height: 2rem;
    cursor: pointer;
    padding-top: 1rem;
  }
`;

const newsOptions = [
  {
    value: "seminaires",
    title: "Seminarios",
    children: <PosgradesSeminaires />
  }
  // {
  //   value: "interview",
  //   title: "Entrevistas",
  //   children: <InterviewNotes />
  // }
];

export const NewsHome = () => {
  const [subPage, setSubPage] = useState();

  return (
    <NewsContainer>
      {newsOptions.map((news, idx) => (
        <SeminaireWrapper key={idx}>
          <div className="titleSeminar" onClick={() => setSubPage(news.value)}>
            {news.title}
          </div>
          {subPage === news.value && news.children}
        </SeminaireWrapper>
      ))}
    </NewsContainer>
  );
};
