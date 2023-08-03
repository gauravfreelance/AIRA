import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import Colors from "../../common/Colors";

const RightImageLeftCard = (props) => {
  const {
    cardTitle = "Adaptive Agents",
    cardDesc = "No content",
    imgSrc = "images/csr/csrheader.png",
  } = props;
  return (
    <Box sx={{ mx: "auto", my: 3 }} gap={1}>
      <Grid container direction="row">
        <Grid item xs={12} sm={5} justifySelf="center" alignSelf="center">
          <Card
            raised
            sx={{
              borderRadius: "12px",
              mr: "-20%",
              position: "relative",
              zIndex: 1,
            }}
          >
            <CardContent sx={{ pl: 3 }}>
              <Typography
                variant="body1"
                sx={{ color: Colors.airaPrimary, fontWeight: 600, mb: 1 }}
              >
                {cardTitle}
              </Typography>
              <Typography variant="subtitle2" sx={{ lineHeight: 1.7, pb: 2 }}>
                {cardDesc}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={7}>
          <img
            src={imgSrc}
            alt={cardTitle}
            sx={{
              height: "100%",
              width: "100%",
              borderRadius: "12px",
              zindex: -1,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default RightImageLeftCard;
