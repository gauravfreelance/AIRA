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

const IMGBASEURL = "/images/platforms/nlp";

const LR_ITEMS = [
  {
    cardTitle: "Boost Market Intelligence",
    cardDesc:
      "Stay updated with your niche industry and ongoing market trends by harnessing the power of AIRA’s advanced NLP tools. The insightful data derived helps with creation of robust strategies that strengthen your business while boosting customer satisfaction.",
    imgSrc: `nlp_1.png`,
    direction: "left",
  },
  {
    cardTitle: "Improve overall efficiency",
    cardDesc:
      "Add conversational intelligence to your existing applications to improve the overall efficiency and accuracy of your business processes. The self-learning, next generation applications with capability to understand multiple languages and industry specific terminologies integrate agility into your business.",
    imgSrc: `nlp_2.png`,
    direction: "right",
  },
  {
    cardTitle: "Get Intelligent Customer Insights",
    cardDesc:
      "Use AIRA’s NLP systems to discover intent behind customer sentiments. Identify, analyze, and abstract information from scattered text to understand attitude and emotions of customers to use them for improvement of existing business processes.",
    imgSrc: `nlp_3.png`,
    direction: "left",
  },
];

const NLP = () => {
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
            Understand human language better with NLP
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
            Unlock the power of NLP to transform unstructured data into
            actionable insights.
          </Typography>
        </Stack>
        <img
          src={`${IMGBASEURL}/nlp_header.png`}
          alt="nlp header"
          style={{ width: "700px", height: "400px" }}
        />
      </Stack>

      <Box sx={{ width: "70%", mx: "auto", mt: 5 }}>
        <Box>
          <CircleCard
            content={
              "Leveraging AIRA’s NLP expertise, developing next-generation digital systems that can read and understand human language is just super quick and simplified. We employ state-of-art practices, expertise and tools to create NLP solutions that seamlessly integrate with your existing system. We can help you integrate NLP capabilities in your applications, IoT devices, and bots to eliminate human efforts and process documents rapidly."
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
          Natural Language Processing
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

export default NLP;
