import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoadingFallback from './components/LoadingFallback';

const App = lazy(() => import('./App'))

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={LoadingFallback}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
