import { put, call, takeLatest } from 'redux-saga/effects';
import {getApi, postApi, deleteApi} from "../Api/api";
import * as types from '../constants/actionTypes';

const url = "http://localhost:3000/books";

export function* getBookData() {
    try{
        const books = yield call(getApi, url);
        yield put({type: types.GET_BOOK_DATA_SUCCESS, books});
    } catch(error){

    }
}

export function* postBookData(name) {
    try{
        const books = yield call(postApi, url, name);
        yield put({type: types.GET_BOOK_DATA_SUCCESS, books});
    } catch (error) {

    }
}

export function* deleteBookData(data) {
    try{
        let deleteUrl = `${url}/${data.id}`;
        const books = yield call(deleteApi, url, deleteUrl);
        yield put({type: types.GET_BOOK_DATA_SUCCESS, books});
    } catch (error) {

    }
}

export default function* booksSaga(){
    yield[
        takeLatest(types.GET_BOOK_DATA_REQUEST, getBookData),
        takeLatest(types.POST_BOOK_DATA_REQUEST, postBookData),
        takeLatest(types.DELETE_BOOK_DATA_REQUEST, deleteBookData)
    ];
}