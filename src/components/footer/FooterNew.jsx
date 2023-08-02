import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import _ from "lodash";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AIRALOGO from "../../assets/airalogo.svg";
import FlagFrance from "../../assets/footericons/flagFrance.png";
import FlagIndia from "../../assets/footericons/flagIndia.png";
import FlagSaudi from "../../assets/footericons/flagSaudi.png";
import Mail from "../../assets/footericons/mail.png";
import Colors from "../../common/Colors";
import { LinkBehavior } from "../header/Header";

const termsLinks = [
  { id: "trust_and_security", label: "Trust and Security", route: "" },
  { id: "terms_of_use", label: "Terms of Use", route: "" },
  { id: "privacy_policy", label: "Privacy Policy", route: "/privacy_policy" },
  { id: "cookies_policy", label: "Cookies Policy", route: "" },
  { id: "disclaimer", label: "Disclaimer", route: "" },
];

const FOOTERFLAGData = [
  {
    id: "france_add",
    icon: "france_flag",
    text: "15 Rue, Jacobi Netter,Strasbourg, France",
    type: "address",
  },
  {
    id: "france_contact",
    icon: "france_flag",
    text: "+33 1 89 16 58 28",
    type: "contact",
  },
  {
    id: "india_add",
    icon: "india_flag",
    text: "502 Vikram Heights, YN Rd,Indore, India",
    type: "address",
  },
  {
    id: "india_contact",
    icon: "india_flag",
    text: "+91 731 4978110",
    type: "contact",
  },
  {
    id: "saudi_add",
    icon: "saudi_flag",
    text: "Riyadh, Saudi Arabia",
    type: "address",
  },
  {
    id: "saudi_contact",
    icon: "saudi_flag",
    text: "+966 55 441 6442",
    type: "contact",
  },
  {
    id: "mail",
    icon: "mail",
    text: "connect@aira.fr",
    type: "email",
  },
];

const getIcon = (icon) => {
  switch (icon) {
    case "france_flag":
      return (
        <Avatar
          src={FlagFrance}
          alt="Flag India"
          sx={{ width: 25, height: 25 }}
        />
      );
    case "india_flag":
      return (
        <Avatar
          src={FlagIndia}
          alt="Flag France"
          sx={{ width: 25, height: 25 }}
        />
      );
    case "saudi_flag":
      return (
        <Avatar
          src={FlagSaudi}
          alt="Flag Saudi"
          sx={{ width: 25, height: 25 }}
        />
      );
    case "mail":
      return <Avatar src={Mail} alt="Mail" sx={{ width: 25, height: 25 }} />;
    default:
      return (
        <Avatar
          src={FlagIndia}
          alt="Flag India"
          sx={{ width: 25, height: 25 }}
        />
      );
  }
};
const FOOTERLINKS = [
  {
    title: "Company",
    lists: [
      {id:1, label: "About us", route: "about_us" },
      { id:2,label: "Career", route: "careers" },
      { id:3,label: "Leadership Team", route: "leadership_team" },
      { id:4,label: "Documentation", route: "documentation" },
      { id:5,label: "Pricing", route: "pricing" },
      { id:6,label: "Licence", route: "csr" },
      { id:7,label: "Partner", route: "partner" },
    ],
    gridValue: { xs: 12, md: 3 },
  },
  {
    title: "Explore",
    lists: [
      {
        id:1,
        label: "Hyper-automation Solution",
        route: "hyper_automation_solution",
      },
      {id:2, label: "AI/ML", route: "aiml" },
      {
        id:3,
        label: "Robotic Process automation",
        route: "rpa",
      },
      {
        id:4,
        label: "Intelligent Document processing",
        route: "idp",
      },
      { id:5,label: "Workflow", route: "workflow" },
      { id:6,label: "Orchestrator", route: "orchestrator" },
      { id:7,label: "Predictive Analytics", route: "predictive_analytics" },
      { id:8,label: "Process mining", route: "process_mining" },
    ],
    gridValue: { xs: 12, md: 4 },
  },
  {
    title: "Support",
    lists: [
      {id:1, label: "Sales Support", route: "contactus" },
      {id:2, label: "Technical Support", route: "technical_support" },
    ],
    gridValue: { xs: 12, md: 5 },
  },
];

const FooterNew = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  return (
    <Box
      sx={{
        // background:
        //   "linear-gradient(90deg, rgba(103,85,223,1) 0%, rgba(255,183,26,1) 100%)",
        //backgroundColor: "#eee",
        userSelect: "none",
        //color: "#fff",
      }}
    >
      <Stack
        spacing={2}
        alignItems="center"
        sx={{
          m: "0 auto",
          maxWidth: "40%",
          py: 4,
          pt: 10,
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
      <Divider sx={{ mb: 4 }} />
      <Grid
        container
        sx={{
          //minHeight: "100px",
          mx: "auto",
          maxWidth: "90%",
        }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item xs={12} sm={6}>
          <Link to="/">
            <img src={AIRALOGO} alt="AIRA Logo" />
          </Link>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Stack
            direction="row"
            gap={3}
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              variant="subtitle"
              className="text-nowrap"
              sx={{
                fontWeight: 600,
                lineHeight: "24px",
                verticalAlign: "top",
              }}
            >
              Subscribe to our newsletter
            </Typography>
            <Stack
              direction="row"
              sx={{
                border: "1px solid #CBD0DA",
                borderRadius: "50px",
                minWidth: "400px",
              }}
            >
              <TextField
                id="newsletter"
                label={null}
                variant="outlined"
                fullWidth
                placeholder="alice.bryant@example.com"
                value={newsletterEmail}
                sx={{
                  minWidth: "270px",
                  height: "45px",
                  "& .MuiOutlinedInput-input": {
                    padding: "10px",
                    paddingLeft: "15px",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "none",
                    },
                  },
                }}
                onChange={(e) => setNewsletterEmail(e.target.value)}
              />
              <Button
                color="primary"
                variant="contained"
                size="small"
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  minWidth: "190px",
                  margin: 0,
                  minHeight: 0,
                  fontWeight: 700,
                  borderRadius: "50px",
                }}
              >
                Subscribe
              </Button>
            </Stack>
          </Stack>
        </Grid>
      </Grid>

      <Divider sx={{ my: 1 }} />

      <Grid
        container
        spacing={3}
        sx={{
          minHeight: "100px",
          mx: "auto",
          maxWidth: "90%",
          py: 2,
        }}
      >
        <Grid item xs={12} md={6} sx={{ borderRight: "1px solid #eee" }}>
          <Grid container spacing={10}>
            {FOOTERLINKS.map((item, idx) => {
              return (
                <Grid item xs={12} md={4} key={item.title} {...item.gridValue}>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: 700, color: Colors.airaSecondary }}
                  >
                    {item.title}
                  </Typography>
                  <Stack gap={1} sx={{ my: 1 }}>
                    {item.lists.map((listItem, listIdx) => {
                      return (
                        <Typography
                          variant="subtitle2"
                          className="text-nowrap"
                          key={listItem.route}
                          onClick={() => {
                                window.scrollTo({
                                  top: 0,
                                  behaviour: "smooth",
                                })
                              }}
                          sx={{
                            cursor: "pointer",
                            // "&:hover": {
                              //color: Colors.airaPrimary,
                              color: "#000",
                              fontWeight: 600,
                              //color: "#200e32",
                              textDecorationStyle:"none"
                            // },
                          }}
                        >
                          <Link to={`/${listItem.route}`} sx={{textDecoration:"none"}}>{listItem.label}</Link>
                        </Typography>
            //             <Button
            //   key={listItem.id}
            //   component={LinkBehavior}
            //   to={listItem.id}
            //   onClick={() => {
            //     window.scrollTo({
            //       top: 0,
            //       behaviour: "smooth",
            //     });
            //   }}
            //   sx={{
            //     display: "block",
            //     fontSize: "13px",
            //     fontWeight: 700,
            //     borderBottom: "3px solid transparent",
            //     color: "#fff",
            //   }}
            // >
            //   {listItem.label}
            // </Button>
                      );
                    })}
                  </Stack>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} sx={{ p: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              <Typography
                variant="body1"
                sx={{ fontWeight: 700, color: Colors.airaSecondary }}
              >
                Contact Us
              </Typography>
            </Grid>
            {FOOTERFLAGData.map((flagItem, flasgIdx) => {
              let _connectType = "mailto";
              switch (flagItem.type) {
                case "email":
                  _connectType = `mailto:${flagItem.text}`;
                  break;
                case "contact":
                  _connectType = `tel:${flagItem.text}`;
                  break;
                case "address":
                  _connectType = `https://www.google.com/maps`;
                  break;
                default:
                  _connectType = "#";
              }
              return (
                <Grid item key={flagItem.id} sm={6}>
                  <Stack direction="row" gap={1.5} alignItems="center">
                    <div>{getIcon(flagItem.icon)}</div>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontSize: "14px", fontFamily: "Montserrat" }}
                    >
                      <a
                        style={{
                          textDecoration: "none",
                          //color: "#fff",
                          color: "#000",
                        }}
                        href={_connectType}
                        target={
                          _.isEqual(flagItem.type, "address")
                            ? "_blank"
                            : "_self"
                        }
                        rel="noreferrer"
                      >
                        {flagItem.text}
                      </a>
                    </Typography>
                  </Stack>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>

      <Stack alignItems="center" sx={{ pt: 3, pb: 5 }}>
        <Stack direction="column" gap={2}>
          <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
            Copyright © {new Date().getFullYear()} AIRA a product of
            HyperAutomation Solutions Pvt. Ltd. All Rights Reserved.
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            gap={2}
          >
            {termsLinks.map((linkItem) => {
              return (
                <Typography
                  key={linkItem.id}
                  component={LinkBehavior}
                  to={linkItem.route}
                  variant="subtitle2"
                  sx={{
                    cursor: "pointer",
                    color: Colors.airaSecondary,
                    textDecoration: "none",
                    paddingRight: 5,
                    borderRight: "1px solid #000",
                    "&:last-child": {
                      border: 0,
                    },
                    fontWeight: "bold",
                    pr: 1,
                    "&:hover": {
                      color: Colors.eggplant,
                    },
                  }}
                >
                  {linkItem.label}
                </Typography>
              );
            })}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default FooterNew;
