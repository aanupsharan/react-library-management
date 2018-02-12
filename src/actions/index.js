import * as usersAction from './usersAction';
import * as booksAction from './booksAction';

export const actionCreators = Object.assign({},
    usersAction,
    booksAction
);