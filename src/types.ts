export interface Token {
  id: string;
  address: string;
  amount: number;
  amountUSD: number;
  networkKey: string;
  label: string;
  logoURI: string;
  price: number;
  symbol: string;
}

export interface Network {
  networkKey: string;
  logoURI: string;
  name: string;
}
