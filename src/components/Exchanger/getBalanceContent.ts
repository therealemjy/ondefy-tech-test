import { Token } from "../../types";

import formatAmount from "../../utils/formatAmount";

const getBalanceContent = (token: Token) =>
  `Balance: ${formatAmount(token.amount)} (~$${formatAmount(token.amountUSD)})`;

export default getBalanceContent;
