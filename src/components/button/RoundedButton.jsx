import { Button } from "@mui/material";
import React from "react";

const RoundedButton = ({ label, sx = {}, ...restProps }) => {
  return (
    <Button
      color="primary"
      variant="contained"
      className="text-nowrap"
      sx={{
        fontFamily: "Montserrat",
        fontSize: "14px",
        fontWeight: 700,
        borderRadius: "30px",
        px: 2,
        ...sx,
      }}
      {...restProps}
    >
      {label}
    </Button>
  );
};

export default RoundedButton;
