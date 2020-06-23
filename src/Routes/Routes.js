import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import history from "../Routes/history";
import Users from "../Components/Users/Users";
import Home from "../Components/home";
import About from "../Components/about";


class Routes extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Users} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/about" component={About} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;