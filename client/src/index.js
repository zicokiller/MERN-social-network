import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.scss";
// Redux import
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

// Dev tools
import { composeWithDevTools } from "redux-devtools-extension";
import { getUsers } from "./actions/users.actions";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

store.dispatch(getUsers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
