import * as React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import SignupForm from '../signupForm/SignupForm';
import { AppState } from '../state/AppState';

interface RootProps {
  store: Store<AppState>;
}

const Root: React.SFC<RootProps> = ({ store }) => {
  return (
    <Provider store={store}>
      <SignupForm />
    </Provider>
  );
};

export default Root;
