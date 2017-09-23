import { Reducer, Action } from 'redux';
import { actionTypes } from '../actions/actionTypes';
import { FormState } from '../state/AppState';

export const formState: Reducer<FormState> =
(state: FormState = { step: 1, }, action: Action ) => {
  switch (action.type) {
    case actionTypes.NEXT_CARD:
      return { ...state,
        step: state.step + 1
      };
    default:
      return state;
  }
};
