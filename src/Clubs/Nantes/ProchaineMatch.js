import React from "react";

function ProchaineMatch() {
  return (
    <div>
      <hr />
      <h2 style={{ textAlign: "center" }}>Prochaine match de Stade Nantais</h2>
      <iframe
        id="672b3aec70837f08cf683b78"
        src="https://v1.scorenco.com/widget/672b3aec70837f08cf683b78/?auto_height=true"
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
