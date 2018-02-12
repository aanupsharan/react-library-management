import * as types from '../constants/actionTypes';
const initialState = {
    data: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case types.GET_USER_DATA_SUCCESS:
            return {
                ...state,
                data: action.users
            }
        default:
            return state;
    }
}