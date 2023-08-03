import {
  Avatar,
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Colors from "../../../common/Colors";

const EmployeeSpeaks = (props) => {
  const { IMGBASEURL } = props;
  return (
    <Box>
      <Typography
        variant="h5"
        sx={{ textAlign: "center", fontWeight: 600, mb: 3 }}
      >
        Employee Speaks
      </Typography>
      <Card raised sx={{ borderRadius: "15px" }}>
        <CardContent sx={{ p: 4 }}>
          <Stack alignItems="center" justifyContent="center" sx={{ mb: 3 }}>
            <Avatar
              src={`${IMGBASEURL}/shweta.png`}
              alt="Shetanganee"
              sx={{ width: 100, height: 100 }}
            />

            <Typography
              variant="body1"
              sx={{
                color: Colors.airaPrimary,
                fontWeight: "bold",
                mt: 2,
                mb: "5px",
              }}
            >
              SHWETANGANEE
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{ fontWeight: "bold" }}
            >
              Marcom Executive
            </Typography>
          </Stack>
          <Typography
            variant="body1"
            sx={{ lineHeight: 1.6, color: Colors.eggplant }}
          >
            “AIRA is a great place to work. It is a young organization with a
            contemporary, innovative, and entrepreneurial approach that
            distinguishes it from its competitors. I have been with the
            organization for more than 2 years now, and have seen myself
            transform as a professional in more than one way. With the support
            from great leaders, mentors, and professionals around, the job
            becomes very easy.”
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default EmployeeSpeaks;
