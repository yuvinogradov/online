import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import data from "./data.json";
import { Product, State } from "./types";

function App() {
  const [state, setState] = useState<State>({
    data: data as Product[],
  });


  return (
    <div className="App">
      <Header />
      <Main state={state} />
      <Footer />
    </div>
  );
}

export default App;
