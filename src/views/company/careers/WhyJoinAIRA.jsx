import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Colors from "../../../common/Colors";

const WhyJoinAIRA = (props) => {
  const { IMGBASEURL } = props;
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              backgroundColor: Colors.airaPrimary,
              borderRadius: "10px",
              position: "relative",
              //width: "80%",
            }}
          >
            <img
              src={`${IMGBASEURL}/whyjoinaira.png`}
              alt="Why Join AIRA"
              style={{ height: "400px" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={2}></Grid>
        <Grid item xs={12} sm={6}>
          <Stack gap={2}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                lineHeight: 1.2,
                color: "#200E32",
              }}
            >
              Why Join AIRA?
            </Typography>
            <Typography
              variant="body"
              sx={{
                fontWeight: 500,
                lineHeight: 2,
                color: "#200E32",
              }}
            >
              At AIRA, we are always on the lookout for curious minds who work
              to lead and innovate for creating solutions that improve people’s
              lives. If you have ideas and a passion for making a difference,
              come join us. AIRA offers you a dynamic community to work with. We
              have exceptional people from around the world working with us on
              solving complex, real-world problems that augment human
              possibility.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyJoinAIRA;
