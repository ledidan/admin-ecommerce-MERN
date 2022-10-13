import React from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./views/HomeScreen";
import ProductScreen from "./views/productScreen";
import CategoriesScreen from "./views/CategoriesScreen";
import OrderScreen from "./views/OrderScreen";
import OrderDetailScreen from "./views/OrderDetailScreen";
import AddProduct from "./views/AddProduct";
import Login from "./views/LoginScreen";
import UsersScreen from "./views/UsersScreen";
import ProductEditScreen from "./views/ProductEditScreen";
import NotFound from "./views/NotFound";
import PrivateRouter from "./PrivateRouter";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <PrivateRouter path="/" component={HomeScreen} exact />
          <PrivateRouter path="/products" component={ProductScreen} />
          <PrivateRouter path="/category" component={CategoriesScreen} />
          <PrivateRouter path="/orders" component={OrderScreen} />
          <PrivateRouter path="/order" component={OrderDetailScreen} />
          <PrivateRouter path="/addproduct" component={AddProduct} />
          <PrivateRouter path="/users" component={UsersScreen} />
          <PrivateRouter
            path="/product/:id/edit"
            component={ProductEditScreen}
          />
          <Route path="/login" component={Login} />
          <PrivateRouter path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}
export default App;
