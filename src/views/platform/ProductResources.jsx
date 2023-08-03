import {
  Box,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import Colors from "../../common/Colors";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const IMGBASEURL = "/images/platforms/productresource";
const RESOURCE_LISTS = [
  {
    icon: "technology.png",
    title: "RPA Digital agents for Supply Chain Management",
  },
  {
    icon: "sphere.png",
    title: "Top Characteristics of a Modern Digital Agent",
  },
  {
    icon: "human-ai.png",
    title: "Chatbot and RPA: The future of Customer Experience",
  },
];

const ProductResources = () => {
  return (
    <Box sx={{ pl: "16%" }}>
      <Typography
        variant="h6"
        sx={{ fontWeight: 600, color: Colors.airaPrimary, my: 3 }}
      >
        Product Resource
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Stack gap={2}>
            {RESOURCE_LISTS.map((listItem, listIdx) => {
              let { title, icon } = listItem;
              icon = `${IMGBASEURL}/${icon}`;
              return (
                <Card
                  key={listIdx}
                  raised
                  sx={{
                    borderRadius: "12px",
                    cursor: "pointer",
                    borderLeft: "10px solid transparent",
                    "&:hover": {
                      borderLeft: `10px solid ${Colors.airaPrimary}`,
                      transition: "border-left .5s",
                    },
                  }}
                  onClick={() => {}}
                >
                  <CardContent>
                    <Stack>
                      <Stack direction="row" gap={2} alignItems="center">
                        <img src={icon} alt={title} />
                        <Typography
                          variant="body1"
                          sx={{ fontWeight: 600, color: Colors.airaSecondary }}
                        >
                          {title}
                        </Typography>
                      </Stack>
                      <Stack direction="row-reverse">
                        <Button
                          variant="text"
                          sx={{ color: "#200E32", fontWeight: 600 }}
                          endIcon={<ArrowForwardIosIcon />}
                        >
                          Read More
                        </Button>
                      </Stack>
                    </Stack>
                  </CardContent>
                </Card>
              );
            })}
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img
            src={`${IMGBASEURL}/productresouce.png`}
            alt="blogsHeader"
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductResources;
