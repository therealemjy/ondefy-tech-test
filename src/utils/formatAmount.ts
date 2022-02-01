const DECIMAL_PLACES = 6;

const formatAmount = (amount: number) =>
  amount === 0 ? 0 : Number(amount.toFixed(DECIMAL_PLACES));

export default formatAmount;
