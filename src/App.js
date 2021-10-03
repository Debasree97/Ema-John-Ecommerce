import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./componants/Header/Header";
import Inventory from "./componants/Inventory/Inventory";
import NotFound from "./componants/NotFound/NotFound";
import OrderReview from "./componants/OrderReview/OrderReview";
import PlaceOrder from "./componants/PlaceOrder/PlaceOrder";
import Shop from "./componants/Shop/Shop";

function App() {
  return (
    <div>
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
          <Route path="/placeorder">
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
