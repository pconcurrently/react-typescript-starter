import * as React from 'react';

import { updateTodo, removeTodo } from '../../../redux/todo.redux';

export interface Todo {
    id: string;
    name: string;
    status: boolean;
}
interface TodoItemProps {
    item: Todo;
    dispatch?: any;
}

class TodoItem extends React.Component<TodoItemProps, {}> {
    constructor(props: any) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    onChange() {
        if (!this.props.item.status) {
            this.props.dispatch(updateTodo(this.props.item));
        }
    }

    removeTodo() {
        this.props.dispatch(removeTodo(this.props.item));
    }

    render() {
        const { item } = this.props;
        return (
            <li className="todo-list__item">
                <div className="custom-control custom-checkbox">
                    <input
                        type="checkbox" 
                        className="custom-control-input"
                        id={`cc_${item.id}`} checked={item.status}
                        onChange={this.onChange}
                        disabled={item.status}
                    />
                    <label 
                        className="custom-control-label" 
                        htmlFor={`cc_${item.id}`}
                        title={!item.status ? 'Complete this todo' : ''}
                        style={!item.status ? { cursor: "pointer" } : {}}
                    >
                        {item.name}
                        <span 
                            title="Remove this todo" 
                            className="fa fa-close ml-1" 
                            style={{cursor: "pointer"}}
                            onClick={this.removeTodo}></span>
                    </label>
                </div>
            </li>
        );
    }
}

export default TodoItem;
