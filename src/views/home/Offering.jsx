import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Colors from "../../common/Colors";
import { TbCodeOff, TbCode } from "react-icons/tb";
import { IoBusiness } from "react-icons/io5";
import { BsFastForwardCircleFill } from "react-icons/bs";
import { GrDocumentText } from "react-icons/gr";

const ICON_SIZE = 25;

const OFFERINGSLIST = [
  {
    title: "Low Code Automation",
    icon: <TbCode fontSize={ICON_SIZE} />,
    desc: "Introduce automation within your enterprise through low code suites dedicated to speed up the time-consuming tasks.",
  },
  {
    title: "Unified No Code Integrations",
    icon: <TbCodeOff fontSize={ICON_SIZE} />,
    desc: "Integrate your existing tools and modules with AIRA for a unified experience that enables you to bring your entire workflow on a single platform.",
  },
  {
    title: "Agile, Evolved & Future Proof Business Processes",
    icon: <IoBusiness fontSize={ICON_SIZE} />,
    desc: "Edit the workflows on run-time to update the workflows and keep them future ready using AIRA’s agility.",
  },
  {
    title: "10X Faster & Smarter Workforce",
    icon: <BsFastForwardCircleFill fontSize={ICON_SIZE} />,
    desc: "Save your workforce’s critical time by automating the conventional processes that consume maximum bandwidth.",
  },
];

const Offering = () => {
  return (
    <Grid container spacing={2} direction="row">
      <Grid item xs={12} sm={6} alignItems="center" justifyContent="flex-end">
        <Box
          sx={{
            backgroundColor: Colors.airaPrimary,
            p: 5,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "end",
            borderRadius: "10px",
          }}
        >
          <img
            src="/images/home/offeringgirl.png"
            alt="offeringgirl"
            style={{ marginRight: -100, borderRadius: "10px" }}
          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={1}></Grid>
      <Grid
        item
        xs={12}
        sm={5}
        sx={{
          //p: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ p: 5, pl: 0 }}>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            Offerings
          </Typography>
          <Typography
            variant="body1"
            sx={{ my: 3, fontWeight: 400, lineHeight: 1.7 }}
          >
            Here’s how AIRA is becoming the most trusted RPA Solution in leading
            industries.
          </Typography>

          <Grid container spacing={2}>
            {OFFERINGSLIST.map((offeringItem, idx) => {
              return (
                <Grid item xs={12} sm={6} key={idx}>
                  <Stack direction="row" gap={2} alignItems="center">
                    <div>{offeringItem.icon}</div>
                    <Typography
                      variant="body2"
                      sx={{ color: Colors.airaPrimary, fontWeight: 700 }}
                    >
                      {offeringItem.title}
                    </Typography>
                  </Stack>
                  <Typography
                    variant="subtitle2"
                    sx={{ my: 1, fontWeight: 400, lineHeight: 1.7 }}
                  >
                    {offeringItem.desc}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Offering;
