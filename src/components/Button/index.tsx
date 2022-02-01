import * as Styles from "./styles";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ value, ...buttonProps }) => (
  <Styles.Container {...buttonProps}>{value}</Styles.Container>
);

export default Button;
