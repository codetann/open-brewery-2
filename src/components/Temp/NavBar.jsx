import React from "react";
import styled from "styled-components";
import { useWindowSize } from "../../hooks/useWindowSize";

const LINKS = ["Home", "About"];

export default function NavBar() {
  // hooks
  const { width } = useWindowSize();

  return (
    <Nav>
      <h2>Open Brewery</h2>
      <ul>
        {LINKS.map((link) => (
          <li key={link}>{link}</li>
        ))}
      </ul>
    </Nav>
  );
}

// Styled Components
const Nav = styled.nav`
  width: 100%;
  height: 5rem;
  background: #292930;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  h2 {
    color: #eecd54;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      list-style: none;
      margin-left: 1.5rem;
      color: #a2a8af;
    }
  }
`;
