import * as React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import {
    Container
} from 'reactstrap';
import Header from './components/Layout/Header';
import Readme from './components/Readme';
import TodoList from './components/TodoList';

import './scss/App.scss';

class App extends React.Component<{}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className='page-wrapper'>
                <Header title='React Starter' />
                <Container>
                    <Switch>
                        <Route exact path='/' component={TodoList}></Route>
                        <Route path='/readme' component={Readme}></Route>
                    </Switch>
                </Container>
            </div>
        );
    }
}

export default withRouter(App);
