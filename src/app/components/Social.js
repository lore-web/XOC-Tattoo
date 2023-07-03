"use client";
import { styled } from "styled-components";
import { v4 as uuidv4 } from "uuid";

export default function Social() {
  return (
    <section>
      <StyledSocial>
        <li key={uuidv4()}>facebook</li>
        <li key={uuidv4()}>instagram</li>
        <li key={uuidv4()}>whatsapp</li>
        <li key={uuidv4()}>mail</li>
      </StyledSocial>
    </section>
  );
}

const StyledSocial = styled.ul`
  list-style: none;

  li {
    font-size: 1.5rem;
    margin: 1rem;
  }
`;
