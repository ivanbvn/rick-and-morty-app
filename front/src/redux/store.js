import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./reducer";
const { createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
