import React, { useEffect } from "react";
import "./App.css";
import store from "redux/store";
import { Provider } from "react-redux";

import Layout from "components/layout/Layout";

function App() {
  useEffect(() => {
    console.log("Hello world");
  }, []);
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}

export default App;
