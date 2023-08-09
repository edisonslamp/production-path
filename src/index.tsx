import { render } from "react-dom";
import { Counter } from "./components/Counter";
import { App } from "./components/App";
import { BrowserRouter } from "react-router-dom";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
