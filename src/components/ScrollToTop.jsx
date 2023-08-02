import React, { useState, useEffect } from "react";
//import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Colors from "../common/Colors";
import { IconButton } from "@mui/material";

const ScrollToTop = ({ classes, showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.scrollY > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };
  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div>
      {show && (
        <IconButton
          onClick={handleClick}
          sx={{
            zIndex: 2,
            position: "fixed",
            bottom: "3vh",
            backgroundColor: Colors.yellow,
            opacity: 0.9,
            color: "#fff",
            "&:hover, &.Mui-focusVisible": {
              color: "#fff",
              opacity: 1,
              transform: "scale(1.1)",
              backgroundColor: Colors.yellow,
              transition: "1s",
            },
            right: "5%",
          }}
        >
          <ExpandLessIcon />
        </IconButton>
      )}
    </div>
  );
};

export default ScrollToTop;
