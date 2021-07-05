import { plusType, minusType } from './actions';

export const reducer = (action, state) => {
  const { value } = state.counter;

  switch (action.type) {
    case plusType:

      return {
        ...state,
        counter: { value: value + 1 }
      };
    case minusType:

      return {
        ...state,
        counter: { value: value - 1 }
      };
    default:
      return state;
  }
};
