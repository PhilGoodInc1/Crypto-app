import {Action, combineReducers, compose, createStore, applyMiddleware} from 'redux';
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import priceReducer from "./price-reducer";

let rootReducer = combineReducers({
    prices: priceReducer,
});

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

// @ts-ignore
window.store = store;

export default store;


type rootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<rootReducerType>;

export type InferActionsTypes<T> = T extends {[keys:string]:(...args: any[]) => infer U} ? U : never

export type BaseThunkType<A extends Action, R= Promise<void>> = ThunkAction<Promise<void>, AppStateType, unknown, A>;