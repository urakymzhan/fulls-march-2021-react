import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { myLogger } from "./middleware";
import ReduxThunk from 'redux-thunk';
import {reducer} from './reducers';


const middlewares = composeWithDevTools(applyMiddleware(myLogger, ReduxThunk));
const store = createStore(reducer, middlewares);
export default store;
