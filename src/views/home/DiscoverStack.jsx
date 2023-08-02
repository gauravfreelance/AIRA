import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Colors from "../../common/Colors";

const DISCOVER_ITEMS = [
  {
    title: "Strategize",
    icon: "search.svg",
    desc: "Find out the time-consuming tasks that you’d want AIRA to automate for you.",
  },
  {
    title: "Transform",
    icon: "paintbrush.svg",
    desc: "Automate your everyday tasks by creating your own RPA to work with speed and agility.",
  },
  {
    title: "Streamline",
    icon: "deploy.svg",
    desc: "Execute your RPAs based on predefined schedules/workflow-triggered actions.",
  },
];

const DiscoverStack = () => {
  return (
    <Box>
      <Stack
        direction="row"
        gap={1}
        sx={{ mb: 10 }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          <span style={{ color: Colors.airaSecondary }}>Discover </span>
          how AIRA Works
        </Typography>
        <div
          style={{
            position: "relative",
            width: "100%",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <img
            src="/images/home/designer.png"
            alt="Designer"
            style={{ position: "absolute", bottom: -150, left: -100 }}
          />
          <img
            src="/images/home/girlhome.png"
            alt="Discover Girl"
            style={{ justifySelf: "flex-end" }}
          />
        </div>
      </Stack>

      <Grid container spacing={3} sx={{ my: 2 }}>
        {DISCOVER_ITEMS.map((item, idx) => {
          let { title, desc, icon } = item;
          return (
            <Grid item xs={12} sm={4} key={idx}>
              <Stack direction="column">
                <div>
                  <img
                    src={`/images/home/${icon}`}
                    alt={title}
                    height={32}
                    width={32}
                  />
                </div>
                <Typography
                  variant="caption"
                  sx={{
                    pt: 1,
                    fontSize: "16px",
                    color: "#6755DF",
                    fontWeight: 600,
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    py: 1,
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#200E32",
                    lineHeight: "22px",
                  }}
                >
                  {desc}
                </Typography>
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default DiscoverStack;
