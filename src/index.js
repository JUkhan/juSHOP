import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./styles.css";
import { setStoreContext } from "ajwah-store";
import { MainLayout } from './layouts/mainLayout';
import { ProductState, CartState, CustomerState, ProductEffect, DeliveryState, CartEffect } from './store';
import { devTools } from 'ajwah-devtools';
import { persistState } from './utils';



setStoreContext({
  states: [ProductState, CartState, CustomerState, DeliveryState],
  effects: [ProductEffect, CartEffect],
  devTools: devTools()
});

function App() {
  persistState();
  return (
    <div className="App">
      <MainLayout />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
