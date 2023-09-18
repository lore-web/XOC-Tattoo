import styled from "styled-components";
import Link from "next/link";

export default function ContactForm() {
  return (
    <StyledSection>
      <StyledLink href={"/"}>Kontaktformular</StyledLink>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  width: 100%;
  height: 3rem;
  border: solid green;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
  width: 30%;
  height: 100%;
`;

const StyledLink = styled(Link)`
  border: solid 1px white;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;
