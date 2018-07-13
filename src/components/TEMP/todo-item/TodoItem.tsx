import * as React from 'react';

import { updateTodo } from '../../../redux/todo.redux';

interface TodoItemProps {
    item: {
        name: string;
        status: boolean;
    };
    dispatch?: any;
    index: number;
}

class TodoItem extends React.Component<TodoItemProps, {}> {
    constructor(props: any) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange() {
        const item = this.props.item;
        item.status = !item.status;
        this.props.dispatch(updateTodo(item));
    }

    render() {
        const { item, index } = this.props;
        return (
            <li className="todo-list__item">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id={`cc_${index}`} checked={item.status} onChange={this.onChange}/>
                    <label className="custom-control-label" htmlFor={`cc_${index}`}>{item.name}</label>
                </div>
            </li>
        );
    }
}

export default TodoItem;
