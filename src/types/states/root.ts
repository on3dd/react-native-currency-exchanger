import SymbolsState from '@typesdir/states/symbols';
import CurrencyState from '@typesdir/states/currency';
import AmountState from '@typesdir/states/amount';
import ConvertState from '@typesdir/states/convert';
import ThemeState from '@typesdir/states/theme';

export default interface RootState {
  symbols: SymbolsState;
  currency: CurrencyState;
  amount: AmountState;
  convert: ConvertState;
  theme: ThemeState;
}
