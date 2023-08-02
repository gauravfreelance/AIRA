import React from 'react'
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
  CardMedia,
} from "@mui/material";
import RSelect from "react-select";
import AIRAMonoLinesLeft from "../../components/AIRAMonoLinesLeft";
import Colors from "../../common/Colors";

const IMGBASEURL = "/images/brochures";

const FindPartnerCard = (props) => {
  const { image, title, desc } = props;
  return (
    <Card raised>
      <CardMedia
        sx={{ height: 140 }}
        image={`${IMGBASEURL}/${image}`}
        title="green iguana"
      />
      <CardContent sx={{ maxHeight: "200px" }}>
        <Typography
          gutterBottom
          variant="body1"
          component="div"
          sx={{ color: Colors.airaPrimary }}
        >
          {title}
        </Typography>
        <Typography
          variant="subtitle2"
          color="text.secondary"
          textOverflow="ellipsis"
        >
          {desc}
        </Typography>
      </CardContent>
    </Card>
  );
};
const FindPartner = () => {
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
            Find a Partner
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 600,
              lineHeight: 1.6,
              color: Colors.eggplant,
            }}
          >
            Find a partner and gain insight into how our products work.
          </Typography>
        </Stack>
        <img
          src={`${IMGBASEURL}/brochure_header.png`}
          alt="blogsHeader"
          style={{ width: "700px", height: "450px" }}
        />
      </Stack>

      <Box sx={{ width: "70%", margin: "0 auto", my: 6 }}>
        
        <Grid container spacing={2} >
        <Grid
                item
                xs={12}
                md={12}
                sx={{display:"flex",}}
                
              >
          
          <Grid
                item
                xs={12}
                md={3}
                key={12}
                
              >
                <Card raised>
      <CardMedia
        sx={{ height: 140 }}
        image={`${IMGBASEURL}/brochure.png`}
        title="green iguana"
      />
      <CardContent sx={{ maxHeight: "300px", position: "center" }}>
        <Typography
          gutterBottom
          variant="body1"
          component="div"
          sx={{ color: Colors.airaPrimary, position: "center" }}
        >
          New here!
        </Typography>
        <Typography
          variant="subtitle2"
          color="text.secondary"
          textOverflow="ellipsis"
          style={{position: "center"}}
        >
          This Blog will help you get started with finding partner at AIRA
        </Typography>
      </CardContent>
    </Card>
              </Grid>
              </Grid>
        </Grid>

        {/* <Stack
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
        </Stack> */}
      </Box>
    </Box>
  )
}

export default FindPartner