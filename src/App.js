import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./componants/Header/Header";
import Inventory from "./componants/Inventory/Inventory";
import Login from "./componants/Login/Login";
import NotFound from "./componants/NotFound/NotFound";
import OrderReview from "./componants/OrderReview/OrderReview";
import PlaceOrder from "./componants/PlaceOrder/PlaceOrder";
import PrivateRoute from "./componants/PrivateRoute/PrivateRoute";
import Register from "./componants/Register/Register";
import Shop from "./componants/Shop/Shop";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Shop></Shop>
            </Route>
            <Route path="/shop">
              <Shop></Shop>
            </Route>
            <Route path="/review">
              <OrderReview></OrderReview>
            </Route>
            <Route path="/inventory">
              <Inventory></Inventory>
            </Route>
            <PrivateRoute path="/placeorder">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
