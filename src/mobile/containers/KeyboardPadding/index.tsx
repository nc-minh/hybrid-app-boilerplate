import { useLayoutEffect, useRef } from "react";

import { Keyboard } from "@capacitor/keyboard";

export default function KeyboardPadding() {
  const keyboardPaddingRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const keyboardPadding = keyboardPaddingRef.current;
    if (!keyboardPadding) return;

    Keyboard.addListener("keyboardWillShow", ({ keyboardHeight }) => {
      keyboardPadding.style.height = `${keyboardHeight}px`;
      document.activeElement?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    });

    Keyboard.addListener("keyboardWillHide", () => {
      keyboardPadding.style.height = `0px`;
    });
  }, []);

  return <div id="keyboard-padding" ref={keyboardPaddingRef}></div>;
}
