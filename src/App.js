import { useState } from "react";
import "./App.css";
import ToDoList from "./components/TodoList";
import Navbar from "./components/Navbar";
import { GiHamburgerMenu } from "react-icons/gi";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="App">
      <header>
        <GiHamburgerMenu onClick={()=> setShowNav(!showNav)} />
      </header>
      
     <Navbar show={showNav}/> 
    
    </div>
  );
}

export default App;
