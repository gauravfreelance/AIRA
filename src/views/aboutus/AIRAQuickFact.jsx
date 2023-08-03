import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const QUICKFACTS = [
  { id: 1, title: "Customer First Approach", icon: "customer.png" },
  {
    id: 2,
    title: "One-stop Marketplace for Automation",
    icon: "marketplace.png",
  },
  {
    id: 3,
    title: "Solutions that Simplify Real-World Problems",
    icon: "solution.png",
  },
  { id: 4, title: "24/7 Customer Support and Services", icon: "support.png" },
];

const AIRAQuickFact = () => {
  return (
    <Box sx={{ color: "#fff" }}>
      <Grid container spacing={5} sx={{ py: 5, pb: 10 }}>
        <Grid item xs={12} sm={6}>
          <Stack direction="column">
            <Typography
              variant="h4"
              sx={{ fontWeight: 600 }}
              color="common.white"
            >
              AIRA <br /> Quick Facts
            </Typography>

            <Typography variant="subtitle2" sx={{ my: 2 }} color="common.white">
              When you work with us, transformation becomes more rigorous,
              dynamic, and powerful than ever.
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Stack direction="column" gap={2}>
            {QUICKFACTS.map((factItem, idx) => {
              const { title, id, icon } = factItem;
              return (
                <Stack direction="row" gap={1} alignItems="center" key={id}>
                  <img
                    src={`/images/aboutus/airaquickfact/${icon}`}
                    alt={title}
                    height={30}
                    width={30}
                  />
                  <Typography variant="subtitle2" color="common.white">
                    {title}
                  </Typography>
                </Stack>
              );
            })}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AIRAQuickFact;
