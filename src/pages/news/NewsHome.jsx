import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import { InterviewNotes } from "../../components/interview/InterviewNotes";
import { PosgradesSeminaires } from "../../components/seminars/PosgradesSeminaires";

const NewsContainer = styled.div`
  min-height: 80vh;
  background: var(--main-red-blue);
  display: flex;
  flex-direction: column;
  padding: 3rem 5rem;
  color: #f4ebd0;
`;

const SectionWrapper = styled.div`
  background: var(--main-red-blue);
  margin-bottom: 1.5rem;
  overflow: hidden;
  transition: all 0.3s ease;

  border-bottom: 3px solid var(--main-red-yellow);

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  font-size: 1.4rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }

  .dropdowIcon {
    color: var(--main-red-yellow);
    transition: transform 0.3s ease;
    transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0deg)")};
  }
`;

const SectionContent = styled.div`
  max-height: ${({ open }) => (open ? "2000px" : "0")};
  transition: max-height 0.6s ease, padding 0.4s ease;
  padding: ${({ open }) => (open ? "1.5rem 2rem" : "0 2rem")};
`;

const newsOptions = [
  {
    value: "seminaires",
    title: "Seminarios",
    icon: "fa-chalkboard-teacher",
    children: <PosgradesSeminaires />
  },
  {
    value: "interview",
    title: "Entrevistas",
    icon: "fa-comments",
    children: <InterviewNotes />
  }
];

export const NewsHome = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (value) => {
    setOpenSection(openSection === value ? null : value);
  };

  return (
    <NewsContainer>
      {newsOptions.map((news, idx) => (
        <SectionWrapper key={idx}>
          <SectionHeader
            open={openSection === news.value}
            onClick={() => toggleSection(news.value)}
          >
            <div>
              <FontAwesomeIcon icon={news.icon} /> {news.title}
            </div>
            <FontAwesomeIcon className="dropdowIcon" icon="fa-chevron-down" open={openSection === news.value} />
          </SectionHeader>
          <SectionContent open={openSection === news.value}>
            {news.children}
          </SectionContent>
        </SectionWrapper>
      ))}
    </NewsContainer>
  );
};