"use client";
import { styled } from "styled-components";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

export default function Footer() {
  return (
    <StyledFooter>
      <PagesList>
        <li key={uuidv4()}>
          <Link href={"http://www.drawinknerds.de/"}>Tattoo Studio</Link>
        </li>
        <li key={uuidv4()}>
          <Link href={"/tattoogallery"}>Tattoo Gallerie</Link>
        </li>
        <li key={uuidv4()}>
          <Link href={"/artgallery"}>Kunst Gallerie</Link>
        </li>
        <li key={uuidv4()}>
          <Link href={"/about"}>About Me</Link>
        </li>
      </PagesList>
      <SocialsList>
        <li key={uuidv4()}>
          <Link href={"https://www.facebook.com/xoctattoo"}>Facebook</Link>
        </li>
        <li key={uuidv4()}>
          <Link href={"https://www.instagram.com/xoctattoo/"}>Instagram</Link>
        </li>
        <li key={uuidv4()}>
          <Link href={"https://wa.me/4915736201164?text=Hallo20%Marco"}>
            WhatsApp
          </Link>
        </li>
        <li key={uuidv4()}>
          <Link href={"mailto://xoctattoo@gmail.com"}>E-Mail</Link>
        </li>
      </SocialsList>
      <LegalList>
        <li key={uuidv4()}>
          <Link href={"/imprint"}>Impressum</Link>
        </li>
        <li key={uuidv4()}>
          <Link href={"/dataprivacy"}>Datenschutz</Link>
        </li>
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
