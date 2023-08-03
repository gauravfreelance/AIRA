import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Colors from "../../common/Colors";

const CSRAIRA_ITEM = [
  {
    id: 1,
    title: "Expedite economic growth",
    desc: "Technology solutions help drive innovation in industries and infrastructure to encourage economic growth.",
  },
  {
    id: 2,
    title: "Create social impact",
    desc: "Utilizing technology and talent to address socio-developmental issues with strategic investments to have a lasting impact on society.",
  },
  {
    id: 3,
    title: "Growth-Oriented, Sustainable development",
    desc: "Devise approach to accelerate business growth, job creation, and investment in startups.",
  },
];

const ESCircle = (props) => {
  const { id, title, desc } = props;
  return (
    <Box sx={{ backgroundColor: "#fff", p: 3, borderRadius: 4 }}>
      <Stack direction="column" alignItems="center" justifyContent="center">
        <Box
          sx={{
            backgroundColor: Colors.airaPrimary,
            borderRadius: "40px",
            mb: 2,
            display: "flex",
            height: "80px",
            width: "80px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              verticalAlign: "middle",
              fontWeight: 600,
              color: "#fff",
            }}
          >
            {id}
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{ color: "#200E32", textAlign: "center", fontWeight: 600, mb: 2 }}
        >
          {title}
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ color: "#200E32", textAlign: "center", pb: 2, lineHeight: 1.8 }}
        >
          {desc}
        </Typography>
      </Stack>
    </Box>
  );
};

const CSRAtAIRA = () => {
  return (
    <Box sx={{ backgroundColor: "#F8F9FB", color: "#200E32" }}>
      <Typography
        variant="h5"
        sx={{ textAlign: "center", pt: 3, pb: 2, fontWeight: 600 }}
      >
        <span style={{ color: Colors.airaSecondary }}>CSR </span>
        at AIRA
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ textAlign: "center", lineHeight: 1.7 }}
      >
        AIRA’s social investment strategy focuses on applying technology to
        address critical challenges faced by communities to inspire
        inclusiveness and sustainability. Through our endeavors, we propel
        social change to ensure the financial well-being of people across the
        globe.
      </Typography>
      <Grid container spacing={2} sx={{ my: 3, display: "flex" }}>
        {CSRAIRA_ITEM.map((item) => {
          return (
            <Grid item xs={12} md={4} key={item.id} sx={{ display: "flex" }}>
              <ESCircle {...item} />
            </Grid>
          );
        })}
      </Grid>

      <Typography
        variant="body1"
        sx={{ fontWeight: 600, py: 10, textAlign: "center" }}
      >
        Discover how we leverage technology and its impact to foster
        inclusiveness in society to offer more opportunities to people.
      </Typography>
    </Box>
  );
};

export default CSRAtAIRA;
