import * as Styles from "./styles";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  note?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  className,
  note,
  ...inputProps
}) => (
  <Styles.Container className={className}>
    <Styles.Label htmlFor={inputProps.name}>{label}</Styles.Label>

    <Styles.Input {...inputProps} />

    {!!note && <Styles.Note>{note}</Styles.Note>}
  </Styles.Container>
);

export default Input;
