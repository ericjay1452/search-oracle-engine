import { useState } from "react";
import "./index.css"
import {Routes, Route,} from "react-router-dom";
import {Footer,Navbar,RoutesLink} from "./components"


function App() {

  const [darkTheme, setDarkTheme] = useState(false)
  return (
    <div className={darkTheme ? "dark" : ""}>
     <div className=" bg-neutral-300 dark:text-neutral-200 min-h-screen dark:bg-slate-900">
      <Navbar darkTheme ={darkTheme} setDarkTheme = {setDarkTheme}/>
      <RoutesLink />
      <Footer />
     </div>
    </div>
  );
}

export default App;
