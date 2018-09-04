import React, { Component } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import history from './history';
import Main from './components/main';

class Routes extends Component {
    render () {
        return (
            <Router history={history}>
                <Main>
                    <Switch>

                    </Switch>
                </Main>
            </Router>
        )
    }
}

export default Routes;