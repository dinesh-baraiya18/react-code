import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AppProvider } from "./context/context";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { DarkProvider } from "./context/darkContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <DarkProvider>
      <AppProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppProvider>
    </DarkProvider>
  </Provider>
);
