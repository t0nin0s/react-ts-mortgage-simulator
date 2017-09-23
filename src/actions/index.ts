import { Action } from 'redux';
import { actionTypes } from './actionTypes';

export interface Field {
  id: string;
  value: string;
}

export interface UpdateFieldAction extends Action {
  input: Field;
}

export const updateField: (input: Field) => UpdateFieldAction =
(input: Field) => ({
  type: actionTypes.UPDATE_FIELD,
  input
});

export const goToNext: () => Action =
() => ({
  type: actionTypes.NEXT_CARD
});
