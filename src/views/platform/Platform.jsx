import React, { useState } from "react";
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
import Colors from "../../common/Colors";

const SOLUTIONSDATA = [
  {
    title: "Hyper Automation",
    desc: "Patris Scipionis florem diuturnum et adult.",
    icon: "banking.svg",
    route: "hyper-automation",
  },
  {
    title: "Artificial intelligence/ Machine learning",
    desc: "Patris Scipionis florem diuturnum et adult.",
    icon: "insurance.svg",
    route: "aiml",
  },
  {
    title: "Intelligent document processing",
    desc: "Patris Scipionis florem diuturnum et adult.",
    icon: "healthcare.svg",
    route: "idp",
  },
  {
    title: "Workflow",
    desc: "Patris Scipionis florem diuturnum et adult.",
    icon: "telecom.svg",
    route: "workflow",
  },
  {
    title: "Predictive Analytics",
    desc: "Patris Scipionis florem diuturnum et adult.",
    icon: "retail.svg",
    route: "predictive_analytics",
  },
  {
    title: "Process mining",
    desc: "Patris Scipionis florem diuturnum et adult.",
    icon: "bpo.svg",
    route: "process_mining",
  },
  {
    title: "Orchestrator",
    desc: "Patris Scipionis florem diuturnum et adult.",
    icon: "manufacturing.svg",
    route: "orchestrator",
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
        alignContent: "Center",
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

const Platform = () => {
  return (
<>
<h1 className="text-center">Platform for Developers and Startups to Build their Ideas
<div class="container">
  <p style={{fontSize:"20px"}} >
    We are a team of passionate developers who want to build the future.
  </p>
  <Box>

  </Box>
  <Grid container gap={2} sx={{ p: 2, pl: 0 }}>
                  {SOLUTIONSDATA.map((item, idx) => {
                    return (
                      <Grid item key={idx}>
                        <ESCard
                          {...item}
                          onCardClick={() => {
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
</div>
</h1>
<br/>


</>
  );
};

export default Platform;
