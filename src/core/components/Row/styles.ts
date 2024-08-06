import { tss } from "tss-react";

const useStyles = tss.create({
  row: {
    display: "flex",
    width: "100%",
    flex: 1,
  },

  fullHeight: {
    height: "100%",
  },
});

export default useStyles;
