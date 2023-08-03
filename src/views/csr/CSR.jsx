import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Colors from "../../common/Colors";
import AIRAMonoLinesLeft from "../../components/AIRAMonoLinesLeft";
import CSRPilliarStack from "./CSRPilliarStack";
import CSRAtAIRA from "./CSRAtAIRA";

const CSR = () => {
  return (
    <Box sx={{ backgroundColor: "##F8F9FB", position: "relative" }}>
      <Stack
        sx={{ my: 10 }}
        alignItems="center"
        direction="row"
        justifyContent="space-between"
      >
        <Box sx={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: -80,
            }}
          >
            <AIRAMonoLinesLeft />
          </div>
        </Box>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            lineHeight: 1.2,
            color: Colors.airaSecondary,
            marginLeft: "100px",
          }}
        >
          Empowering <br />
          <span style={{ color: "#200E32", fontWeight: 700 }}>
            Communities Globally
          </span>
        </Typography>
        <img
          src="images/csr/csrheader.png"
          alt="CSR Header"
          style={{ width: "700px", height: "450px" }}
        />
      </Stack>

      <Stack sx={{ width: "65%", mx: "auto", mt: 15 }} gap={1}>
        <Stack direction="row" gap={5}>
          <Box>
            <img
              src="images/csr/airaimpact.png"
              alt="commitment"
              style={{ height: "400px", width: "400px" }}
            />
          </Box>
          <Box>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
              AIRA Impact
            </Typography>

            <Typography variant="subtitle1" sx={{ lineHeight: 2 }}>
              AIRA recognizes its commitment to driving positive impact to help
              the world run better. By incorporating a strategic approach in our
              social investments, we build an environment that accelerates
              innovation and enhances education and entrepreneurship. We bring
              our knowledge and enthusiasm to enact changes through our talent,
              technology, and capital investments focused to improve people’s
              lives. Our vision is to create a sustainable future for
              communities where we live and work.
            </Typography>
          </Box>
        </Stack>

        <Typography
          variant="body1"
          sx={{ fontWeight: 600, textAlign: "center", lineheight: 2, mt: 5 }}
        >
          To advance our impact, we operate our CSR programs around four key
          pillars:
        </Typography>
      </Stack>
      <Box>
        <Box sx={{ width: "70%", mx: "auto", my: 4 }} direction="row" gap={1}>
          <CSRPilliarStack />
        </Box>
      </Box>

      <Box sx={{ backgroundColor: "#F8F9FB" }}>
        <Box sx={{ width: "70%", mx: "auto", my: 4 }} direction="row" gap={1}>
          <CSRAtAIRA />
        </Box>
      </Box>
    </Box>
  );
};

export default CSR;
