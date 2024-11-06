import React from "react";
import logo from "../Images/logo.webp";

function Home() {
  return (
    <div className="homeDiv">
      <div className="container">
        <img className="logo" alt="logo" src={logo} />
        <div className="homeButtonDiv">
          <a href="/fedScore/EABXV">EAB XV</a>
          <a href="/fedScore/Nantes">NANTES</a>
          <a href="/fedScore/Havre">HAVRE</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
