import Symbol from '@typesdir/Symbol';

export default interface SymbolsState {
  data: Symbol[];
  errorMessage: null | string;
  hasError: boolean;
  isFetching: boolean;
}
