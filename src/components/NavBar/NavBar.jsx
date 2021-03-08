import React, { useEffect } from "react";
import styled from "styled-components";
import { useAppContext } from "../../context/Provider";
import { useWindowSize } from "../../hooks/useWindowSize";
// components
import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";

const LINKS = ["Home", "About"];

export default function NavBar() {
  // - Hooks
  const { navToggle, setNavToggle } = useAppContext();
  const { width } = useWindowSize();

  return (
    <>
      {/* DESKTOP VIEW */}
      {width >= 800 && (
        <DesktopContainer>
          <div>
            <LogoText>Open Brewery</LogoText>
          </div>
          <Links>
            {LINKS.map((link) => (
              <LinkText key={link}>{link}</LinkText>
            ))}
            <SearchBar />
          </Links>
        </DesktopContainer>
      )}

      {/* MOBILE VIEW */}
      {width < 800 && (
        <>
          <MobileContainer>
            <div>
              <LogoText>Open Brewery</LogoText>
            </div>
            <Menu onClick={setNavToggle} className="fas fa-bars"></Menu>
          </MobileContainer>
          <MobileMenu
            width={width}
            links={LINKS}
            toggled={navToggle}
            setToggled={setNavToggle}
          />
        </>
      )}
    </>
  );
}

// Styled Components
const DesktopContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 5rem;
  background: #2d2c31;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;
const MobileContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 5rem;
  background: #2d2c31;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const LogoText = styled.h1`
  color: #eecd54;
  font-size: 28px;
`;

const Menu = styled.i`
  color: white;
  font-size: 26px;
`;

const Links = styled.div`
  width: 30rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LinkText = styled.p`
  color: #878791;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;
