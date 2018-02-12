import * as types from '../constants/actionTypes';

export function getBooks() {
    return {
        type: types.GET_BOOK_DATA_REQUEST
    }
};

export function addBook(name, author) {
    return {
        type: types.POST_BOOK_DATA_REQUEST,
        name: name,
        author: author
    }
};

export function deleteBook(id) {
    return {
        type: types.DELETE_BOOK_DATA_REQUEST,
        id: id
    }
};