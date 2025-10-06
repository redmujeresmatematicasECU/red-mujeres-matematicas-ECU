import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: #f4ebd0;
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

const OutsideLink = styled.a`
  color: #f4ebd0;
  cursor: pointer;
`;

export const Footer = () => (
  <FooterContainer>
    <div>
      <div>Redes Sociales</div>
      <div>
        <FontAwesomeIcon icon={["fab", "facebook"]} size="xl" />
        <OutsideLink href="https://facebook.com/RMMathEC">@RMMathEC</OutsideLink>
      </div>
    </div>
    <div>
      <div>Contáctanos</div>
      <div>
        <FontAwesomeIcon icon="fa-envelope" size="xl" />
        <OutsideLink href="mailto:redmujeresmatematicas.ec@gmail.com">redmujeresmatematicas.ec@gmail.com</OutsideLink>
      </div>
    </div>
  </FooterContainer>
);
