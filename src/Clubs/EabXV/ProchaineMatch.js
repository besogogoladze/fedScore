import React from "react";

function ProchaineMatch() {
  return (
    <div>
      <hr />
      <h2 style={{ textAlign: "center" }}>Prochaine match de EAB XV</h2>
      <iframe
        id="672a8d85e5468408cff96d9e"
        src="https://v1.scorenco.com/widget/672a8d85e5468408cff96d9e/?auto_height=true"
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
