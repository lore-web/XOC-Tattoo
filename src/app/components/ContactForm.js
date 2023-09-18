import styled from "styled-components";

export default function ContactForm() {
  return (
    <StyledSection>
      <StyledButton>Kontaktformular</StyledButton>
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
