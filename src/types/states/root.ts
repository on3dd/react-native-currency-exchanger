import SymbolsState from '@typesdir/states/symbols/index';
import CurrencyState from '@typesdir/states/currency/index';
import AmountState from '@typesdir/states/amount/index';
import ConvertState from '@typesdir/states/convert/index';

export default interface RootState {
  symbols: SymbolsState;
  currency: CurrencyState;
  amount: AmountState;
  convert: ConvertState;
}
