import { createStore } from "redux";
import rootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
const composeEnhancers = composeWithDevTools();
const store = createStore(rootReducer /* preloadedState, */, composeEnhancers);
export default store;
