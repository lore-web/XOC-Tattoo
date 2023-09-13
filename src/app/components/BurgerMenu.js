"use client";

import Image from "next/image";
import useStore from "@/hooks/useStore";

export default function BurgerMenu() {
  const [isOpened, handleDialogModal] = useStore((state) => [
    state.isOpened,
    state.handleDialogModal,
  ]);
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
