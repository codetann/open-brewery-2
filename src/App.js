import React from "react";
import styled from "styled-components";
// components
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <Container>
      <NavBar />
    </Container>
  );
}

// - styled components - //
const Container = styled.div`
  width: 100vw;
  height: auto;
`;

export default App;
