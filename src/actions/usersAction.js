import * as types from '../constants/actionTypes';

export function getUsers() {
    return {
        type: types.GET_USER_DATA_REQUEST
    }
};

export function addUsers(name) {
    return {
        type: types.POST_USER_DATA_REQUEST,
        name
    }
};

export function deleteUser(id) {
    return {
        type: types.DELETE_USER_DATA_REQUEST,
        id: id
    }
};