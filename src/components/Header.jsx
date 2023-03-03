import { Link } from "react-router-dom";
import styled from "styled-components";
import logoRed from "../assets/logos/LOGO_Red.png";

const menuItems = [
  { title: "Inicio", url: "/" },
  { title: "RMMathEC", url: "/red" },
  { title: "Nodos", url: "/nodos" },
  { title: "Noticias", url: "/noticias" }
];

const Nav = styled.nav`
  background: var(--main-red-blue);
  display: flex;
  img {
    max-height: 5rem;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    list-style-type: none;
  }
  a {
    color: #f4ebd0;
    text-decoration: none;
    font-weight: bold;
    display: inline-block;
    padding: 1rem;
  }
`;

export const Header = () => {
  return (
    <Nav>
      <ul>
        <li>
          <img src={logoRed} alt="Logo-Red" />
        </li>
        {menuItems.map((item, idx) => (
          <li key={idx}>
            <Link to={item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </Nav>
  );
};
