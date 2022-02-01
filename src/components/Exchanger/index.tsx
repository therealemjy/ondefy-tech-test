import * as React from "react";

// TODO: pass down through props
import { tokens } from "../../data";
import Select from "../Select";
import * as Styles from "./styles";

export interface ExchangerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Exchanger: React.FC<ExchangerProps> = ({ ...containerProps }) => {
  const options = tokens.map((token) => ({
    label: token.symbol,
    value: token.address,
    imageURI: token.logoURI,
  }));

  return (
    <Styles.Container {...containerProps}>
      <Select
        label="Swap from"
        options={options}
        selectedOptionValue={options[0].value}
      />
    </Styles.Container>
  );
};

export default Exchanger;
