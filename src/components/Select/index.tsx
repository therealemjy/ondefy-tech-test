import { useState, useMemo } from "react";
import * as Styles from "./styles";

export interface Option {
  label: string;
  value: string;
  imageURI: string;
}

export interface SelectProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  label: string;
  options: Option[];
  value: Option["value"];
  onChange: (value: Option["value"]) => void;
}

const Select: React.FC<SelectProps> = ({
  label,
  options,
  value,
  onChange,
  ...containerProps
}) => {
  const [isDropdownDisplayed, setIsDropdownDisplayed] = useState(false);

  const toggleDropdown = () =>
    setIsDropdownDisplayed(
      (existingIsDropdownDisplayed) => !existingIsDropdownDisplayed
    );

  const selectOption = (selectedOptionValue: Option["value"]) => {
    onChange(selectedOptionValue);
    setIsDropdownDisplayed(false);
  };

  const selectedOption = useMemo(
    () => options.find((option) => option.value === value),
    [options, value]
  );

  return (
    <Styles.Container {...containerProps}>
      <Styles.Label htmlFor="dropdown-toggle">{label}</Styles.Label>

      <Styles.Item
        type="button"
        onClick={toggleDropdown}
        name="dropdown-toggle"
      >
        <Styles.ItemImage src={selectedOption?.imageURI} />
        <Styles.ItemLabel>{selectedOption?.label}</Styles.ItemLabel>
        <Styles.ItemCaret />
      </Styles.Item>

      {isDropdownDisplayed && (
        <Styles.Dropdown>
          {options
            .filter((option) => option.value !== value)
            .map((option) => (
              <Styles.DropdownItem
                type="button"
                onClick={() => selectOption(option.value)}
              >
                <Styles.ItemImage src={option.imageURI} />
                <Styles.ItemLabel>{option.label}</Styles.ItemLabel>
              </Styles.DropdownItem>
            ))}
        </Styles.Dropdown>
      )}
    </Styles.Container>
  );
};

export default Select;
