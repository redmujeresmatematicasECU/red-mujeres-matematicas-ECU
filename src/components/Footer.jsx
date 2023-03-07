import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterContainer = styled.div`
  background: var(--main-red-blue);
  display: flex;
  flex-direction: row;
  padding: 2rem 2rem;
  gap: 3rem;
  div {
    font-weight: bold;
    &:first-child {
      padding-bottom: 1rem;
    }
    &:last-child {
      display: inline;
    }
  }
  svg {
    margin-right: 1rem;
  }
`;

export const Footer = () => (
  <FooterContainer>
    <div>
      <div>Redes Sociales</div>
      <div>
        <FontAwesomeIcon icon={["fab", "facebook"]} size="xl" />
        <FontAwesomeIcon icon={["fab", "twitter"]} size="xl" />
        <div>@RMMathEC</div>
      </div>
    </div>
    <div>
      <div>Contáctanos</div>
      <div>
        <FontAwesomeIcon icon="fa-envelope" size="xl" />
        <div>redmujeresmatematicas.ec@gmail.com</div>
      </div>
    </div>
  </FooterContainer>
);
