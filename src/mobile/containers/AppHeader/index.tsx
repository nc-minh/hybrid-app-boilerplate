import { SafeArea } from "capacitor-plugin-safe-area";

import { memo, useLayoutEffect, useRef } from "react";

import { ScreenOrientation } from "@capacitor/screen-orientation";

import useStyles from "./styles";
import { AppHeaderProps } from "./types";

function AppHeader(props: Readonly<AppHeaderProps>) {
  const { classes, cx } = useStyles();
  const { className } = props;
  const headerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const showHeader = async () => {
      const { insets } = await SafeArea.getSafeAreaInsets();
      header.style.height = `${insets.top}px`;
    };

    showHeader();

    ScreenOrientation.addListener("screenOrientationChange", showHeader);
  }, []);

  return <div ref={headerRef} className={cx(classes.default, className)}></div>;
}

export default memo(AppHeader);
