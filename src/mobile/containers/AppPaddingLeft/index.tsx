import { SafeArea } from "capacitor-plugin-safe-area";

import { memo, useLayoutEffect, useRef } from "react";

import { ScreenOrientation } from "@capacitor/screen-orientation";

import useStyles from "./styles";
import { AppPaddingProps } from "./types";

function AppPaddingLeft(props: Readonly<AppPaddingProps>) {
  const { classes, cx } = useStyles();
  const { className } = props;
  const paddingRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const padding = paddingRef.current;
    if (!padding) return;

    const showPadding = async () => {
      const { insets } = await SafeArea.getSafeAreaInsets();
      padding.style.width = `${insets.left}px`;
    };

    showPadding();

    ScreenOrientation.addListener("screenOrientationChange", showPadding);
  }, []);

  return (
    <div ref={paddingRef} className={cx(classes.default, className)}></div>
  );
}

export default memo(AppPaddingLeft);
