import * as React from 'react';
import { connect } from 'react-redux';
import { addTodo, getTodo } from '../../redux/todo.redux';
import { Todo } from './todo-item/TodoItem';

import {
    Button,
    Col,
    Input,
    Row
} from 'reactstrap';
import TodoItem from './todo-item';

interface TodoListProps {
    todoItemsList: Todo[];
    completed: Todo[];
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
            todoName: '',
            isOpen: true
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.submitTodo = this.submitTodo.bind(this);
        this.displayCompleted = this.displayCompleted.bind(this);
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
    displayCompleted() {
        this.setState({
            isOpen: !this.state.isOpen
        })
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
        const { todoItemsList, completed, dispatch } = this.props;

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
                <ul className="todo-list">
                    {todoItemsList && todoItemsList.length ? todoItemsList.map((item) => item && !item.status ? (
                        <TodoItem
                            key={item.id}
                            item={item}
                            dispatch={dispatch}
                        />
                    ) : undefined) : undefined}
                </ul>
                {completed && completed.length ? 
                    <Button color="info" onClick={this.displayCompleted}>{`${this.state.isOpen ? 'Hide' : 'Display'} Completed Todo`}</Button>
                : undefined}
                <ul className="mt-4">
                    {this.state.isOpen && completed && completed.length ? completed.map((item) =>  (
                        <TodoItem
                            key={item.id}
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
    todoItemsList: state.todo.list,
    completed: state.todo.completedList
});

export default connect(mapStateToProps)(TodoList);
