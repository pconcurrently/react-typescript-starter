import * as React from "react";
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import Header from './components/Layout/Header';
import ToDoList from './components/ToDoList';

import './scss/App.scss';

class App extends React.Component<{}> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <div className="wrapper">
                <Header title="React Typescript Starter" />
                <Switch>
                    <Route exact path="/" component={ToDoList}></Route>
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);
