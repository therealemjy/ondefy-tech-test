import { Network, Token } from "../../types";
import Select from "../Select";
import Input from "../Input";
import Button from "../Button";
import * as Styles from "./styles";

export interface ExchangerProps extends React.HTMLAttributes<HTMLDivElement> {
  networks: Network[];
  tokens: Token[];
}

const Exchanger: React.FC<ExchangerProps> = ({
  networks,
  tokens,
  ...containerProps
}) => {
  const networkOptions = networks.map((network) => ({
    label: network.name,
    value: network.networkKey,
    imageURI: network.logoURI,
  }));

  const options = tokens.map((token) => ({
    label: token.symbol,
    value: token.address,
    imageURI: token.logoURI,
  }));

  return (
    <Styles.Container {...containerProps}>
      <Styles.Row>
        <Styles.Column>
          <Select
            label="Swap from"
            options={options}
            value={options[0].value}
            onChange={() => {}}
          />
        </Styles.Column>

        <Styles.RightColumn>
          <Select
            label="Network"
            options={networkOptions}
            value={networkOptions[0].value}
            onChange={() => {}}
          />
        </Styles.RightColumn>
      </Styles.Row>

      <Styles.Row>
        <Styles.Column>
          <Input label="Amount to send" note="Balance: 0.04ETH" />
        </Styles.Column>
      </Styles.Row>

      <Styles.SwapDirectionRow>
        <Styles.SwapDirectionIcon />
      </Styles.SwapDirectionRow>

      <Styles.Row>
        <Styles.Column>
          <Select
            label="Swap from"
            options={options}
            value={options[0].value}
            onChange={() => {}}
          />
        </Styles.Column>
      </Styles.Row>

      <Styles.ReceivedAmountRow>
        <Styles.Column>
          <Input label="Amount to send" note="Balance: 0.04ETH" disabled />
        </Styles.Column>
      </Styles.ReceivedAmountRow>

      <Button value="Set amounts" disabled />
    </Styles.Container>
  );
};

export default Exchanger;
