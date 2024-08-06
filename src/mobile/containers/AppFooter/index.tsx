import { SafeArea } from "capacitor-plugin-safe-area";

import { memo, useLayoutEffect, useRef } from "react";

import { Keyboard } from "@capacitor/keyboard";
import { ScreenOrientation } from "@capacitor/screen-orientation";

import useStyles from "./styles";

function AppFooter() {
  const { classes } = useStyles();

  const footerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const footer = footerRef.current;
    if (!footerRef.current) return;

    const showFooter = async () => {
      const { insets } = await SafeArea.getSafeAreaInsets();
      footer!.style.height = `${insets.bottom}px`;
    };

    const hideFooter = () => {
      footer!.style.height = `0px`;
    };

    showFooter();

    ScreenOrientation.addListener("screenOrientationChange", showFooter);
    Keyboard.addListener("keyboardWillShow", hideFooter);
    Keyboard.addListener("keyboardWillHide", showFooter);
  }, []);

  return <div ref={footerRef} className={classes.default}></div>;
}

export default memo(AppFooter);
