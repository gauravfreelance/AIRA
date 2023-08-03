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

const IMGBASEURL = "/images/platforms/advancedAnalytics";

const LR_ITEMS = [
  {
    cardTitle: "Predict Anomalies",
    cardDesc:
      "Integrating AIRA Analytics Solutions across different workprocesses allows you to analyse the historical data and make predictions across various stages. Predefine rules using ML algorithms to generate alerts for issues/anomalies.",
    imgSrc: `predict_anomalies.png`,
    direction: "left",
  },
  {
    cardTitle: "Analyse RPA Performance",
    cardDesc:
      "Get a 100 percent visibility of the areas where RPA has been applied in your enterprise and analyse its effectiveness and RoIs for further intelligence gathering.",
    imgSrc: `analyse_rpa.png`,
    direction: "right",
  },
  {
    cardTitle: "Transform Intelligence Gathering",
    cardDesc:
      "Apply AIRA’s analytics into your business processes to get a 360-degree view of customer behaviors, patterns, and trends to make more informed business decisions.",
    imgSrc: `transform_intelligence.png`,
    direction: "left",
  },
];

const AdvancedAnalytics = () => {
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
            Transform your data into intelligent insights
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
            Get a simplified access to the meaningful information hidden within
            your data for data driven decision making.
          </Typography>
        </Stack>
        <img
          src={`${IMGBASEURL}/advance_analytic_header.png`}
          alt="advance_analytic_header"
          style={{ width: "700px", height: "400px" }}
        />
      </Stack>

      <Box sx={{ width: "70%", mx: "auto" }}>
        <Box sx={{ mt: 5 }}>
          <CircleCard
            content={
              "AIRA’s Analytics Solutions are designed to optimize the enterprise data to accelerate your journey towards digital transformation. AIRA’s end-to-end analytical capabilities and AI-driven solutions provide real-time insights based on analysis of the past, present, and the future scenarios to provide a solution that’s right for your business and helps you take faster and smarter decisions."
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
          Key Features
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

export default AdvancedAnalytics;
