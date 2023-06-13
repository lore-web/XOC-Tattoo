import Image from "next/image";
import { useState } from "react";

export default function BurgerMenu() {
  const [toggle, setToggle] = useState(false);
  const burgerIcon = toggle ? "/x-mark.svg" : "/menu-outline.svg";

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <button onClick={handleToggle}>
      <Image
        src={burgerIcon}
        alt="Hamburger Menü"
        height={32}
        width={32}
        priority
      />
    </button>
  );
}
