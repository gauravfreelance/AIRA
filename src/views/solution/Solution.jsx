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
import FinancialSupport from "./FinancialSupport";
import SolutionCard from "./SolutionCard";
import CaseStudy from "./CaseStudy";

const Solution = () => {
  return (
    <Box sx={{ backgroundColor: "##F8F9FB", position: "relative" }}>
      <Stack
        sx={{ my: 10 }}
        alignItems="center"
        direction="row"
        justifyContent="space-between"
      >
        <Box sx={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: -80,
            }}
          >
            <AIRAMonoLinesLeft />
          </div>
        </Box>
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
        <img
          src="images/pricing/pricing_header.png"
          alt="CSR Header"
          style={{ width: "700px", height: "450px" }}
        />
      </Stack>
      <Box sx={{ backgroundColor: "#6755DF" }}>
        <Stack sx={{ width: "70%", mx: "auto", mt: 4 }}  gap={1}>
          
          <FinancialSupport />
        </Stack>
      </Box>
      <Box sx={{ width: "80%", mx: "auto", mt: "8.7rem" }} direction="row" gap={1}>
      <Typography variant="h1" sx={{fontSize:"2.5rem",fontFamily:"Montserrat",lineHeight:"normal",fontWeight:700,fontStyle:"normal",textAlign:"center"}}>Full banking <Typography variant="span" sx={{color:"#FFAF00"}}>automation coverage</Typography></Typography>
        <Typography variant="h6" sx={{fontSize:"1.5rem",fontFamily:"Montserrat",lineHeight:"normal",fontWeight:400,fontStyle:"normal",textAlign:"center"}}>In a world of point solutions, the UiPath Business Automation Platform does it all</Typography>
        <SolutionCard />

      </Box>

      <Box sx={{ backgroundColor: "#F0F0F0", width: "100%" }}>
        <Box sx={{ width: "70%", height: "38.0625rem", mx: "auto", mt: "16rem" }} direction="row" gap={1}>
          <CaseStudy />
        </Box>
      </Box>

      <Stack sx={{ width: "80%", mx: "auto", mt: 15 }} gap={1}>
        <Stack direction="row" gap={5}>
          <Box>
            <img
              src="images/solution/images/automate.png"
              alt="commitment"
              style={{ height: "352px", width: "487px" }}
            />
          </Box>
          <Box>
            <Typography variant="h5" sx={{fontSize:"2rem",fontFamily:"Montserrat",lineHeight:"normal",fontWeight:700,fontStyle:"normal",mb:3}}>
              <Typography variant="span" sx={{color:"#FFAF00"}}>Learn to automate </Typography>with Truist, Wells Fargo, Bain & Company, BNY Mellon | Pershing, JP Morgan Chase, Cowen, and more
            </Typography>
            <Stack
              spacing={5}
              alignItems="flex-start"
              sx={{

                
                pb: 5,
              }}
            >
              <Button
                color="primary"
                variant="contained"
                className="text-nowrap"
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontWeight: 700,
                  borderRadius: "30px",
                }}
              >
                Request your free trail now
              </Button>
            </Stack>


          </Box>
        </Stack>
      </Stack>
      <Stack sx={{ width: "70%", mx: "auto", mt: 15 }} gap={1}>
            <Typography variant="p" sx={{fontSize:"1.5rem",textAlign:"center",fontFamily:"Montserrat",lineHeight:"normal",fontWeight:600,fontStyle:"normal"}}>TOP AUTOMATION AREAS</Typography>
            <Typography variant="p" sx={{fontSize:"2.5rem",textAlign:"center",fontFamily:"Montserrat",lineHeight:"normal",fontWeight:700,fontStyle:"normal"}}><Typography variant="span"  sx={{color:"#6755DF"}}>Banking and Financial</Typography> Services Automation</Typography>
          <Stack Stack direction="row" gap={5}>
            
          <Box sx={{ mx: "auto", my: 3 }} gap={1}>
      <Grid container direction="row">
        <Grid item xs={12} sm={7}>
          <img
            src="images/solution/images/financial.png"
            alt=""
            sx={{ height: "100%", width: "100%", borderRadius: "12px" }}
          />
        </Grid>
        <Grid item xs={12} sm={5} justifySelf="center" alignSelf="center">
          <Card raised sx={{ borderRadius: "12px", ml: "-20%" }}>
            <CardContent sx={{ pl: 3 }}>
              <Typography
                variant="body1"
                sx={{ color: Colors.airaPrimary, fontWeight: 600, mb: 1 }}
              >
                Consumer Banking
              </Typography>
              <Typography variant="subtitle2" sx={{ lineHeight: 1.7, pb: 2 }}>
              Efficient workflows appraise high. 
              Capture that value with automation.

              </Typography>
              <Typography variant="subtitle2" sx={{ lineHeight: 1.7, pb: 2 }}>
              UiPath delivers a new standard in efficiency. By elevating
              customer journeys, accelerating lending timelines, and
              modernizing KYC, automation brings Consumer Banks into
              today's digital age. And shortly thereafter, helps them
              revolutionize their entire way of operating (and innovating!)
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
          </Stack>
      </Stack>
    </Box>
  );
};

export default Solution;
