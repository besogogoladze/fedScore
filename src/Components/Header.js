import React from "react";

function Header() {
  return (
    <div>
      <a href="#/">
        <button
          style={{
            padding: "20px",
            marginLeft: "20px",
            backgroundColor: "#00bb69",
            color: "#fff",
            cursor: "pointer",
            border: "unset",
            borderRadius: "0 0 10px 10px",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Home
        </button>
      </a>
    </div>
  );
}

export default Header;
