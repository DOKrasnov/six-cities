import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import {mocks} from './mocks.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offers={mocks}
    />
  </React.StrictMode>
);
