import { SafeArea } from "capacitor-plugin-safe-area";

import { memo, useLayoutEffect, useRef } from "react";

import { ScreenOrientation } from "@capacitor/screen-orientation";

import useStyles from "./styles";
import { AppPaddingProps } from "./types";

function AppPaddingRight(props: Readonly<AppPaddingProps>) {
  const { classes, cx } = useStyles();
  const { className } = props;
  const paddingRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const padding = paddingRef.current;
    if (!padding) return;

    const showPadding = async () => {
      const { insets } = await SafeArea.getSafeAreaInsets();
      padding.style.width = `${insets.right}px`;
    };

    showPadding();

    ScreenOrientation.addListener("screenOrientationChange", showPadding);
  }, []);

  return (
    <div ref={paddingRef} className={cx(classes.default, className)}></div>
  );
}

export default memo(AppPaddingRight);
