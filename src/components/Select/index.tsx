import { useMemo } from "react";
import * as Styles from "./styles";

export interface Option {
  label: string;
  value: string | number;
  imageURI: string;
}

export interface SelectProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  options: Option[];
  selectedOptionValue: Option["value"];
}

const Select: React.FC<SelectProps> = ({
  label,
  options,
  selectedOptionValue,
  ...containerProps
}) => {
  const selectedOption = useMemo(
    () => options.find((option) => option.value === selectedOptionValue),
    [options, selectedOptionValue]
  );

  return (
    <Styles.Container {...containerProps}>
      <Styles.SelectContainer type="button">
        <Styles.ItemImage src={selectedOption?.imageURI} />

        <Styles.ItemLabel>{selectedOption?.label}</Styles.ItemLabel>

        <Styles.ItemCaret />
      </Styles.SelectContainer>
    </Styles.Container>
  );
};

export default Select;
