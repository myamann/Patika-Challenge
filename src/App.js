import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
        <header>
          <GiHamburgerMenu onClick={() => setShowNav(!showNav)} style={{"cursor":"pointer"}}/>
        </header>

        <Navbar show={showNav} />

        <div className="main">
          <Route path="/" exact={true} component={Home} />
          <Route path="/about" exact={true} component={About} />

        </div>
      </Router>
    </>
  );
}

export default App;
