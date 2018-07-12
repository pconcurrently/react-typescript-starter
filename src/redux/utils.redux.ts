const initialState = {
    sidebarCollapsed: false
};

/* TYPES */
const COLLAPSE_SIDEBAR = 'utils/COLLAPSE_SIDEBAR';

/* ACTIONS */
export const collapseSidebar = () => {
    return (dispatch: any) => {
        dispatch({
            type: COLLAPSE_SIDEBAR
        });
    };
};

/* SELECTORS */


/* REDUCER */
export const utilsReducer = (state = initialState, action: {type: string}) => {
    switch (action.type) {
        case COLLAPSE_SIDEBAR:
            return {
                ...state,
                sidebarCollapsed: !state.sidebarCollapsed
            };
        default:
            return state;
    }
};
