import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css"
import {News, Images, Videos, Home} from "./Page"
import{ Navbar} from "./components"


function App() {

  const [darkTheme, setDarkTheme] = useState(false)
  return (
    <div className={darkTheme ? "dark" : ""}>
      
     <div className=" bg-neutral-300 dark:text-neutral-200 min-h-screen dark:bg-slate-900">
       <Navbar darkTheme ={darkTheme} setDarkTheme = {setDarkTheme}/>
      <Routes >
        <Route exact path = "/" element = {<Home />} />
        <Route exact path = "/images" element = {<Images />} />
        <Route exact path = "/news" element = {<News />} />
        <Route exact path = "/videos" element = {<Videos />} />
      </Routes>

     </div>
    </div>
  );
}

export default App;
