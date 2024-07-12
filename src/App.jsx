import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";


function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={ <Home/>}/>
          <Route path='plant/:id' element={<Details/> }/>

        </Routes>
      </Router>
  
    </div>
  );
}

export default App;
