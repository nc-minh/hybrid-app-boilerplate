import "./global.module.css";

interface Props {
  children: JSX.Element;
}
export const GlobalStyles = ({ children }: Props) => {
  return <>{children}</>;
};
