import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Pagination,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import RSelect from "react-select";
import AIRAMonoLinesLeft from "../../components/AIRAMonoLinesLeft";
import Colors from "../../common/Colors";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const IMGBASEURL = "/images/whitepapers";

const WHITEPAPERS_DATA = [
  {
    id: 1,
    image: "white_paper_1.png",
    title: "Hyper-automation & winning with artificial intelligence",
    date: "June 8,2022",
    duration: "5 min",
    tag: "Hyper Automation",
  },
  {
    id: 2,
    image: "white_paper_2.png",
    title: "RPA Digital agents for Supply Chain Management",
    date: "June 8,2022",
    duration: "5 min",
    tag: "Industry Solutions",
  },
  {
    id: 3,
    image: "white_paper_3.png",
    title: "Why do Digital transformation projects fail?",
    date: "June 8,2022",
    duration: "5 min",
    tag: "Automation",
  },
];

const WhitePaperCard = (props) => {
  const { image, title, date, duration, tag } = props;
  return (
    <Card
      raised
      sx={{
        backgroundImage: `url(${IMGBASEURL}/${image})`,
        cursor: "pointer",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "15px",
        backgroundSize: "400px 400px",
        height: "400px",
      }}
    >
      <CardContent
        sx={{
          position: "relative",
          height: "400px",
        }}
      >
        <Stack
          direction="column"
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            p: 2,
            color: "#fff",
          }}
          alignSelf="flex-end"
        >
          <Typography variant="body1" sx={{ fontWeight: 600, color: "#fff" }}>
            {title}
          </Typography>
          <Divider sx={{ backgroundColor: "#fff", my: 1 }} />

          <Typography variant="body2" sx={{ color: "#fff" }}>
            {date}
          </Typography>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ mt: 1 }}
          >
            <Chip label={tag} sx={{ backgroundColor: "#fff" }} />
            <Stack direction="row" gap={2}>
              <Typography variant="subtitle2" sx={{ color: "#fff" }}>
                {duration}
              </Typography>
              <img src={`${IMGBASEURL}/time.svg`} alt="timesvg" />
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

const Whitepapers = () => {
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
              top: -100,
            }}
          >
            <AIRAMonoLinesLeft />
          </div>
        </Box>
        <Stack direction="column" gap={2} sx={{ p: 3, marginLeft: "200px" }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              lineHeight: 1.2,
              color: Colors.airaSecondary,
            }}
          >
            Whitepapers
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 600,
              lineHeight: 1.6,
              color: Colors.eggplant,
            }}
          >
            Read about the latest technological innovations in the world of RPA
            and Hyper Automation.
          </Typography>
        </Stack>
        <img
          src={`${IMGBASEURL}/whitepapers_header.png`}
          alt="whitepaper Header"
          style={{ width: "700px", height: "450px" }}
        />
      </Stack>

      <Box sx={{ width: "70%", margin: "0 auto", my: 6 }}>
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12} md={4}>
            <input type="text" className="form-control" placeholder="Search" />
          </Grid>
          <Grid item xs={12} md={4}>
            <RSelect
              options={[
                {
                  label: "All Categories",
                  value: "all_categories",
                },
              ]}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <RSelect
              options={[
                {
                  label: "All Tags",
                  value: "all_tags",
                },
              ]}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          {WHITEPAPERS_DATA.map((blogItem, blogIdx) => {
            return (
              <Grid item xs={12} md={4} key={blogItem.id}>
                <WhitePaperCard {...blogItem} />
              </Grid>
            );
          })}
        </Grid>

        <Stack
          alignItems="center"
          justifyContent="space-between"
          direction="row"
          sx={{ my: 5 }}
        >
          <Button
            variant="text"
            color="secondary"
            sx={{ fontWeight: 600 }}
            startIcon={<KeyboardDoubleArrowLeftIcon />}
          >
            Previous
          </Button>
          <Pagination
            count={10}
            color="secondary"
            variant="text"
            hideNextButton
            hidePrevButton
          />
          <Button
            variant="text"
            color="secondary"
            sx={{ fontWeight: 600 }}
            endIcon={<KeyboardDoubleArrowRightIcon />}
          >
            Next
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Whitepapers;
