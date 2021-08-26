import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './App.css';
import {Home} from "./Views/Home";
import {Header} from "./Component/Header";
import {Register} from "./Component/Register";
import {Promotion} from "./Component/Promotion";
import {ProductManager} from "./Views/ProductManager";
import {Cart} from "./Component/Cart";

function App() {
    return (
        <Router>
            <div>
                <Header/>

                <Switch>
                    <Route path="/">
                        <Home/>
                    </Route>
                    {/*<Route path="/register">*/}
                    {/*    <Register/>*/}
                    {/*</Route>*/}
                    {/*<Route path="/promotion">*/}
                    {/*    <Promotion/>*/}
                    {/*</Route>*/}
                    <Route exact={true} path="/product-manager">
                        <ProductManager/>
                    </Route>
                    <Route exact={true} path="/cart-item">
                        <Cart/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
