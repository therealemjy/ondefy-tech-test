import { useState } from "react";

// TODO: pass down through props
import { tokens } from "../../data";
import Select from "../Select";
import Input from "../Input";
import * as Styles from "./styles";

export interface ExchangerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Exchanger: React.FC<ExchangerProps> = ({ ...containerProps }) => {
  const [inputValue, setInputValue] = useState<string | undefined>();

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

      <Input
        label="Amount to send"
        value={inputValue}
        onChange={(e) => setInputValue(e.currentTarget.value)}
        note="Balance: 0.0ETH"
      />
    </Styles.Container>
  );
};

export default Exchanger;
