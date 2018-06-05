import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import Page from './components/Page';

class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/page' component={Page} />
            </Switch>
        );
    }
}

export default Main;
