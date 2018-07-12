import * as React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import {
    Container
} from 'reactstrap';
import Header from './components/Layout/Header';
import TodoList from './components/TodoList';

import './scss/App.scss';

class App extends React.Component<{}> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <div className="page-wrapper">
                <Header title="React Starter" />
                <Container>
                    <Switch>
                        <Route path="/" component={TodoList}></Route>
                    </Switch>
                </Container>
            </div>
        );
    }
}

export default withRouter(App);
