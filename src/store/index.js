import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const initialState = {};

const middleware = [thunk];
//We use composeEnhancers to see our values in Redux Dev Tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	initialState,
	//applyMiddleware(...middleware)
	composeEnhancers(applyMiddleware(...middleware))
);

export default store;