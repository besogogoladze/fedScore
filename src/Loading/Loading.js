import React from "react";
import Box from "@mui/material/Box";

function Loading() {
  return (
    <Box
      sx={{
        bgcolor: "#00bb69",
        p: 8,
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
      style={{ margin: "50px 0" }}
    >
      <h2>Loading...</h2>
    </Box>
  );
}

export default Loading;
