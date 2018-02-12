import { combineReducers } from 'redux'
import user from './UsersReducer';
import book from './BooksReducer';

const rootReducer = combineReducers({user, book});

export default rootReducer