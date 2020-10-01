import SymbolsState from '@typesdir/states/symbols/index';
import CurrencyState from '@typesdir/states/currency/index';

export default interface RootState {
  symbols: SymbolsState;
  currency: CurrencyState;
}
