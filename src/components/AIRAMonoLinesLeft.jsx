import React from "react";

import styled from "@emotion/styled";
import Colors from "../common/Colors";
import { Box } from "@mui/material";

const PrimaryLine = styled.div({
  height: "400px",
  position: "absolute",
  top: 0,
  width: "100px",
  borderRadius: "50px 50px 0 0",
  transform: "rotate(35deg)",
  marginLeft: "-30px",
  backgroundColor: Colors.airaPrimary,
});
const SecondaryLine = styled.div({
  height: "400px",
  position: "absolute",
  top: 130,
  width: "80px",
  borderRadius: "50px 50px 0 0",
  transform: "rotate(35deg)",
  marginLeft: "-20px",
  backgroundColor: Colors.airaSecondary,
});

const AIRAMonoLinesLeft = ({ styles = {} }) => {
  return (
    <Box sx={{ position: "relative", ...styles }}>
      <PrimaryLine />
      <SecondaryLine />
    </Box>
  );
};

export default AIRAMonoLinesLeft;
