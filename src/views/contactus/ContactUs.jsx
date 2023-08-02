import styled from "@emotion/styled";
import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";
import _ from "lodash";
import React from "react";
import Colors from "../../common/Colors";
import AIRAMonoLinesLeft from "../../components/AIRAMonoLinesLeft";
import ContactForm from "./ContactForm";

const TitleTypo = styled(Typography)({
  color: Colors.airaSecondary,
  alignItems: "center",
  fontWeight: 800,
  verticalAlign: "middle",
  fontSize: "16px",
  width: "50px",
});
const DescTypo = styled(Typography)({
  color: "#000",
  alignItems: "center",
  verticalAlign: "middle",
  fontWeight: 400,
  fontSize: "16px",
});

const COUNTRYADDRESS = [
  {
    icon: "flagFrance.png",
    title: "Paris",
    desc: "Strasbourg",
  },
  {
    icon: "flagUSA.png",
    title: "San Jose",
    desc: "CA",
  },
  {
    icon: "flagIndia.png",
    title: "India",
    desc: "Indore (MP)",
  },
];
const FOOTERFLAGData = [
  {
    id: "france_add",
    name: "France",
    text: "15 Rue, Jacobi Netter,Strasbourg, France",
    type: "address",
  },
  
  {
    id: "india_add",
    name: "India",
    text: "502 Vikram Heights, YN Rd,Indore, India",
    type: "address",
  },
  
];

const ContactUs = () => {
  return (
    <Box sx={{ backgroundColor: "##F8F9FB", position: "relative", pt: 5 }}>
      <Typography
        variant="h4"
        sx={{
          mb: 10,
          fontSize: "35px",
          fontFamily: "Montserrat",
          fontWeight: "extrabold",
        }}
        textAlign="center"
      >
        Start a Conversation with{" "}
        <span style={{ color: Colors.airaSecondary }}>Sales</span>
      </Typography>
      <Grid container spacing={2} sx={{ pb: 10 }}>
        <Grid item xs={1}></Grid>
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Stack>
            <Stack gap={2} style={{ width: "100%" }}>
              <Stack direction="row" gap={1} alignItems="center">
                <img src="/images/phone_icon.svg" alt="contact" />
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 900, fontSize: "19px" }}
                >
                  Contact Us
                </Typography>
              </Stack>
              <Stack direction="row" gap={2}>
                <TitleTypo variant="body1">France</TitleTypo>
                <DescTypo
                  component="span"
                  variant="body2"
                  sx={{ fontWeight: 600, fontSize: "15px" }}
                >
                  +33 1 89 16 58 28
                </DescTypo>
              </Stack>
              <Stack direction="row" gap={2}>
                <TitleTypo variant="body1">India</TitleTypo>
                <DescTypo component="span" variant="body2">
                  +91 731 4978110
                </DescTypo>
              </Stack>
            </Stack>

            <Stack gap={2} sx={{ mt: 4, flexGrow: 1 }}>
              <Stack direction="row" gap={1} alignItems="center">
                <img src="/images/location_icon.svg" alt="contact" />
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 900, fontSize: "19px" }}
                >
                  Meet us
                </Typography>
              </Stack>
              {FOOTERFLAGData.map((flagItem, flasgIdx) => {
          let _connectType = "mailto";
          switch (flagItem.type) {
            
            case "address":
              _connectType = `https://www.google.com/maps`;
              break;
            default:
              _connectType = "#";
          }
          return (
            
                <Stack direction="row" gap={2}>
                <TitleTypo variant="body1">{flagItem.name}</TitleTypo>
                <DescTypo component="span" variant="body2">
                <a
                    style={{
                      textDecoration: "none",
                      color: "#000",
                    }}
                    href={_connectType}
                    target={
                      _.isEqual(flagItem.type, "address") ? "_blank" : "_self"
                    }
                    rel="noreferrer"
                  >
                    {flagItem.text}
                  </a>
                </DescTypo>
              </Stack>
                
          );
        })}
              
            </Stack>

            <Stack direction="row" gap={2} sx={{ my: 8, ml: -2 }}>
              {COUNTRYADDRESS.map((countryItem) => {
                return (
                  <Stack
                    gap={1}
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                      backgroundColor: "#F8F9FB",
                      borderRadius: "10px",
                      p: 2,
                      flexGrow: 1,
                      width: "100%",
                    }}
                  >
                    <Avatar
                      src={`/images/${countryItem.icon}`}
                      alt={countryItem.title}
                    />
                    <Stack alignItems="center" sx={{ mt: 1 }}>
                      <Typography variant="subtitle2">
                        {countryItem.title}
                      </Typography>
                      <Typography variant="subtitle2">
                        {countryItem.desc}
                      </Typography>
                    </Stack>
                  </Stack>
                );
              })}
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="images/contact_us.png"
            alt="contact us"
            height="100%"
            width="100%"
            style={{
              objectFit: "cover",
              marginRight: "10px",
              borderRadius: "10px",
            }}
          />
        </Grid>
      </Grid>
      <ContactForm />
      <div
        style={{
          position: "absolute",
          top: 100,
        }}
      >
        <AIRAMonoLinesLeft />
      </div>
    </Box>
  );
};

export default ContactUs;
