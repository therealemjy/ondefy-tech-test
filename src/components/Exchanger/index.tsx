import { useMemo } from "react";

import { Network, Token } from "../../types";
import Select from "../Select";
import Input from "../Input";
import Button from "../Button";
import * as Styles from "./styles";

export interface ExchangerProps extends React.HTMLAttributes<HTMLDivElement> {
  networks: Network[];
  tokens: Token[];
  amount: number;
  onAmountChange: (newAmount: number) => void;
  networkKey: Network["networkKey"];
  onNetworkKeyChange: (networkKey: Network["networkKey"]) => void;
  onFromTokenIdChange: (tokenId: Token["id"]) => void;
  onToTokenIdChange: (tokenId: Token["id"]) => void;
  fromTokenId: Token["id"];
  toTokenId: Token["id"];
}

const Exchanger: React.FC<ExchangerProps> = ({
  tokens,
  networks,
  networkKey,
  onNetworkKeyChange,
  onFromTokenIdChange,
  onToTokenIdChange,
  fromTokenId,
  toTokenId,
  ...containerProps
}) => {
  const networkOptions = useMemo(
    () =>
      networks.map((network) => ({
        label: network.name,
        value: network.networkKey,
        imageURI: network.logoURI,
      })),
    [networks]
  );

  const selectedNetworkOption = useMemo(
    () =>
      networkOptions.find(
        (networkOption) => networkOption.value === networkKey
      ) || networkOptions[0],
    [networkOptions, networkKey]
  );

  const tokenOptions = useMemo(
    () =>
      tokens.map((token) => ({
        label: token.symbol,
        value: token.id,
        imageURI: token.logoURI,
      })),
    [tokens]
  );

  const fromTokenOption = useMemo(
    () =>
      tokenOptions.find((tokenOption) => tokenOption.value === fromTokenId) ||
      tokenOptions[0],
    [tokenOptions, fromTokenId]
  );

  const toTokenOption = useMemo(
    () =>
      tokenOptions.find((tokenOption) => tokenOption.value === toTokenId) ||
      tokenOptions[0],
    [tokenOptions, toTokenId]
  );

  return (
    <Styles.Container {...containerProps}>
      <Styles.Row>
        <Styles.Column>
          <Select
            label="Swap from"
            options={tokenOptions}
            value={fromTokenOption.value}
            onChange={(newFromTokenId) => onFromTokenIdChange(newFromTokenId)}
          />
        </Styles.Column>

        <Styles.RightColumn>
          <Select
            label="Network"
            options={networkOptions}
            value={selectedNetworkOption.value}
            onChange={(newNetworkKey) => onNetworkKeyChange(newNetworkKey)}
          />
        </Styles.RightColumn>
      </Styles.Row>

      <Styles.Row>
        <Styles.Column>
          <Input
            label="Amount to send"
            note="Balance: 0.04ETH"
            type="number"
            min="0"
          />
        </Styles.Column>
      </Styles.Row>

      <Styles.SwapDirectionRow>
        <Styles.SwapDirectionIcon />
      </Styles.SwapDirectionRow>

      <Styles.Row>
        <Styles.Column>
          <Select
            label="Swap to"
            options={tokenOptions}
            value={toTokenOption.value}
            onChange={(newToTokenId) => onToTokenIdChange(newToTokenId)}
          />
        </Styles.Column>
      </Styles.Row>

      <Styles.ReceivedAmountRow>
        <Styles.Column>
          <Input
            label="You will receive (est.)"
            note="Balance: 0.04ETH"
            type="number"
            disabled
          />
        </Styles.Column>
      </Styles.ReceivedAmountRow>

      <Button value="Set amounts" disabled />
    </Styles.Container>
  );
};

export default Exchanger;
