// Dependencies
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// Custom
import reducer from "./reducer";

const configureStore = () => {
  const enhancers = [applyMiddleware(thunk)];

  const composeEnhancers =
    process.env.NODE_ENV === "development"
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;

  const store = createStore(reducer, composeEnhancers(...enhancers));
  return store;
};

export default configureStore;
