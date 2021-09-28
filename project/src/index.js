import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux"//импортируем провайдер
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { BasketPage } from "./pages/basketPage";
import {ProductsPage} from "./pages/productsPage";

import {store} from "./store"//импортируем store из нашей папочки store

const App = () => {
  return(
      <Provider store={store}>
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
        </React.StrictMode>
      </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
