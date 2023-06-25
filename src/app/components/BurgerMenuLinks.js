import { styled } from "styled-components";
import Link from "next/link";

export default function BurgerMenuLinks() {
  return (
    <BurgerMenuLinkList>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/tattoogallery"}>Tattoo Gallery</Link>
      </li>
      <li>
        <Link href={"/artgallery"}>Art Gallery</Link>
      </li>
      <li>
        <Link href={"/about"}>About Me</Link>
      </li>
    </BurgerMenuLinkList>
  );
}

const BurgerMenuLinkList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
