import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import RSelect from "react-select";
import AIRAMonoLinesLeft from "../../components/AIRAMonoLinesLeft";
import Colors from "../../common/Colors";
import ValuesStack from "./ValuesStack";
import MeetOurTeam from "./MeetOurTeam";
import AIRAQuickFact from "./AIRAQuickFact";

const AboutUs = () => {
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
            color: "#200E32",
            marginLeft: "100px",
          }}
        >
          Democratizing Automation <br />
          <span style={{ color: Colors.airaSecondary }}>
            for Future-Ready <br /> Performance
          </span>
        </Typography>
        <img
          src="images/aboutus/about_us_header.png"
          alt="blogsHeader"
          style={{ width: "700px", height: "400px" }}
        />
      </Stack>

      <Stack sx={{ width: "65%", mx: "auto", mt: 15 }} gap={1}>
        <Stack direction="row" gap={5}>
          <Box>
            <img
              src="images/aboutus/au_commitment.png"
              alt="commitment"
              style={{ height: "400px", width: "400px" }}
            />
          </Box>
          <Box>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
              AIRA: Committed to build a technology driven future
            </Typography>

            <Typography variant="subtitle1" sx={{ lineHeight: 2 }}>
              Our mission is what inspires us to take up the responsibility of
              making the world a better place through automation technologies.
              We undertake every possible endeavor to expand human capabilities
              and impact communities through groundbreaking innovations. At
              every step, we strive to abide by our goal-
              <span style={{ fontWeight: 600 }}>
                Enabling transformation through intelligent automation to create
                value for our people, partners, and communities
              </span>{" "}
              . AIRA aims to use the power of automation to move the world
              forward. As a leading next-generation technology company, we aim
              to deliver a fresh perspective to how the business processes can
              evolve.
            </Typography>
          </Box>
        </Stack>

        <Typography
          variant="subtitle2"
          sx={{ fontWeight: 600, textAlign: "center", lineheight: 2, my: 2 }}
        >
          At AIRA, we aren’t afraid to take risks because we believe in evolving
          with failures. We erase boundaries that restrict us from learning and
          advancing and take big, bold steps that create lasting results.
        </Typography>
      </Stack>
      <Box sx={{ backgroundColor: "#F8F9FB" }}>
        <Box sx={{ width: "70%", mx: "auto", my: 4 }} direction="row" gap={1}>
          <ValuesStack />
        </Box>
      </Box>

      <Box sx={{ width: "70%", mx: "auto", my: 4 }} direction="row" gap={1}>
        <MeetOurTeam />
      </Box>

      <Box sx={{ backgroundColor: "#6755DF" }}>
        <Box sx={{ width: "70%", mx: "auto", mt: 4 }} direction="row" gap={1}>
          <AIRAQuickFact />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
