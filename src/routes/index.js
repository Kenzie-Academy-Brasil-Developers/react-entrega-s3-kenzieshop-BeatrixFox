import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import BuyCart from "../pages/BuyCart/BuyCart";
const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/buycart">
        <BuyCart />
      </Route>
    </Switch>
  );
};
export default Router;
