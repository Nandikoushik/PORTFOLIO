import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./Routes/index";
import "./index.css";


ReactDOM.render(<Router><Routes /></Router>, document.getElementById("root"));
