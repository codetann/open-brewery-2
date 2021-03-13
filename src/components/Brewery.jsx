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
        <Icons>
          {data.phone && (
            <a href={`tel:${data.phone}`}>
              <i className="fas fa-phone"></i>
            </a>
          )}
          {data.longitude && (
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${data.latitude},${data.longitude}`}
              target="_blank"
            >
              <i className="fas fa-map-marker-alt"></i>
            </a>
          )}
          {data.website_url && (
            <a href={data.website_url} target="_blank">
              <i className="fas fa-globe"></i>
            </a>
          )}
        </Icons>
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
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  border-radius: 0.5rem;
`;

const Location = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  line-height: 1.5rem;

  color: #a3a3a3;
`;

const Icons = styled.div`
  i {
    font-size: 24px;
    margin-top: 2rem;
    margin-right: 1rem;
    transition: 0.3s;
  }

  a {
    color: #a3a3a3;
  }

  i:hover {
    color: #e92153;
    cursor: pointer;
  }
`;
