import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import App from "./App";
import Agreement from "./Agreement";

const Routing = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App}/>
                <Route path="/policy" exact component={Agreement}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routing;