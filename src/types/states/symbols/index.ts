import Symbols from '@typesdir/states/symbols/Symbols';

export default interface SymbolsState {
  data: Symbols;
  errorMessage: null | string;
  hasError: boolean;
  isFetching: null | boolean;
}
