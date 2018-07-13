import * as React from 'react';
import { connect } from 'react-redux';
import { addTodo, getTodo } from '../../redux/todo.redux';

import {
    Button,
    Col,
    Input,
    Row
} from 'reactstrap';
import TodoItem from './todo-item';

interface TodoListProps {
    todoItemsList: {
        name: string;
        status: boolean;
    }[];
    dispatch: any;
}
interface TodoState {
    todoName: string;
    [key: string]: any;
}

class TodoList extends React.Component<TodoListProps, TodoState> {
    constructor(props: any) {
        super(props);
        this.state = {
            todoName: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.submitTodo = this.submitTodo.bind(this);
    }

    handleChange(e: any) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleKeyPress(e: any) {
        if (e.key === 'Enter') {
            this.submitTodo();
        }
    }

    submitTodo() {
        if (this.state.todoName.length) {
            this.props.dispatch(addTodo(this.state.todoName));
            this.setState({
                todoName: ''
            });
            this.forceUpdate();
        }
    }

    componentWillMount() {
        this.props.dispatch(getTodo());
    }

    render() {
        const { todoItemsList, dispatch } = this.props;

        return (
            <div>
                <Row className="mt-4 mb-4">
                    <Col sm={10}>
                        <Input
                            className="mb-sm-2"
                            name="todoName"
                            value={this.state.todoName}
                            onChange={this.handleChange}
                            onKeyPress={this.handleKeyPress}
                            autoFocus
                        />
                    </Col>
                    <Col sm={2}>
                        <Button
                            className="mb-sm-2"
                            color="primary"
                            onClick={this.submitTodo}
                        >
                            Add Todo
                        </Button>
                    </Col>
                </Row>
                <ul>
                    {todoItemsList && todoItemsList.length ? todoItemsList.map((item, index) => (
                        <TodoItem
                            index={index}
                            key={index}
                            item={item}
                            dispatch={dispatch}
                        />
                    )) : undefined}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    todoItemsList: state.todo.list
});

export default connect(mapStateToProps)(TodoList);
