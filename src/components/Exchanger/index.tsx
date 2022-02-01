import { useMemo } from "react";

import { Network, Token } from "../../types";
import Select from "../Select";
import Input from "../Input";
import Button from "../Button";
import getBalanceContent from "./getBalanceContent";
import formatAmount from "../../utils/formatAmount";
import * as Styles from "./styles";

export interface ExchangerProps extends React.HTMLAttributes<HTMLDivElement> {
  networks: Network[];
  tokens: Token[];
  amount: string;
  onAmountChange: (newAmount: string) => void;
  networkKey: Network["networkKey"];
  onNetworkKeyChange: (networkKey: Network["networkKey"]) => void;
  onFromTokenIdChange: (tokenId: Token["id"]) => void;
  onToTokenIdChange: (tokenId: Token["id"]) => void;
  fromTokenId: Token["id"];
  toTokenId: Token["id"];
  onSubmit: () => void;
}

const Exchanger: React.FC<ExchangerProps> = ({
  tokens,
  networks,
  networkKey,
  onNetworkKeyChange,
  onFromTokenIdChange,
  onToTokenIdChange,
  onAmountChange,
  amount: amountSent,
  fromTokenId,
  toTokenId,
  onSubmit,
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

  const fromToken = useMemo(
    () => tokens.find((token) => token.id === fromTokenId) || tokens[0],
    [tokens, fromTokenId]
  );

  const toToken = useMemo(
    () => tokens.find((token) => token.id === toTokenId) || tokens[1],
    [tokens, toTokenId]
  );

  const amountReceived = formatAmount(
    (parseFloat(amountSent) * fromToken.price) / toToken.price
  );

  return (
    <Styles.Container {...containerProps}>
      <Styles.Row>
        <Styles.Column>
          <Select
            label="Swap from"
            options={tokenOptions}
            value={fromToken.id}
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
            note={getBalanceContent(fromToken)}
            value={amountSent}
            type="number"
            min="0"
            name="amount-sent"
            onChange={(e) => onAmountChange(e.currentTarget.value)}
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
            value={toToken.id}
            onChange={(newToTokenId) => onToTokenIdChange(newToTokenId)}
          />
        </Styles.Column>
      </Styles.Row>

      <Styles.ReceivedAmountRow>
        <Styles.Column>
          <Input
            label="You will receive (est.)"
            note={getBalanceContent(toToken)}
            type="number"
            name="amount-received"
            value={amountReceived}
            disabled
          />
        </Styles.Column>
      </Styles.ReceivedAmountRow>

      <Button value="Set amounts" onClick={onSubmit} disabled />
    </Styles.Container>
  );
};

export default Exchanger;
