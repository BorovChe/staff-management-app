import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './features/i18n/i18nInit';

import App from './components/App/App';
import { persistor, store } from './store/store';

import './styles/main.css';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/user_manager">
          <Suspense>
            <App />
          </Suspense>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
