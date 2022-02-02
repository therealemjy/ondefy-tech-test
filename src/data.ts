import { Network, Token } from "./types";
import ethereumNetworkLogoURI from "./assets/img/ethereum.svg";
import polygonNetworkLogoURI from "./assets/img/polygon.png";

// tokens user can swap
export const tokens: Token[] = [
  {
    address: "0x0000000000000000000000000000000000000000",
    amount: 0.016151885849268823,
    amountUSD: 46.69687869767959,
    networkKey: "ethereum",
    id: "ethereum",
    label: "Ethereum",
    logoURI:
      "https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880",
    price: 2891.11,
    symbol: "ETH",
  },
  {
    address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    amount: 0,
    amountUSD: 0,
    networkKey: "ethereum",
    id: "usd-coin",
    label: "USD Coin",
    logoURI:
      "https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png?1547042389",
    price: 1.0,
    symbol: "USDC",
  },
];

// available networks
export const networks: Network[] = [
  {
    networkKey: "ethereum",
    logoURI: ethereumNetworkLogoURI,
    name: "Ethereum",
  },
  {
    networkKey: "polygon",
    logoURI: polygonNetworkLogoURI,
    name: "Polygon",
  },
];
