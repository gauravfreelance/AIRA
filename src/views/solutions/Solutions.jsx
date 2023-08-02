import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import _ from "lodash";
import React, { useState } from "react";
import Colors from "../../common/Colors";
import AIRAMonoLinesLeft from "../../components/AIRAMonoLinesLeft";
import Banking from "./banking/Banking";

const SOLUTIONSDATA = [
  {
    title: "Banking & Finance",
    desc: "Patris Scipionis florem diuturnum et adult.",
    icon: "banking.svg",
    route: "banking",
  },
  {
    title: "Insurance",
    desc: "Patris Scipionis florem diuturnum et adult.",
    icon: "insurance.svg",
    route: "insurance",
  },
  {
    title: "Healthcare",
    desc: "Patris Scipionis florem diuturnum et adult.",
    icon: "healthcare.svg",
    route: "healthcare",
  },
  {
    title: "Telecom",
    desc: "Patris Scipionis florem diuturnum et adult.",
    icon: "telecom.svg",
    route: "telecom",
  },
  {
    title: "Retail",
    desc: "Patris Scipionis florem diuturnum et adult.",
    icon: "retail.svg",
    route: "retail",
  },
  {
    title: "BPO",
    desc: "Patris Scipionis florem diuturnum et adult.",
    icon: "bpo.svg",
    route: "bpo",
  },
  {
    title: "Manufacturing",
    desc: "Patris Scipionis florem diuturnum et adult.",
    icon: "manufacturing.svg",
    route: "manufacturing",
  },
];

const ESCard = (props) => {
  const { title, desc, icon, onCardClick } = props;
  return (
    <Card
      onClick={onCardClick}
      sx={{
        backgroundColor: Colors.airaPrimary,
        userSelect: "none",
        borderRadius: "10px",
        cursor: "pointer",
        borderLeft: `5px solid transparent`,
        borderBottom: `5px solid transparent`,
        "&:hover": {
          borderLeft: `5px solid ${Colors.airaSecondary}`,
          borderBottom: `5px solid ${Colors.airaSecondary}`,
          transition: "border 0.30s ease-in-out",
        },
      }}
    >
      <CardContent>
        <img
          src={`/images/solutions/${icon}`}
          alt=""
          style={{
            height: "56px",
            width: "56px",
          }}
        />
        <Typography variant="body1" sx={{ color: "#fff", mt: 1 }}>
          {title}
        </Typography>
        <Typography variant="caption" sx={{ color: "#fff" }}>
          {desc}
        </Typography>
      </CardContent>
    </Card>
  );
};

const ESSolutionRoute = ({ route }) => {
  switch (route) {
    case "banking":
      return <Banking />;
    default:
      return <Banking />;
  }
};

const Solutions = () => {
  const [selectedSolutions, setSelectedSolutions] = useState({});
  return (
    <Box>
      {_.isEmpty(selectedSolutions) && (
        <Box sx={{ backgroundColor: "##F8F9FB", position: "relative", pt: 4 }}>
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              backgroundImage: "url(images/solutions/solutiongirl.png)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right",
              
            }}
          >
            <Grid item xs={2}></Grid>
            <Grid
              item
              xs={12}
              md={10}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                flexGrow: 1,
              }}
            >
              <Stack sx={{ my: 10 }}>
                <Box sx={{ width: "40%" }}>
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    Our{" "}
                    <span style={{ color: Colors.airaSecondary }}>
                      Solutions
                    </span>
                  </Typography>
                  <Typography variant="body1" sx={{ my: 3 }}>
                    Statuerimus vitii vita nobis vitii maxime amicis exempla
                    maxime velint accepimus exempla res proxime aut quibus
                    accedunt sunt communis qui.
                  </Typography>
                </Box>

                <Box sx={{ width: "40%",marginTop: "150px" }}>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    <span style={{ color: Colors.airaSecondary }}>
                      By Industry
                    </span>
                  </Typography>
                  <Typography variant="body1" sx={{ my: 3 }}>
                    See how you can use automation in your industry to move faster, grow more 
                    <br />profitable, and improve both customer and employee satisfaction.
                  </Typography>
                </Box>
                <Grid container gap={2} sx={{ p: 2, pl: 0 }}>
                  {SOLUTIONSDATA.map((item, idx) => {
                    return (
                      <Grid item key={idx}>
                        <ESCard
                          {...item}
                          onCardClick={() => {
                            setSelectedSolutions(item);
                            window.scrollTo({
                              top: 0,
                              behaviour: "smooth",
                            });
                          }}
                        />
                      </Grid>
                    );
                  })}
                </Grid>

                <Box sx={{ width: "40%", marginTop: "150px" }}>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    <span style={{ color: Colors.airaSecondary }}>
                      By Department
                    </span>
                  </Typography>
                  <Typography variant="body1" sx={{ my: 3 }}>
                    Explore the ways automation can help every department in your enterprise work
                    smoother and smarter.
                  </Typography>
                </Box>

                <Grid container gap={2} sx={{ p: 2, pl: 0 }}>
                  {SOLUTIONSDATA.map((item, idx) => {
                    return (
                      <Grid item key={idx}>
                        <ESCard
                          {...item}
                          onCardClick={() => {
                            setSelectedSolutions(item);
                            window.scrollTo({
                              top: 0,
                              behaviour: "smooth",
                            });
                          }}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </Stack>
            </Grid>
          </Grid>

          <div
            style={{
              position: "absolute",
              top: 100,
            }}
          >
            <AIRAMonoLinesLeft />
          </div>
        </Box>
      )}
      {!_.isEmpty(selectedSolutions) && (
        <Stack direction="column" sx={{ py: 3 }}>
          <Stack sx={{ width: "90%", margin: "0 auto" }}>
            <Stack
              direction="row"
              alignItems="center"
              gap={2}
              //justifyContent="center"
            >
              <IconButton
                onClick={() => {
                  setSelectedSolutions({});
                }}
              >
                <ArrowBackIcon sx={{ fontSize: "30px" }} />
              </IconButton>
              <Typography
                variant="h4"
                sx={{ fontWeight: 700, color: Colors.airaSecondary }}
              >
                {selectedSolutions.title}
              </Typography>
            </Stack>
          </Stack>
          <Divider sx={{ my: 2 }} />
          <ESSolutionRoute route={selectedSolutions} />
        </Stack>
      )}
    </Box>
  );
};

export default Solutions;
