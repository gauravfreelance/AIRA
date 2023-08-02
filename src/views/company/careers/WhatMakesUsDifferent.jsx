import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import Colors from "../../../common/Colors";

const DIFFERENT_DATA = [
  {
    text: "Engaged and enthusiastic workforce to imbibe positive work culture.",
  },
  { text: "We embrace diversity and provide equal opportunities to everyone" },
  { text: "Internal events to promote better understanding among employees." },
  { text: "Value creation and constant attention to all stakeholders’ needs." },
  {
    text: "Open and creative organization providing you space to show your brilliance",
  },
  {
    text: "Fellowships, self-paced learning, and mentoring to accelerate learning and career development.",
  },
];

const WhatMakesUsDifferent = () => {
  return (
    <Box sx={{ py: 10 }}>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 4 }}>
        What make us different ?
      </Typography>
      <Grid container spacing={2}>
        {DIFFERENT_DATA.map((dataItem, idx) => {
          return (
            <Grid item key={idx} xs={12} sm={4} sx={{ display: "flex" }}>
              <Card
                sx={{
                  backgroundColor: Colors.airaPrimaryDark,
                  borderRadius: "20px",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{ color: Colors.lightText }}
                  >
                    {dataItem.text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default WhatMakesUsDifferent;
