import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

// Firebase part
import { createFirestoreInstance } from 'redux-firestore';
import { ReactReduxFirebaseProvider, } from 'react-redux-firebase';
import firebase from 'firebase/app';
import firebaseConfig from "./secrets";

console.log(firebaseConfig);

ReactDOM.render(

  <Provider store={store}>
    <BrowserRouter>
      <ReactReduxFirebaseProvider
        firebase={firebase}
        config={firebaseConfig}
        dispatch={store.dispatch}
        createFirestoreInstance={createFirestoreInstance}
      >
        <App />
      </ReactReduxFirebaseProvider>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);