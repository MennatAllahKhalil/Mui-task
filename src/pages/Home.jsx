import React from "react";
import AppBar from "../components/AppBar";
import backgroundImage from "../../public/background.jpg"; // Import your background image
import { Box, IconButton } from "@mui/material";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";

export default function Home() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        overflowY: "auto",
        scrollBehavior: "smooth",
      }}
    >
      <AppBar />

      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "8%",
          textAlign: "center",
          lineHeight: "0.5",
        }}
      >
        <h1 style={{ color: "white", fontSize: "60px" }}>MennatAllah khalil</h1>
      </Box>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          lineHeight: "0.0",
        }}
      >
        <p style={{ color: "white", fontSize: "30px" }}>
          I’m MennatAllah Khalil UI&UX Designer,
        </p>
        <p style={{ color: "white", fontSize: "30px" }}>
          And Front End Developer
        </p>
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "13%",
          flexDirection: "column",
        }}
      >
        <IconButton style={{ color: "white" }}>
          <ArrowUpwardOutlinedIcon />
        </IconButton>
      </Box>
    </div>
  );
}
