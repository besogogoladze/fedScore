import React from "react";

function Matchs() {
  return (
    <div>
      <hr />
      <h2 style={{ textAlign: "center" }}>
        Les matchs de l'équipe - SENIOR M1
      </h2>
      <iframe
        id="672b42c570837f08d04faf2d"
        src="https://v1.scorenco.com/widget/672b42c570837f08d04faf2d/?auto_height=true"
        style={{
          display: "block",
          width: "100%",
          margin: "auto",
          borderWidth: "0px",
          height: "870px",
          minHeight: "380px",
          overflow: "scroll",
        }}
        scrolling="no"
      ></iframe>
    </div>
  );
}

export default Matchs;
