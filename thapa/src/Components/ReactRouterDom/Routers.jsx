import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Error from "./Error";
import Header from "./Header";
import  Search  from './Search'

const Routers = () => {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
        <Route path="/" element= {<Home/>} >
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<Search/> } />
          <Route path="/*" element={<Error/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routers;
