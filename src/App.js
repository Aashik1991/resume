import Navigation from "./navigation/Navigation";
import "./App.css";
import { MyContext } from "./context/context";
import { useState } from "react";

function App() {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <MyContext.Provider value={{ menuToggle , setMenuToggle}}>
      < Navigation/>
    </MyContext.Provider>
  );
}

export default App;
