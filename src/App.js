import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './App.scss';
import {Header} from "./Component/Header";
import {ProductManager} from "./Views/ProductManager";

function App() {
    return (
        <Router>
            <div>
                <Header/>

                <Switch>
                    <Route exact={true} path="/product-manager">
                        <ProductManager/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
