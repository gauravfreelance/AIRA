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

const IMGBASEURL = "/images/platforms/smartbots";

const LR_ITEMS = [
  {
    cardTitle: "Adaptive Agents",
    cardDesc:
      "AIRA’s digital agents are designed to swiftly adapt to your existing technology stack and platforms. Right from your CMS to the enterprise applications, find how these agents glue in and start giving great results.",
    imgSrc: `adaptive_agent.png`,
    direction: "left",
  },
  {
    cardTitle: "Automate Rational Processes",
    cardDesc:
      "The agents flawlessly learn new AI techniques to automate the processes that involve your workforce in taking complex decisions. You can either create your own models or use the ones already available with AIRA to ensure smooth automation.",
    imgSrc: `automatic_rational.png`,
    direction: "right",
  },
  {
    cardTitle: "Customize Agents",
    cardDesc:
      "Customize your AIRA agents and categorize them as per your work cycles. The agents can either function on their own, in collaboration with you or in a way that they learn and adapt the everything in the real time.",
    imgSrc: `customized_agents.png`,
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
            Smart bots for automated business processes
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
            Turbocharge automation and expand your access to business
            applications with AIRA’s pre-built Digital Agents.
          </Typography>
        </Stack>
        <img
          src={`${IMGBASEURL}/smartbot_header.png`}
          alt="bot header"
          style={{ width: "700px", height: "400px" }}
        />
      </Stack>

      <Box sx={{ width: "70%", mx: "auto" }}>
        <Typography
          variant="h5"
          sx={{
            color: Colors.airaPrimary,
            textAlign: "center",
            fontWeight: 600,
          }}
        >
          AIRA Agents
        </Typography>

        <Box sx={{ my: 10 }}>
          <CircleCard
            content={
              "AIRA’s Digital Agents are designed to automate business processes that consume human intelligence, time and energy each single day. Our pre-built, customizable Digital Agents embed the latest techniques such as Natural Language Processing to help understand a broad range of languages to interact with consumers more conveniently. AIRA’s Bots free your workforce from performing mundane tasks, so that they can focus on higher-value work that impacts your bottom line."
            }
          />
        </Box>

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
