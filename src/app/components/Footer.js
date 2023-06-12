"use client";
import { styled } from "styled-components";
import Link from "next/link";

export default function Footer() {
  return (
    <StyledFooter>
      <PagesList>
        <Link href={"http://www.drawinknerds.de/"}>Tattoo Studio</Link>
        <Link href={"/tattoogallery"}>Tattoo Gallerie</Link>
        <Link href={"/artgallery"}>Kunst Gallerie</Link>
        <Link href={"/about"}>About Me</Link>
      </PagesList>
      <SocialsList>
        <Link href={"https://www.facebook.com/xoctattoo"}>Facebook</Link>
        <Link href={"https://www.instagram.com/xoctattoo/"}>Instagram</Link>
        <Link
          href={
            "https://wa.me/4915736201164?text=Hallo20%Marco20%ich20%möchte20%gerne20%einen20%Termin20%mit20%dir20%vereinbaren"
          }
        >
          WhatsApp
        </Link>
        <Link href={"mailto://xoctattoo@gmail.com"}>E-Mail</Link>
      </SocialsList>
      <LegalList>
        <Link href={"/imprint"}>Impressum</Link>
        <Link href={"/dataprivacy"}>Datenschutz</Link>
      </LegalList>
      <StyledCopyright>
        &copy; 2023 made by{" "}
        <Link href={"https://github.com/lore-web"}>LoRe</Link>
      </StyledCopyright>
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
