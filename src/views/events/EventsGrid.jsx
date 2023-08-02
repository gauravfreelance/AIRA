import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";
import Colors from "../../common/Colors";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const EVENTS_DATA = [
  {
    title: "Title of the event",
    image: "event_img_1.png",
    date: "02/02/2022",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
  {
    title: "Title of the event",
    date: "02/02/2022",
    image: "event_img_2.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
  {
    title: "Title of the event",
    date: "02/02/2022",
    image: "event_img_3.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
];

const EventCard = (props) => {
  const { image, title, content, IMGBASEURL, date } = props;
  return (
    <Card raised sx={{ borderRadius: "10px" }}>
      <CardMedia
        sx={{ height: 200 }}
        image={`${IMGBASEURL}/${image}`}
        title="green iguana"
      />
      <CardContent sx={{ maxHeight: "300px" }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ color: Colors.airaSecondary, fontWeight: 600 }}
        >
          {title}
        </Typography>
        <Stack
          direction="row"
          gap={2}
          sx={{ my: 2, color: Colors.airaPrimary }}
          alignItems="center"
          justifycontent="center"
        >
          <CalendarMonthIcon />
          <Typography variant="subtitle2">{date}</Typography>
        </Stack>
        <Typography
          variant="subtitle2"
          color="text.secondary"
          textOverflow="ellipsis"
        >
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Box>
          <Button variant="text" color="primary" disabled endIcon={<ArrowForwardIcon />}>
            Register Now
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

const EventsGrid = (props) => {
  const { IMGBASEURL } = props;
  return (
    <Box>
      <Grid container spacing={3}>
        {EVENTS_DATA.map((eventItem, eventIdx) => {
          return (
            <Grid item xs={12} sm={4} sx={{ display: "flex" }}>
              <EventCard
                key={eventIdx}
                IMGBASEURL={IMGBASEURL}
                {...eventItem}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default EventsGrid;
