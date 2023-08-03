import React, { useState } from "react";

import AIRAMonoLinesLeft from "../../components/AIRAMonoLinesLeft";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
  Button
} from "@mui/material";
import Colors from "../../common/Colors";
//import FinancialSupport from "./FinancialSupport";
import SolutionCard from "./SolutionCard";
// import CaseStudy from "../solution/CaseStudy";

const Platform = () => {
  return (
    <Box sx={{ backgroundColor: "##F8F9FB", position: "relative" }}>
      <Stack
        sx={{ my: 10 }}
        alignItems="center"
        direction="row"
        justifyContent="space-between"
      >
        {/* <Box sx={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: -80,
            }}
          >
            <AIRAMonoLinesLeft />
          </div>
        </Box> */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            lineHeight: 1.2,
            color: Colors.airaSecondary,
            marginLeft: "100px",
          }}
        >
          Empowering <br />
          <span style={{ color: "#200E32", fontWeight: 700 }}>
            Communities Globally
          </span>
        </Typography>
        {/* <img
          src="images/pricing/pricing_header.png"
          alt="CSR Header"
          style={{ width: "700px", height: "450px" }}
        /> */}
      </Stack>

      <Box sx={{ width: "80%", mx: "auto", mt: "8.7rem" }} direction="row" gap={1}>
      <Typography variant="h1" sx={{fontSize:"2.5rem",fontFamily:"Montserrat",lineHeight:"normal",fontWeight:700,fontStyle:"normal",textAlign:"center"}}>Full <Typography variant="span" sx={{color:"#FFAF00"}}>automation coverage</Typography></Typography>
        <Typography variant="h6" sx={{fontSize:"1.5rem",fontFamily:"Montserrat",lineHeight:"normal",fontWeight:400,fontStyle:"normal",textAlign:"center"}}>In a world of point solutions, the AIRA Automation Platform does it all</Typography>
        <SolutionCard />

      </Box>
      
    </Box>
  );
};

export default Platform;
