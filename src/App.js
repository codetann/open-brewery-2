import React from "react";
import styled from "styled-components";
// components
import NavBar from "./components/NavBar/NavBar";
import { useAppContext } from "./context/Provider";
import Brewery from "./components/Brewery";

function App() {
  const { data, error } = useAppContext();

  return (
    <Container>
      <NavBar />
      <BreweriesContainer>
        {error && <h1>{error}</h1>}
        {data.map((item) => (
          <Brewery key={item.id} data={item} />
        ))}
      </BreweriesContainer>
    </Container>
  );
}

// - styled components - //
const Container = styled.div`
  height: auto;
`;

const BreweriesContainer = styled.div`
  width: 100%;
  padding-top: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 3rem;

  h1 {
    color: white;
    padding-top: 5rem;
  }
`;

export default App;
