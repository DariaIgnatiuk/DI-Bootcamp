export const ADD_TASK = 'add';
export const COMPLETE_TASK = 'complete';
export const DELETE_TASK = 'delete';

export const add_task = (val)=> {
    return {
        type: ADD_TASK,
        payload: val,
    }
}

export const complete_task = (val)=> {
    return {
        type: COMPLETE_TASK,
        payload: val,
    }
}

export const delete_task = (val)=> {
    return {
        type: DELETE_TASK,
        payload: val,
    }
}

