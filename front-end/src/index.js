import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import configureStore from "./state/store";
const {store, persistor} = configureStore()

export default function App(){
  return(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<div>a</div>}/>
            <Route path='/a' element={<div>b</div>}/>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
