import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];
// spreads in the array middlewares to allow to add more middlewares as needed
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
