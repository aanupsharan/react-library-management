import { put, call, takeLatest } from 'redux-saga/effects';
import {getApi, postApi, deleteApi} from "../Api/api";
import * as types from '../constants/actionTypes';

const url = "http://localhost:3000/users";

export function* getUserData() {
    try{
        const users = yield call(getApi, url);
            yield put({type: types.GET_USER_DATA_SUCCESS, users});
    } catch(error){

    }
}

export function* postUserData(name) {
    try{
        const users = yield call(postApi, url, name);
        yield put({type: types.GET_USER_DATA_SUCCESS, users});
    } catch (error) {

    }
}

export function* deleteUserData(data) {
    try{
        let deleteUrl = `${url}/${data.id}`;
        const users = yield call(deleteApi, url, deleteUrl);
        yield put({type: types.GET_USER_DATA_SUCCESS, users});
    } catch (error) {

    }
}

export default function* usersSaga(){

    yield[
        takeLatest(types.GET_USER_DATA_REQUEST, getUserData),
        takeLatest(types.POST_USER_DATA_REQUEST, postUserData),
        takeLatest(types.DELETE_USER_DATA_REQUEST, deleteUserData)
    ];
}