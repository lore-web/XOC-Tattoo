"use client";
import { styled } from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <PagesList>
        <li>Tattoo Studio</li>
        <li>Tatto Gallery</li>
        <li>Art Gallery</li>
        <li>About Me</li>
      </PagesList>
      <SocialsList>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>WhatsApp</li>
        <li>E-Mail</li>
      </SocialsList>
      <LegalList>
        <li>Impressum</li>
        <li>Datenschutz</li>
      </LegalList>
      <StyledCopyright>&copy; 2023 made by LoRe</StyledCopyright>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "Pages Socials"
    "Legal Legal"
    "copyright copyright";
`;

const PagesList = styled.ul`
  grid-area: Pages;
  list-style: none;
  justify-self: center;
  align-self: center;
`;

const SocialsList = styled(PagesList)`
  grid-area: Socials;
`;

const LegalList = styled(PagesList)`
  grid-area: Legal;
`;

const StyledCopyright = styled.p`
  grid-area: copyright;
  justify-self: center;
  align-self: center;
`;
