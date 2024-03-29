import { render } from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import store from "./store";

import "./sass/_custom.scss";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
