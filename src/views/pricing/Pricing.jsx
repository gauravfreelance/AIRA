import React from 'react'
import { Box, Stack, Typography } from "@mui/material";
import Colors from "../../common/Colors";
import AIRAMonoLinesLeft from "../../components/AIRAMonoLinesLeft";
//import CSRAtAIRA from '../csr/CSRAtAIRA';
import PricingCard from './PricingCard';
import Offering from './Offering';
import OfferCard from './OfferCard';
const Pricing = () => {
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
                    src="images/pricing/pricing_header.png"
                    alt="CSR Header"
                    style={{ width: "700px", height: "450px" }}
                />
            </Stack>
            <Box sx={{ backgroundColor: "#F8F9FB" }}>
                <Box sx={{ width: "70%", mx: "auto", my: 4 }} direction="row" gap={1}>
                    <PricingCard />
                </Box>
            </Box>
            <Box>
        <Box sx={{ width: "70%", mx: "auto", my: 4 }} direction="row" gap={1}>
          <Offering />
        </Box>
        <Box sx={{ width: "70%", mx: "auto", my: 4 }} direction="row" gap={1}>
          <OfferCard/>
        </Box>
      </Box>
        </Box>
    )
}

export default Pricing