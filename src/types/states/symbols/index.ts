import Symbol from '@typesdir/Symbol';

export default interface SymbolsState {
  data: null | Symbol[];
  errorMessage: null | string;
  hasError: boolean;
  isFetching: null | boolean;
}
