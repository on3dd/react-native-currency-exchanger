import { CHANGING_AMOUNT } from '@utils/actionTypes';

type ChangeAmountProps = string;

const changeAmount = (amount: ChangeAmountProps) => {
  return { type: CHANGING_AMOUNT, payload: amount };
};

export default changeAmount;
