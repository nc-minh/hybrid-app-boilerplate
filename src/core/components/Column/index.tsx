import useStyles from "./styles";

interface Props {
  children?: React.ReactNode;
  fullWidth?: boolean;
}

export default function Column(props: Readonly<Props>) {
  const { children, fullWidth } = props;
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.column, { [classes.fullWidth]: fullWidth })}>
      {children}
    </div>
  );
}
