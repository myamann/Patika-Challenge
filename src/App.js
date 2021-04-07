import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import ToDoList from "./components/TodoList";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import { GiHamburgerMenu } from "react-icons/gi";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";

function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <Router>
        <Switch>
          <Route path="/login" exact={true} component={Login} />

          <div>
            <header>
              <GiHamburgerMenu
                onClick={() => setShowNav(!showNav)}
                style={{ cursor: "pointer" }}
              />
            </header>
            <Navbar show={showNav} />

            <Route path="/" exact={true} component={Home} />
            <Route path="/about" exact={true} component={About} />
          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;
