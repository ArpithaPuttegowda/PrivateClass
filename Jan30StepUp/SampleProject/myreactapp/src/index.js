import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import ErrorBoundary from "./Components/ExceptionHandling/ErrorBoundary";

const root = createRoot(document.getElementById("root"));
root.render(
  //   <ErrorBoundary>
  <App />
  //   </ErrorBoundary>
);

// ReactDOM.render(<App />, document.getElementById("root"));
