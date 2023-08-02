import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Colors from "../../common/Colors";

const DISCOVER_ITEMS = [
  {
    title: "One team, one goal",
    desc: "We dream big and achieve those dreams by working hard for it, every single day.",
    icon: "goal.png",
  },
  {
    title: "Creativity",
    desc: "We are innovators who are focused to implement the most creative ideas to deliver distinguished results.",
    icon: "creativity.png",
  },
  {
    title: "Integrity",
    desc: "Committed to staying honest to whatever we commit to, no matter what the consequences.",
    icon: "integrity.png",
  },
  {
    title: "Communication",
    desc: "Clear information exchange and acknowledgment of efforts to build a healthy relationship on every front.",
    icon: "communication.png",
  },
];

const ValuesStack = () => {
  return (
    <Box sx={{ pb: 8 }}>
      <Stack
        direction="row"
        gap={1}
        sx={{ pt: 4 }}
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          <span style={{ color: Colors.airaSecondary }}>Values </span>
          of AIRA
        </Typography>
      </Stack>

      <Grid container spacing={3} sx={{ my: 3 }}>
        {DISCOVER_ITEMS.map((item, idx) => {
          let { title, desc, icon } = item;
          return (
            <Grid item xs={12} sm={3} key={idx}>
              <Stack
                direction="column"
                alignItems="center"
                justifyContent="center"
              >
                <div>
                  <img
                    src={`/images/aboutus/airavalues/${icon}`}
                    alt={title}
                    height={60}
                    width={60}
                  />
                </div>
                <Typography
                  variant="caption"
                  sx={{
                    pt: 1,
                    fontSize: "16px",
                    fontWeight: 600,
                    textAlign: "center",
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    fontSize: "14px",
                    fontWeight: 500,
                    textAlign: "center",
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

export default ValuesStack;
