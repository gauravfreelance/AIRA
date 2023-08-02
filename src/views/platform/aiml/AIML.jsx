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

const IMGBASEURL = "/images/platforms/aiml";

const LR_ITEMS = [
  {
    cardTitle: "Automate Workflows and Apps",
    cardDesc:
      "Automate your time-intensive manual processes to foster a rapid, data-driven and automated work culture that complements workflows inside teams and the entire enterprise.",
    imgSrc: `automate_workflow.png`,
    direction: "left",
  },
  {
    cardTitle: "Derive Value from your Data",
    cardDesc:
      "Emply the strenghts of advanced AI concepts and machine learning algorithms such as mathematical optimization, pattern recognition, and computational intelligence, to train and build your own RPA models that enhance business intelligence and traverse towards a future-ready enterprise.",
    imgSrc: `derive_value.png`,
    direction: "right",
  },
  {
    cardTitle: "Boost Efficiency throughout your organization",
    cardDesc:
      "Simplify your tasks using AI models based on category classification, object detection, form processing, and entity extraction via an intuitive interface. Boost productivity and discover new business thresholds with prebuilt AI-powered solutions.",
    imgSrc: `boost_efficiency.png`,
    direction: "left",
  },
];

const AIML = () => {
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
            AI and ML Powered Automation
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
            Latest artificial intelligence and machine learning techniques to
            catapult your enterprise’s automation journey.
          </Typography>
        </Stack>
        <img
          src={`${IMGBASEURL}/aiml_header.png`}
          alt="aiml header"
          style={{ width: "700px", height: "400px" }}
        />
      </Stack>

      <Box sx={{ width: "70%", mx: "auto", mt: 5 }}>
        <Box>
          <CircleCard
            content={
              "AIRA empowers the RPA journey of enterprises with its advanced range of AI and ML capabilities that develop operational efficiency and invent new possibilities that address the automation needs of the existing processes. Backed by the most sophisticated technology solutions, AIRA allows you to embed/build machine learning models to intelligently accomplish your goals."
            }
          />
        </Box>

        <Typography
          variant="h5"
          sx={{
            color: Colors.airaPrimary,
            my: 10,
            textAlign: "center",
            fontWeight: 600,
          }}
        >
          Artificial Intelligence / Machine Learning Center
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

export default AIML;
