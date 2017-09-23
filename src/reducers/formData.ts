import { Reducer } from 'redux';
import { actionTypes } from '../actions/actionTypes';
import { UpdateFieldAction } from '../actions';
import { FormData } from '../state/AppState';

export const formData: Reducer<FormData> = (state: FormData = {
  title: '',
  name: '',
  surname: '',
  gender: '',
  ukResident: '' }, action: UpdateFieldAction ) => {
  switch (action.type) {
    case actionTypes.UPDATE_FIELD:
      return { ...state,
        [action.input.id]: action.input.value
      };
    default:
      return state;
  }
};
