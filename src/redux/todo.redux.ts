interface TodoList {
    list: {
        name: string,
        status: boolean
    }[];
}

const initialState: TodoList = {
    list: []
};

/* TYPES */
const ADD = 'todo/ADD';
const REMOVE = 'todo/REMOVE';
const UPDATE = 'todo/UPDATE';
const GET = 'todo/GET';

/* ACTIONS */
export const getTodo = () => {
    return (dispatch: any) => {
        try {
            const list = JSON.parse(localStorage.getItem('todoList'));
            dispatch({
                type: GET,
                list
            });
        } catch (err) {
            console.log(err);
            dispatch({
                type: GET,
                list: []
            });
        }
    };
};

export const addTodo = (input: string) => {
    return (dispatch: any) => {
        dispatch({
            type: ADD,
            name: input
        });
    };
};

export const updateTodo = (todo: {name: string, status: boolean}) => {
    return (dispatch: any) => {
        dispatch({
            type: UPDATE,
            todo
        });
    };
};

/* SELECTORS */


/* REDUCER */
export const todoReducer = (state = initialState, action: { type: string, name: string, list: TodoList[], todo: { status: boolean, name: string} }) => {
    let tempList;
    switch (action.type) {
        case ADD:
            const newTodo = {
                name: action.name,
                status: false
            };
            tempList = state.list;
            tempList.push(newTodo);

            localStorage.setItem('todoList', JSON.stringify(tempList));
            return {
                ...state,
                list: tempList || []
            };
        case GET:
            return {
                ...state,
                list: action.list || []
            };
        case UPDATE:
            tempList = state.list.map(todo => {
                if (todo.name === action.todo.name) {
                    todo.status = action.todo.status;
                }
                return todo;
            });
            localStorage.setItem('todoList', JSON.stringify(tempList));
            return {
                ...state,
                list: tempList
            };
        default:
            return state;
    }
};
