import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/material";
import Colors from "../../common/Colors";

const OUR_TEAM = [
  { id: "1", name: "Aziz", position: "Chairman", image: "aziz.png" },
  {
    id: "1",
    name: "Shashwat",
    position: "Chief Technology Officer",
    image: "shashwat.png",
  },
  {
    id: "1",
    name: "Franck",
    position: "Chief Financial Officer",
    image: "franck.png",
  },
  {
    id: "1",
    name: "Kubra",
    position: "Head of Administration",
    image: "kubra.png",
  },
  {
    id: "1",
    name: "Thomas",
    position: "Head of Sales and Marketing",
    image: "thomas.png",
  },
];

const MeetOurTeam = () => {
  return (
    <Box sx={{ py: 5 }}>
      <Typography variant="h5" sx={{ fontWeight: 700, textAlign: "center" }}>
        Meet our team
      </Typography>
      <Typography
        variant="body1"
        sx={{ textAlign: "center", my: 2, lineHeight: 2 }}
      >
        To think big and create a world of difference, takes an enthusiastic,
        dedicated, and experienced team. At AIRA, we take pride to be led by a
        diverse global team of highly proficient leaders and subject matter
        experts that bring intellectual rigor to define and advance the
        intelligent automation industry.
      </Typography>

      <Stack
        direction="row"
        gap={2}
        sx={{ m: 5 }}
        alignItems="center"
        justifyContent="space-evenly"
      >
        {OUR_TEAM.map((person, idx) => {
          const { name, image, position } = person;
          return (
            <Stack
              direction="column"
              key={name}
              gap={1}
              alignItems="center"
              justifyContent="center"
            >
              <img
                src={`/images/aboutus/ourteam/${image}`}
                alt={name}
                height={130}
                width={130}
              />

              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    color: Colors.airaPrimary,
                    textAlign: "center",
                  }}
                >
                  {name}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    textAlign: "center",
                    fontSize: "13px",
                    color: "text.primary",
                  }}
                >
                  {position}
                </Typography>
              </Box>
            </Stack>
          );
        })}
      </Stack>
    </Box>
  );
};

export default MeetOurTeam;
