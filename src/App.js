import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from "./components/home/Home";
import Idea from "./components/Idea/Idea";
import Form from "./components/form/Form";
import Toolbar from "./components/Toolbar/Toolbar";
import Footer from "./components/Footer/Footer";
import LogRegAppRet from "./components/login/Returnlra";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Toolbar/>
                    <Switch>
                        <Route path="/" component={Home} exact/>
                        <Route path="/idea" component={Idea}/>
                        <Route path="/form" component={Form}/>
                        <Route path="/login" component={LogRegAppRet}/>
                    </Switch>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;