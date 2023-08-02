import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Colors from "../../common/Colors";

const PILLIARS_ITEMS = [
  {
    title: "Education",
    desc: "Enabling unprivileged students, marginalized youths, and NGOs to become self-sufficient by incorporating automation in the education sector.",
    icon: "education.png",
  },
  {
    title: "Society",
    desc: "Providing exponential technology support and volunteering programs to encourage equality for all and persuade a helping hand.",
    icon: "society.png",
  },
  {
    title: "Conversation",
    desc: "Committed to staying honest to whatever we commit to, no matter what the consequences.",
    icon: "conversation.png",
  },
  {
    title: "Government & Ethics",
    desc: "We abide to the applicable laws and regulations by demonstrating high ethical standards and corporate governance.",
    icon: "government.png",
  },
];

const CSRPilliarStack = () => {
  return (
    <Box sx={{ pb: 8 }}>
      <Grid container spacing={3} sx={{ my: 3 }}>
        {PILLIARS_ITEMS.map((item, idx) => {
          let { title, desc, icon } = item;
          return (
            <Grid item xs={12} sm={3} key={idx}>
              <Stack
                direction="column"
                alignItems="center"
                justifyContent="center"
              >
                <Box sx={{ mb: 2 }}>
                  <img
                    src={`/images/csr/${icon}`}
                    alt={title}
                    height={60}
                    width={60}
                  />
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 600,
                    textAlign: "center",
                    mb: 1,
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 500,
                    textAlign: "center",
                    color: "#200E32",
                    lineHeight: 2,
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

export default CSRPilliarStack;
