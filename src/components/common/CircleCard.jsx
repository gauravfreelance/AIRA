import React from "react";
import Colors from "../../common/Colors";
import { Box, Card, CardContent, Typography } from "@mui/material";

export const CircleCard = (props) => {
  const { content = "No content", sx = {} } = props;
  return (
    <Box sx={{ position: "relative" }}>
      <Card raised sx={{ p: 2, borderRadius: "12px", ...sx }}>
        <CardContent>
          <Typography variant="body2" sx={{ lineHeight: "32px" }}>
            {content}
          </Typography>
        </CardContent>
      </Card>
      <Box
        sx={{
          width: "80px",
          position: "absolute",
          zIndex: -1,
          top: "-15%",
          left: "-5%",
          height: "80px",
          borderRadius: "50%",
          border: `2px solid ${Colors.airaPrimary}`,
        }}
      />
    </Box>
  );
};
