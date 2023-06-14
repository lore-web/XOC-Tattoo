"use client";

import Image from "next/image";

export default function BurgerMenu({ handleDialogModal, isOpened }) {
  const burgerIcon = isOpened ? "/x-mark.svg" : "/menu-outline.svg";

  return (
    <>
      <button onClick={() => handleDialogModal(true)}>
        <Image
          src={burgerIcon}
          alt="Hamburger Menü"
          height={32}
          width={32}
          priority
        />
      </button>
    </>
  );
}
