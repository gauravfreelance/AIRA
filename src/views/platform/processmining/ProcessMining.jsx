import { Box, Stack, Typography } from "@mui/material";
import _ from "lodash";
import React from "react";
import Colors from "../../../common/Colors";
import AIRAMonoLinesLeft from "../../../components/AIRAMonoLinesLeft";
import { CircleCard } from "../../../components/common/CircleCard";
import LeftImageRightCard from "../../../components/common/LeftImageRightCard";
import RightImageLeftCard from "../../../components/common/RightImageLeftCard";
import ProductResources from "../ProductResources";
import RoundedButton from "../../../components/button/RoundedButton";

const IMGBASEURL = "/images/platforms/processMining";

const LR_ITEMS = [
  {
    cardTitle: "Prioritize processes and Increases ROI",
    cardDesc:
      "Swiftly identify the parts of the process that need to be automated and get a better visibility into processes to let business owners know which improvements will offer the maximum value with automation.",
    imgSrc: `prioritize_processes.png`,
    direction: "left",
  },
  {
    cardTitle: "Prevent problems before they appear",
    cardDesc:
      "Monitor transactions in real-time to identify bottlenecks and send alerts as soon as an anomaly in the process is detected.",
    imgSrc: `prevent_problems.png`,
    direction: "right",
  },
  {
    cardTitle: "Improves Customer Experience",
    cardDesc:
      "Enjoy a greater process agility with qualitative user insights and get a 360-degree view of pain points your customers, employees, or partners are experiencing.",
    imgSrc: `improves_customer.png`,
    direction: "left",
  },
];

const SmartBots = () => {
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
        <Stack direction="column" gap={2} sx={{ p: 3 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              lineHeight: 1.2,
              color: "#200E32",
              marginLeft: "100px",
            }}
          >
            Streamline Your Business Processes.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 600,
              lineHeight: 1.6,
              color: "#200E32",
              marginLeft: "100px",
            }}
          >
            An ultimate tool that helps you optimize the processes and transform
            the events into knowledgeable and actionable insights.
          </Typography>
        </Stack>
        <img
          src={`${IMGBASEURL}/processmining_header.png`}
          alt="processmining_header"
          style={{ width: "700px", height: "400px" }}
        />
      </Stack>

      <Box sx={{ width: "70%", mx: "auto" }}>
        <Box sx={{ mt: 5 }}>
          <CircleCard
            content={
              "AIRA’s Process Mining lets you streamline the user experience and develop easy to use platform that can be used to improve the business processes. AIRA Process Mining solutions offer better guidance to businesses on the processes and workflows that should and should not be automated. Backed by thorough research and technical expertise, AIRA offers you digital transformation roadmaps that impact the business bottom line."
            }
          />
        </Box>

        <Typography
          variant="h5"
          sx={{
            color: Colors.airaPrimary,
            textAlign: "center",
            fontWeight: 600,
            my: 10,
          }}
        >
          Process Mining
        </Typography>

        {LR_ITEMS.map((lrItem, lrIdx) => {
          let { direction, imgSrc, ...restItems } = lrItem;
          imgSrc = `${IMGBASEURL}/${imgSrc}`;
          return (
            <Box key={lrIdx}>
              {_.isEqual(direction, "left") ? (
                <LeftImageRightCard imgSrc={imgSrc} {...restItems} />
              ) : (
                <RightImageLeftCard imgSrc={imgSrc} {...restItems} />
              )}
            </Box>
          );
        })}
      </Box>

      <Stack alignItems="center" justifyContent="center" sx={{ my: 15 }}>
        <RoundedButton
          color="secondary"
          sx={{ color: "#fff", px: 5, py: 1 }}
          label="Try AIRA Free"
          onClick={() => {
            //setOpenTryAIRADialog(true);
          }}
        />
      </Stack>

      <ProductResources />
    </Box>
  );
};

export default SmartBots;
