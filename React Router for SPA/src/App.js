import { Route,Switch,Redirect } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <>
      <div>
        <MainHeader></MainHeader>
      </div>
        <main>
      <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome"></Redirect>
          </Route>
          <Route path="/welcome">
            <Welcome></Welcome>
          </Route>
          <Route path="/product" exact>
            <Products></Products>
          </Route>
          <Route path="/product/:productId">
            <ProductDetail></ProductDetail>
          </Route>
      </Switch>
        </main>
    </>
  );
}

export default App;
