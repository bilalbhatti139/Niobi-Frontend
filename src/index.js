import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import 'flowbite';
import { Provider } from 'react-redux';
import store from '../src/redux/stores/GlobalStore';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/authProvider';

import 'react-datepicker/dist/react-datepicker.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from './modules/shared/Loader';

import { CometChat } from '@cometchat-pro/chat';
import { APP_ID, APP_REGION, AUTH_KEY } from './utils/constants';

// const container = document.getElementById('root');
// const root = createRoot(container);

const appSetting = new CometChat.AppSettingsBuilder()
  .subscribePresenceForAllUsers()
  .setRegion(APP_REGION)
  .build();
CometChat.init(APP_ID, appSetting).then(
  () => {
    if (CometChat.setSource) {
      CometChat.setSource('ui-kit', 'web', 'reactjs');
    }

    ReactDOM.render(
      <BrowserRouter>
        <AuthProvider>
          <Provider store={store}>
            <Suspense fallback={<Spinner />}>
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                theme="light"
                pauseOnHover
              />
              <App />
            </Suspense>
          </Provider>
        </AuthProvider>
      </BrowserRouter>,
      document.getElementById('root')
    );
  },
  (error) => {
    console.log('Initialization failed with error:', error);
  }
);

// root
// .render
// <React.StrictMode>

// </React.StrictMode>
// ();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
