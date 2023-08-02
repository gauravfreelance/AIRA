import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Colors from "../../common/Colors";

// const SVGWrapper = styled.div`
//   body,
//   html {
//     margin: 0;
//     padding: 0;
//   }

//   body {
//     font-family: sans-serif;
//     background: #ff5722;
//     color: #ffffff;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//   }

//   .svg-wrapper {
//     text-align: center;
//     padding-top: 40px;

//     .title {
//       text-align: center;
//       font-weight: 300;
//       letter-spacing: 1px;
//     }

//     .svg {
//       margin-top: 60px;
//     }
//   }

//   @-webkit-keyframes dash {
//     to {
//       stroke-dashoffset: 1000;
//     }
//   }

//   .path {
//     animation: dash 15s linear infinite;
//     animation-direction: reverse;
//     stroke-dasharray: 20;
//   }

//   // signature
//   .signature-wrapper {
//     margin-top: 150px;
//     margin-bottom: 100px;
//     text-align: center;

//     .signature-title {
//       font-size: 16px;
//       letter-spacing: 1px;
//       font-weight: normal;
//       color: #fff;
//     }

//     .signature-link {
//       color: #fff;
//       display: inline-block;
//       margin: 20px 0 10px;
//       font-size: 13px;
//       letter-spacing: 0.5px;
//       text-decoration: none;
//       border-bottom: solid 2px #ddd;
//     }
//   }
// `;

const ConnectToSystem = () => {
  return (
    <Box>
      <Stack
        direction="column"
        sx={{
          backgroundImage: "url(/images/home/activityicons.svg)",
          backgroundRepeat: "no-repeat",
          backgroundposition: "center",
          height: "600px",
        }}
      >
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          gap={2}
          sx={{
            width: "40%",
            margin: "0 auto",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: 700 }}
            className="text-center"
          >
            Connected to your favorite <br />
            <span style={{ color: Colors.airaSecondary, alignSelf: "center" }}>
              {" "}
              systems and apps
            </span>
          </Typography>
          <Typography variant="body1" className="text-center">
            Unleash endless possibilities with an ever-growing ecosystem built
            on our open, extensible platform
          </Typography>
        </Stack>
        {/* <img src="images/home/activityicons.svg" alt="activity" /> */}
        {/* <AnimatedActivitySVG /> */}
      </Stack>
    </Box>
  );
};

export default ConnectToSystem;
