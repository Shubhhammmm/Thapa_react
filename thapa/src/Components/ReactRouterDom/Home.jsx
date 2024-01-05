import React from "react";
import { Link, Outlet } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goBack = ()=>{
    navigate(-1)
  }
  return (
    <>
    {/* <Header/> */}
     <h1>This is home page</h1>
   
     <button onClick={() => goBack()} >go back</button>
     <Outlet/>
    </>
  );
};

export default Home;
