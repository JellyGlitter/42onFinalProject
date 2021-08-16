import React from 'react';
import {Route, Router, Switch} from "react-router";
import Idea from "./Idea/Idea";
import Form from "./form/Form";
import Home from "./home/Home";

import History from './home/History';

export default function Routes() {
    return (
        <Router history={History}>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/Idea" component={Idea}/>
                <Route path="/Form" component={Form}/>
            </Switch>
        </Router>
    )
}
