import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import Colors from "../../common/Colors";

const BtnLeftImageRightCard = (props) => {
  const {
    cardTitle = "Adaptive Agents",
    cardDesc = "No content",
    imgSrc = "images/csr/csrheader.png",
    btnText = "Explore",
  } = props;
  return (
    <Box sx={{ mx: "auto", my: 3 }} gap={1}>
      <Grid container direction="row">
        <Grid item xs={12} sm={7}>
          <img
            src={imgSrc}
            alt={cardTitle}
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "12px",
              zindex: -1,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={5} justifySelf="center" alignSelf="center">
          <Card
            raised
            sx={{
              borderRadius: "12px",
              ml: "-20%",
              position: "relative",
              zIndex: 1,
            }}
          >
            <CardContent sx={{ pl: 3 }}>
              <Typography
                variant="h6"
                sx={{ color: Colors.airaSecondary, fontWeight: 600, mb: 1 }}
              >
                {cardTitle}
              </Typography>
              <Typography variant="subtitle2" sx={{ lineHeight: 2, pb: 2 }}>
                {cardDesc}
              </Typography>

              <Button
                variant="contained"
                color="secondary"
                sx={{ color: "#fff" }}
              >
                {btnText}
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BtnLeftImageRightCard;
