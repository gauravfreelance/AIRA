import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Colors from "../../common/Colors";
import AIRAMonoLinesLeft from "../../components/AIRAMonoLinesLeft";
import EventsGrid from "./EventsGrid";

const IMGBASEURL = "/images/events";

const Events = () => {
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
            Events
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 600,
              lineHeight: 1.6,
              color: Colors.eggplant,
            }}
          >
            Get up close and personal with our people and products
          </Typography>
        </Stack>
        <img
          src={`${IMGBASEURL}/events_header.png`}
          alt="event header"
          style={{ width: "700px", height: "450px" }}
        />
      </Stack>

      <Box sx={{ borderRadius: "20px", width: "60%", mx: "auto"}} >
        <Grid container>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              backgroundColor: Colors.airaPrimary,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderTopLeftRadius: "15px",
              borderBottomLeftRadius: "15px",
              p: 4,
            }}
          >
            <Stack>
              <Typography
                variant="h4"
                sx={{ color: Colors.airaSecondary, fontWeight: 600 }}
              >
                AIRA
              </Typography>
              <Typography
                variant="h5"
                sx={{ color: "#fff", mb: 2, fontWeight: 600 }}
              >
                Live - stay <br /> in the know
              </Typography>
              <Typography variant="body2" sx={{ color: "#fff" }}>
                The latest news, advice, and analysis from industry experts
              </Typography>
              <Box>
                <Button
                  variant="outlined"
                  color="secondary"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    mt: 5,
                    border: "1px solid #fff",
                    color: "#fff",
                    borderRadius: "10px",
                  }}
                >
                  Watch Now
                </Button>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack>
              <img
                src={`${IMGBASEURL}/aira_live.png`}
                alt="AIRA Live"
                style={{ width: "100%", height: "300px" }}
              />
            </Stack>
          </Grid>
        </Grid>
      </Box>

      {/* Event Grid */}
      <Box sx={{ backgroundColor: Colors.steelGrey }}>
        <Box sx={{ width: "70%", mx: "auto", my: 10 }}>
          <EventsGrid IMGBASEURL={IMGBASEURL} />
        </Box>
      </Box>
      {/* Event Grid */}
    </Box>
  );
};

export default Events;
