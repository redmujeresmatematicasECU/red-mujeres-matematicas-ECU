import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterContainer = styled.div`
  background: var(--main-red-blue);
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem;
  div {
    font-weight: bold;
    &:first-child {
      padding-bottom: 1rem;
    }
    &:last-child {
      display: inline;
    }
  }
`;

export const Footer = () => (
  <FooterContainer>
    <div>Redes Sociales</div>
    <div>
      <FontAwesomeIcon icon={["fab", "facebook"]} size="xl" />
      <FontAwesomeIcon icon={["fab", "twitter"]} size="xl" />
      <div>@RMMathEC</div>
    </div>
  </FooterContainer>
);
