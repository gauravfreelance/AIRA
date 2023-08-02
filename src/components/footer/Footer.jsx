import {
  Avatar,
  Button,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import _ from "lodash";
import React, { useState } from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";
import AIRALOGO from "../../assets/airalogo.svg";
import Colors from "../../common/Colors";
import { LinkBehavior, navPages } from "../header/Header";

import FlagFrance from "../../assets/footericons/flagFrance.png";
import FlagIndia from "../../assets/footericons/flagIndia.png";
import Mail from "../../assets/footericons/mail.png";
import { Link } from "react-router-dom";

const getIcon = (icon) => {
  switch (icon) {
    case "france_flag":
      return <Avatar src={FlagFrance} alt="Flag India" />;
    case "india_flag":
      return <Avatar src={FlagIndia} alt="Flag France" />;
    case "mail":
      return <Avatar src={Mail} alt="Mail" />;
    default:
      return <Avatar src={FlagIndia} alt="Flag India" />;
  }
};

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
    id: "mail",
    icon: "mail",
    text: "connect@aira.fr",
    type: "email",
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
];

const SocialIcon = (props) => {
  return (
    <IconButton
      sx={{
        backgroundColor: Colors.airaPrimary,
        color: "#fff",
        m: 0,
        fontWeight: 800,
        fontSize: "25px",
        "&:hover": {
          color: Colors.airaPrimary,
          backgroundColor: "#fff",
        },
      }}
      onClick={() => {}}
      size="small"
    >
      {props.children}
    </IconButton>
  );
};

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  return (
    <Stack direction="column" sx={{ pt: 6 }}>
      <Stack
        spacing={2}
        alignItems="center"
        sx={{
          m: "0 auto",
          maxWidth: "40%",
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
      <div
        style={{
          minWidth: "50%",
          margin: "0 auto",
          borderBottom: "2px solid #CBD0DA",
        }}
      ></div>
      <Grid
        container
        spacing={2}
        alignItems="center"
        sx={{
          m: "0 auto",
          maxWidth: "60%",
          py: 5,
        }}
      >
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
            <Grid key={flagItem.id} item sm={6} md={4}>
              <Stack direction="row" gap={1.5} alignItems="center">
                <div>{getIcon(flagItem.icon)}</div>
                <Typography
                  variant="subtitle1"
                  sx={{ fontSize: "14px", fontFamily: "Montserrat" }}
                >
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
                </Typography>
              </Stack>
            </Grid>
          );
        })}
      </Grid>
      <Grid
        container
        sx={{
          minHeight: "100px",
          m: "0 auto",
          maxWidth: "80%",
          borderTop: "1px solid #eee",
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
              variant="body1"
              className="text-nowrap"
              sx={{
                fontFamily: "Montserrat",
                fontWeight: 600,
                lineHeight: "24px",
                color: "#200E32",
                verticalAlign: "top",
                fontSize: "14px",
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
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{
          height: "90px",
          backgroundColor: Colors.airaPrimary,
        }}
      >
        <Stack direction="row" gap={2} sx={{ mr: 10 }}>
          {navPages.map((page) => (
            <Button
              key={page.id}
              component={LinkBehavior}
              to={page.id}
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behaviour: "smooth",
                });
              }}
              sx={{
                display: "block",
                fontSize: "13px",
                fontWeight: 700,
                borderBottom: "3px solid transparent",
                color: "#fff",
              }}
            >
              {page.name}
            </Button>
          ))}
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          gap={1}
        >
          <SocialIcon>
            <AiOutlineInstagram />
          </SocialIcon>
          <SocialIcon>
            <AiOutlineTwitter />
          </SocialIcon>
          <SocialIcon>
            <RiLinkedinFill />
          </SocialIcon>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
