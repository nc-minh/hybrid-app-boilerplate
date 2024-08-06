import useStyles from "./styles";

interface Props {
  children?: React.ReactNode;
  fullHeight?: boolean;
}

export default function Row(props: Readonly<Props>) {
  const { children, fullHeight } = props;
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.row, { [classes.fullHeight]: fullHeight })}>
      {children}
    </div>
  );
}
