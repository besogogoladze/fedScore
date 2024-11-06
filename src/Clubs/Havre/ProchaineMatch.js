import React from "react";

function ProchaineMatch() {
  return (
    <div>
      <hr />
      <h2 style={{ textAlign: "center" }}>Prochaine match de Havre</h2>
      <iframe
        id="672b430070837f08cf683bd6"
        src="https://v1.scorenco.com/widget/672b430070837f08cf683bd6/?auto_height=true"
        style={{
          display: "block",
          width: "100%",
          margin: "auto",
          borderWidth: "0px",
          height: "250px",
          overflow: "auto",
        }}
        scrolling="no"
      ></iframe>
    </div>
  );
}

export default ProchaineMatch;
