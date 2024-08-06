import { tss } from "tss-react";

const useStyles = tss.create({
  column: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    height: "100%",
    overflow: "auto",
  },

  fullWidth: {
    width: "100%",
  },
});

export default useStyles;
