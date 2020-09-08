import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

import "./index.scss";
// serviceWorker.unregister();

const render = (Component: React.FC) => {
  return ReactDOM.render(
    <React.StrictMode>
      <Component />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

render(App);

if (module.hot) {
  module.hot.accept("./components/App", () => {
    const NextApp = require("./components/App").default;
    render(NextApp);
  });
}
