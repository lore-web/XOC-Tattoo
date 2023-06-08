"use client";
import { styled } from "styled-components";

export default function Social() {
  return (
    <section>
      <StyledSocial>
        <li>facebook</li>
        <li>instagram</li>
        <li>whatsapp</li>
        <li>mail</li>
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
