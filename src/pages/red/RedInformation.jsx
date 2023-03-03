import { useState } from "react";
import styled from "styled-components";
import { WhoAreWe } from "./WhoAreWe";
import { Fundaments } from "./Fundaments";
import { Organisation } from "./Organisation";
import { Activities } from "./Activities";

const WhoAreWeWrapper = styled.div`
  min-height: 80vh;
  background: var(--main-red-blue);
  display: flex;
  flex-direction: column;
  padding-left: 5rem;
  padding-right: 5rem;
`;

const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0.5rem 0 2rem;
  div {
    cursor: pointer;
    color: white;
    &.isActive {
      color: var(--main-red-yellow);
    }
  }
`;

export const RedInformation = () => {
  const [page, setPage] = useState("whoarewe");

  const FinalComposant = () => {
    switch (page) {
      case "fundaments":
        return <Fundaments />;
      case "organisation":
        return <Organisation />;
      case "activities":
        return <Activities />;
      case "whoarewe":
      default:
        return <WhoAreWe />;
    }
  };
  return (
    <WhoAreWeWrapper>
      <NavigationWrapper>
        <div
          className={page === "whoarewe" ? "isActive" : ""}
          onClick={() => setPage("whoarewe")}
        >
          ¿Quiénes somos?
        </div>
        <div
          className={page === "fundaments" ? "isActive" : ""}
          onClick={() => setPage("fundaments")}
        >
          Fundamentos
        </div>
        <div
          className={page === "organisation" ? "isActive" : ""}
          onClick={() => setPage("organisation")}
        >
          Organización
        </div>
        <div
          className={page === "activities" ? "isActive" : ""}
          onClick={() => setPage("activities")}
        >
          Actividades
        </div>
      </NavigationWrapper>
      <FinalComposant />
    </WhoAreWeWrapper>
  );
};
