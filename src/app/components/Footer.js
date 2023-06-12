"use client";
import { styled } from "styled-components";
import Link from "next/link";

export default function Footer() {
  return (
    <StyledFooter>
      <PagesList>
        <li>
          <Link href={"http://www.drawinknerds.de/"}>Tattoo Studio</Link>
        </li>
        <li>
          <Link href={"/tattoogallery"}>Tattoo Gallerie</Link>
        </li>
        <li>
          <Link href={"/artgallery"}>Kunst Gallerie</Link>
        </li>
        <li>
          <Link href={"/about"}>About Me</Link>
        </li>
      </PagesList>
      <SocialsList>
        <li>
          <Link href={"https://www.facebook.com/xoctattoo"}>Facebook</Link>
        </li>
        <li>
          <Link href={"https://www.instagram.com/xoctattoo/"}>Instagram</Link>
        </li>
        <li>
          <Link
            href={
              "https://wa.me/4915736201164?text=Hallo20%Marco20%ich20%möchte20%gerne20%einen20%Termin20%mit20%dir20%vereinbaren"
            }
          >
            WhatsApp
          </Link>
        </li>
        <li>
          <Link href={"mailto://xoctattoo@gmail.com"}>E-Mail</Link>
        </li>
      </SocialsList>
      <LegalList>
        <li>
          <Link href={"/imprint"}>Impressum</Link>
        </li>
        <li>
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
