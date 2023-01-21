export interface Unsubscribe {
  (): void;
}

export interface IStateManager<State, Store> {
  getStore: () => Store;
  getState: () => State;
  dispatch: (action: Object) => void;
  subscribe(listener: () => void): Unsubscribe;
}
