import React from "react";
import logo from "../Images/logo.webp";
import Styles from ".././Styles.module.css";

function Home() {
  return (
    <div className={Styles.homeDiv}>
      <div className={Styles.container}>
        <img className={Styles.logo} alt="logo" src={logo} />
        <div className={Styles.homeButtonDiv}>
          <a href="#/EABXV">EAB XV</a>
          <a href="#/Nantes">NANTES</a>
          <a href="#/Havre">HAVRE</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
