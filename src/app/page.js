"use client";

import { styled } from "styled-components";
import { v4 as uuidv4 } from "uuid";

const Title = styled.h1`
  color: blue;
`;

export default function Home() {
  return (
    <main key={uuidv4()}>
      <Title>Hello World!</Title>
    </main>
  );
}
