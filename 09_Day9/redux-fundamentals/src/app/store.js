import { createStore } from "redux";
import {reducer} from './reducers';


// create a store
// we pass reducer to store
const store = createStore(reducer);
export default store;
