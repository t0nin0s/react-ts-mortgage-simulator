import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Root from './components/Root';
import { store } from './store/store.dev';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
