import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { BasketPage } from "./pages/basketPage";
import { ProductsPage } from "./pages/productsPage";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact={true} path="/">
          <ProductsPage />
        </Route>
        <Route exact={true} path="/basket">
          <BasketPage />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"),
);
