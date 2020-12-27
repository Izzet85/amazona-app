import {createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { productDetailsReducer, productListReducer } from "./reducers/productReducers";


const initialState = {};
const reducer = combineReducers({})
const reducer = combineReducer({
    productList: productListReducer,
    productDetails: productDetailsReducer,

});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 
const store = createStore(reducer,
initialState,
composeEnhancer(applyMiddleware(thunk))
);

export default store;