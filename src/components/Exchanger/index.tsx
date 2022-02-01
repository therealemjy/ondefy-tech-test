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
    // TODO: remove inline-style once dev completed
    <Styles.Container {...containerProps} style={{ height: "400px" }}>
      <Select
        label="Swap from"
        options={options}
        value={options[0].value}
        onChange={() => {}}
      />
    </Styles.Container>
  );
};

export default Exchanger;
