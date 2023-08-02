import { Box } from "@mui/material";
import Lottie from "lottie-react";
import { useRouteError } from "react-router-dom";
import pageNotFound from "../assets/lottieanimations/lottie-404.json";
import AIRAMonoLinesLeft from "../components/AIRAMonoLinesLeft";
import pageNotFoundRobot from "../assets/lottieanimations/lottie-404_robot";
import AIRAMonoLinesRight from "../components/AIRAMonoLinesRight";
import FooterNew from "../components/footer/FooterNew";
import Header from "../components/header/Header";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Box sx={{ py: 7 }}>
      <Header />
      <Box
        sx={{
          py: 5,
          borderBottomWidth: "2px",
          borderColor: "#eee",
          borderStyle: "solid",
        }}
      >
        <AIRAMonoLinesLeft
          styles={{
            top: 40,
          }}
        />
        <AIRAMonoLinesRight
          styles={{
            top: 100,
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "500px",
            width: "100%",
          }}
        >
          <Lottie animationData={pageNotFoundRobot} loop={true} />
        </div>
      </Box>
      <FooterNew />
    </Box>
  );
}
