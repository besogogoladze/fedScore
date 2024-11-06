import React from "react";

function Matchs() {
  return (
    <div>
      <hr />
      <h2 style={{ textAlign: "center" }}>
        Les matchs de l'équipe - SENIOR M1
      </h2>
      <iframe
        id="672a8eb2efaf0108c6f2600a"
        src="https://v1.scorenco.com/widget/672a8eb2efaf0108c6f2600a/?auto_height=true"
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
