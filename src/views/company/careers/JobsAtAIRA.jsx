import {
  Box,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import Colors from "../../../common/Colors";

const VACANCIES = [
  {
    title: "PHP Developer",
    desc: "Information Technology",
    type: "Full Time",
    level: "Mid Level",
  },
  {
    title: "Full Stack Developer",
    desc: "Information Technology",
    type: "Full Time",
    level: "Mid Level",
  },
  {
    title: "Python Developer",
    desc: "Information Technology",
    type: "Full Time",
    level: "Mid Level",
  },
  {
    title: "Business Developer",
    desc: "Information Technology",
    type: "Full Time",
    level: "Mid Level",
  },
  {
    title: "React Developer",
    desc: "Information Technology",
    type: "Full Time",
    level: "Mid Level",
  },
  {
    title: "NodeJS Developer",
    desc: "Information Technology",
    type: "Full Time",
    level: "Mid Level",
  },
];

const JobsAtAIRA = (props) => {
  const { IMGBASEURL } = props;
  return (
    <Box>
      <Stack sx={{ mb: 10 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
          Jobs at AIRA
        </Typography>
        <Typography variant="body" sx={{ lineHeight: 2 }}>
          At AIRA, we nurture talents to build a culture of innovation. We’ll
          harness every breadth of your knowledge to take your expertise to the
          next level. Kick-start your career with us and traverse as far as your
          ambitions take you.
        </Typography>
      </Stack>

      <Grid container spacing={4}>
        {VACANCIES.map((item, idx) => {
          const { title, desc, type, level } = item;
          return (
            <Grid item key={idx} xs={12} sm={4}>
              <Card
                raised
                sx={{
                  border: `2px solid ${Colors.airaPrimary}`,
                  color: Colors.eggplant,
                  borderRadius: "15px",
                }}
              >
                <CardContent>
                  <Stack gap={2}>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      {title}
                    </Typography>
                    <Typography variant="subtitle1">{desc}</Typography>
                    <Stack direction="row" gap={2}>
                      <Typography variant="subtitle2">
                        <img
                          src={`${IMGBASEURL}/time-clock-square.png`}
                          alt="type"
                          style={{ marginRight: "5px" }}
                        />
                        {type}
                      </Typography>
                      <Typography variant="subtitle2">
                        <img
                          src={`${IMGBASEURL}/menu-modern-square.png`}
                          alt="type"
                          style={{ marginRight: "5px" }}
                        />
                        {level}
                      </Typography>
                    </Stack>

                    <Box>
                      <Button variant="contained" size="small" sx={{ mt: 1 }}>
                        Apply Now
                      </Button>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default JobsAtAIRA;
