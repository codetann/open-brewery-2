import React from "react";
import styled from "styled-components";

export default function Brewery({ data }) {
  return (
    <Container>
      <h3>{data.name}</h3>
      <Location>
        <p>{data.street}</p>
        <p>
          {data.city}, {data.state}
        </p>
      </Location>
    </Container>
  );
}

const Container = styled.div`
  width: 350px;
  height: 200px;
  background: #2d2c31;
  margin: 3rem 0;
  color: white;
  padding: 1rem;

  p {
    color: #a3a3a3;
  }
`;

const Location = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
`;
