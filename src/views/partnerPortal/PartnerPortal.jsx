import React from 'react'
import { Box, Button, Grid, Paper, Stack, TextField, Typography } from "@mui/material";
import Colors from "../../common/Colors";
import { Link } from 'react-router-dom';
import AIRALOGO from "../../assets/Logo.svg";
//import {Portal} from "/src/images/partnerPortal/Portal.png"
const PartnerPortal = () => {
  return (
    <Box sx={{mx: "auto",width:"60%",borderRadius: "20px",marginTop:"150px"}}>
        <Grid container >
            <Grid item md={8}  sx={{
              backgroundColor: Colors.airaPrimary,
              borderTopLeftRadius: "15px",
              borderBottomLeftRadius: "15px",
              p: 2,
              
            }}>
            
                  <Stack direction="column" gap={1}>
            <Link to="/">
              <img src={AIRALOGO} alt="AIRA Logo" />
            </Link>
            <Typography
                variant="h4"
                sx={{ color: "#fff", my: 2, fontWeight: 600 }}
              >
                Welcome to <br /> your Partner portal
                
              </Typography>
              
              <Box>
                <Button
                  variant="outlined"
                  color="secondary"
                  sx={{
                    mt: 23,
                    border: "1px solid #fff",
                    color: "#fff",
                    background:"#fff",
                    borderRadius: "8px",
                  }}
                >
                  <Link to={"/register"}>
                  Register now
                  </Link>
                  
                </Button>
                
              </Box>
              <Box>
                <Button
                  variant="outlined"
                  color="secondary"
                  
                  sx={{
                    border: "1px solid #fff",
                    color: "#fff",
                    background:"#fff",
                    borderRadius: "8px",px:6
                  }}
                >
                  <Link to={"/login"}>
                  Login
                  </Link>
                </Button>
                
              </Box>
            </Stack>
                
            </Grid>
            <Grid item  md={4}>
              <Stack>
                <img src="images/partnerPortal/Portal.png" alt="" style={{ width: "100%", height: "496px" }}/>
              </Stack>
                    
            </Grid>
        </Grid>
    </Box>
  )
}

export default PartnerPortal