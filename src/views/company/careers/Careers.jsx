import { Box, Stack, Typography, Button } from "@mui/material";
import React from "react";
import Colors from "../../../common/Colors";
import _ from "lodash";
import AIRAMonoLinesLeft from "../../../components/AIRAMonoLinesLeft";
import WhyJoinAIRA from "./WhyJoinAIRA";
import WhatMakesUsDifferent from "./WhatMakesUsDifferent";
import JobsAtAIRA from "./JobsAtAIRA";
import BtnLeftImageRightCard from "../../../components/common/BtnLeftImageRightCard";
import BtnRightImageLeftCard from "../../../components/common/BtnRightImageLeftCard";
import EmployeeSpeaks from "./EmployeeSpeaks";

const IMGBASEURL = "/images/careers";

const LR_ITEMS = [
  {
    cardTitle: "Internship Programs",
    cardDesc:
      "Explore a wide range of opportunities for graduate and postgraduate students to get a perfect kickstart for their technical career.",
    imgSrc: `reach_out_1.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: "Entry Level Opportunities",
    cardDesc:
      "Inviting entry level professionals for a chance to start your career and explore how you can transform the world.",
    imgSrc: `reach_out_2.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "Senior Level Opportunities",
    cardDesc:
      "Inviting exceptional leaders and subject matter experts to guide the teams at AIRA and help them take the brand to the next level.",
    imgSrc: `reach_out_3.png`,
    btnText: "Explore Positions",
    type: "explore_positions",
    direction: "right",
  },
];

const Careers = () => {
  return (
    <Box sx={{ backgroundColor: "##F8F9FB", position: "relative" }}>
      <Stack
        sx={{ my: 10 }}
        alignItems="center"
        direction="row"
        justifyContent="space-between"
      >
        <Box sx={{ position: "relative", width: "10%" }}>
          <div
            style={{
              position: "absolute",
              top: -150,
            }}
          >
            <AIRAMonoLinesLeft />
          </div>
        </Box>
        <Stack direction="column" gap={2} sx={{ p: 3, marginLeft: "100px" }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              lineHeight: 1.2,
              color: "#200E32",
            }}
          >
            Opportunities at AIRA
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 600,
              lineHeight: 1.6,
              color: Colors.eggplant,
            }}
          >
            Inviting technology evangelists to build a future driven by
            automation and innovation
          </Typography>
          <Box>
            <Button
              variant="contained"
              color="secondary"
              sx={{ color: "#fff" }}
            >
              Search Jobs
            </Button>
          </Box>
        </Stack>
        <img
          src={`${IMGBASEURL}/careersheader.png`}
          alt="bot header"
          style={{ width: "700px", height: "400px" }}
        />
      </Stack>

      <Box sx={{ mx: "auto", width: "70%", mt: 15, mb: 5 }}>
        <WhyJoinAIRA IMGBASEURL={IMGBASEURL} />
      </Box>

      <Box sx={{ backgroundColor: Colors.steelGrey, mb: 5 }}>
        <Box sx={{ mx: "auto", width: "70%" }}>
          <WhatMakesUsDifferent IMGBASEURL={IMGBASEURL} />
        </Box>
      </Box>

      <Box sx={{ mx: "auto", width: "70%" }}>
        <JobsAtAIRA IMGBASEURL={IMGBASEURL} />
      </Box>

      {/* reach_out_1.png */}

      <Box sx={{ mx: "auto", width: "60%", my: 10 }}>
        <Stack gap={4}>
          {LR_ITEMS.map((lrItem, lrIdx) => {
            let { direction, imgSrc, ...restItems } = lrItem;
            imgSrc = `${IMGBASEURL}/${imgSrc}`;
            return (
              <Box key={lrIdx} gap={1}>
                {_.isEqual(direction, "left") ? (
                  <BtnLeftImageRightCard imgSrc={imgSrc} {...restItems} />
                ) : (
                  <BtnRightImageLeftCard imgSrc={imgSrc} {...restItems} />
                )}
              </Box>
            );
          })}
        </Stack>
      </Box>

      {/* Employeee Speaks */}
      <Box sx={{ mx: "auto", width: "60%", my: 10 }}>
        <EmployeeSpeaks IMGBASEURL={IMGBASEURL} />
      </Box>
      {/* Employeee Speaks */}
    </Box>
  );
};

export default Careers;
