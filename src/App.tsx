import React, { useEffect } from "react";
import "./App.css";

import Layout from "components/layout/Layout";

function App() {
  useEffect(() => {
    console.log("Hello world");
  }, []);
  return <Layout />;
}

export default App;
