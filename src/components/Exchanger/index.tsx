import { useMemo } from "react";

import { Network, Token, Swap } from "../../types";
import Select from "../Select";
import Input from "../Input";
import Button from "../Button";
import getBalanceContent from "./getBalanceContent";
import formatAmount from "../../utils/formatAmount";
import * as Styles from "./styles";

export interface ExchangerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSubmit"> {
  networks: Network[];
  tokens: Token[];
  amountIn: string;
  onAmountInChange: (newAmount: string) => void;
  networkKey: Network["networkKey"];
  onNetworkKeyChange: (networkKey: Network["networkKey"]) => void;
  onTokenInIdChange: (tokenId: Token["id"]) => void;
  onTokenOutIdChange: (tokenId: Token["id"]) => void;
  tokenInId: Token["id"];
  tokenOutId: Token["id"];
  onSubmit: (swap: Swap) => void;
}

const Exchanger: React.FC<ExchangerProps> = ({
  tokens,
  networks,
  networkKey,
  onNetworkKeyChange,
  onTokenInIdChange,
  onTokenOutIdChange,
  onAmountInChange,
  amountIn,
  tokenInId,
  tokenOutId,
  onSubmit,
  ...containerProps
}) => {
  const handleSubmit = () =>
    onSubmit({
      tokenIn,
      tokenOut,
      amountIn,
      minExpectedAmountOut: expectedAmountOut,
      networkKey,
    });

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

  const tokenIn = useMemo(
    () => tokens.find((token) => token.id === tokenInId) || tokens[0],
    [tokens, tokenInId]
  );

  const tokenOut = useMemo(
    () => tokens.find((token) => token.id === tokenOutId) || tokens[1],
    [tokens, tokenOutId]
  );

  const expectedAmountOut = formatAmount(
    (parseFloat(amountIn) * tokenIn.price) / tokenOut.price
  );

  const canSubmit = !!amountIn && amountIn !== "0";

  return (
    <Styles.Container {...containerProps}>
      <Styles.Row>
        <Styles.Column>
          <Select
            label="Swap from"
            options={tokenOptions}
            value={tokenIn.id}
            onChange={(newTokenInId) => onTokenInIdChange(newTokenInId)}
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
            note={getBalanceContent(tokenIn)}
            value={amountIn}
            type="number"
            min="0"
            name="amount-in"
            onChange={(e) => onAmountInChange(e.currentTarget.value)}
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
            value={tokenOut.id}
            onChange={(newTokenOutId) => onTokenOutIdChange(newTokenOutId)}
          />
        </Styles.Column>
      </Styles.Row>

      <Styles.ReceivedAmountRow>
        <Styles.Column>
          <Input
            label="You will receive (est.)"
            note={getBalanceContent(tokenOut)}
            type="number"
            name="expected-amount-out"
            value={expectedAmountOut}
            disabled
          />
        </Styles.Column>
      </Styles.ReceivedAmountRow>

      <Button
        value={canSubmit ? "Swap" : "Set amounts"}
        onClick={handleSubmit}
        disabled={!canSubmit}
      />
    </Styles.Container>
  );
};

export default Exchanger;
