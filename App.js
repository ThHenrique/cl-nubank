import React from "react";

import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";

import store from "./src/store";
import Main from "./src/Main";

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
