import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import data from "./data.json";
import { Product, State } from "./types";
import Cart from "./components/Cart/Cart";

function App() {
  const [state, setState] = useState<State>({
    data: data as Product[],
    cart: [],
  });

  console.log(state.cart.length);

  return (
    <div className="App">
      <Header />
      <Cart count={state.cart.length} />
      <Main setState={setState} state={state} />
      <Footer />
    </div>
  );
}

export default App;
