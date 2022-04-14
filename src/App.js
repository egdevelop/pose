import { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products/Products";
import Buy from "./pages/Buy/Buy";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/buy">
              <Buy />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App