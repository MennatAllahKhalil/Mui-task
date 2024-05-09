import React from "react";
import ImageMasonry from "../components/Portfolio";
import { Box } from "@mui/material";

export default function Profile() {
  return (
    <Box display={"flex"} justifyContent={"center"} alignContent={"center"}>
      <ImageMasonry />
    </Box>
  );
}
