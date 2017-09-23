import { combineReducers } from 'redux';
import { formState } from './formState';
import { formData } from './formData';
import { AppState } from '../state/AppState';

const reducers = combineReducers<AppState>({
  formData,
  formState,
});

export default reducers;
