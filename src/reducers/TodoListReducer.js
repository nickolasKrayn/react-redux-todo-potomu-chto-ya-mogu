let initState = [{
    id: 0,
    title: 'hello world!',
    checked: false,
}];

export default function (state = initState, action) {
    if (action.type == "ADD_TASK") {
        let id = 0;
        if (state.length != 0) {
            id = state[state.length - 1].id + 1;
        }

        let result = [...state, { id: id, title: action.title, checked: false }];
        return result;
    }

    if (action.type == "DELETE_TASK") {
        let result = state.slice();

        for (var i = 0; i < result.length; i++) {
            if (result[i].id == action.id) {
                result.splice(i, 1);
                return result;
            }
        }
    }

    if (action.type == "CHANGE_TASK_STATUS") {
        let result = state.slice();

        for (var i = 0; i < result.length; i++) {
            if (result[i].id == action.id) {
                result[i].checked = action.isChecked;
                return result;
            }
        }
    }

    return state;
}