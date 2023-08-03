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

const IMGBASEURL = "/images/platforms/idp";

const LR_ITEMS = [
  {
    cardTitle: "Process Diverse Documents",
    cardDesc:
      "Irrespective of the type or format of the documents, AIRA is designed to process all the documents with ease and help you extract information of interest.",
    imgSrc: `process_diverse.png`,
    direction: "left",
  },
  {
    cardTitle: "Automate Cognitive Tasks",
    cardDesc:
      "Emply the strenghts of advanced AI concepts and machine learning algorithms such as mathematical optimization, pattern recognition, and computational intelligence, to train and build your own RPA models that enhance business intelligence and traverse towards a future-ready enterprise.",
    imgSrc: `automate_cognitive.png`,
    direction: "right",
  },
  {
    cardTitle: "Extract Insights from Custom Docs",
    cardDesc:
      "AIRA agents are trained to extract intelligence even from the custom documents that exist only within your organization’s infrastructure. You can also make your agents learn on the run time to constantly keep adapting.",
    imgSrc: `extract_insight.png`,
    direction: "left",
  },
];

const IDP = () => {
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
            Fuss free document processing with Intelligent Robots
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
            Digital Agents that not just understand your documents but also
            interpret the information for effective intelligence gathering.
          </Typography>
        </Stack>
        <img
          src={`${IMGBASEURL}/idp_header.png`}
          alt="IDP HEader"
          style={{ width: "700px", height: "400px" }}
        />
      </Stack>

      <Box sx={{ width: "70%", mx: "auto" }}>
        <Box sx={{ mt: 5 }}>
          <CircleCard
            content={
              "AIRA’s Intelligent Document Processing (IDP) solutions represent the next generation of automated document processing. Incorporate IDP to achieve appreciable transformation. All business data embedded in unstructured and semi-structured formats can be captured, extracted, and processed to convert it into usable information."
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
          Intelligence Document Processing
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

export default IDP;
