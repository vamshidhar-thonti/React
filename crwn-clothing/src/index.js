import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store, persister } from "./store/store";
import { Elements } from "@stripe/react-stripe-js";
import { PersistGate } from "redux-persist/integration/react";
import { stripePromise } from "./utils/stripe/stripe.utils";

import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* loading={null} makes sure the app is idle until PERSIST, REHYDRATE actions are done. */}
      <PersistGate loading={null} persistor={persister}>
        <BrowserRouter>
          <Elements stripe={stripePromise}> {/* To make app link with our stripe account add the stripe attribute to the Elements */}
            <App />
          </Elements>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
