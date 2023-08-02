import {
  Card,
  CardContent,
  Grid,
  List,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { LinkBehavior } from "../../components/header/Header";
import { ESListButton } from "./CompanyPopover";
//import { TbSettingsAutomation } from "react-icons/tb";
// import { FaMagic, FaRobot } from "react-icons/fa";
// import { FcWorkflow } from "react-icons/fc";
// import { GiArtificialIntelligence } from "react-icons/gi";
// import { GrDocumentText } from "react-icons/gr";
// import { MdOutlineBatchPrediction } from "react-icons/md";
// import { TbSettingsAutomation } from "react-icons/tb";
// import { VscServerProcess } from "react-icons/vsc";

const ICON_SIZE = 25;

const navlinks1 = [
  {
    title: "Hyper-automation Solution",
    id: "hyperautomation",
  },
  {
    title: "Robotic Process automation",
    id: "rpa",
  },
  {
    title: "Artificial Intelligence / Machine Learning",
    id: "aiml",
  },
  {
    title: "Intelligent Document processing",
    id: "idp",
  },
  {
    title: "Natural Language Processing",
    id: "nlp",
  },
];
const navlinks2 = [
  {
    title: "Workflow",
    id: "workflow",
  },
  {
    title: "Orchestrator",
    id: "orchestrator",
  },
  {
    title: "Predictive Analytics",
    id: "predictive_analytics",
  },
  {
    title: "Process mining",
    id: "process_mining",
  },
];

const PlatformPopover = ({ onLinkClick }) => {
  return (
    <Card raised>
      <CardContent sx={{ px: 5, py: 5, pt: 2 }}>
        <Stack gap={2} direction="row">
          <List>
            {navlinks1.map(({ title, id, icon }) => {
              return (
                <ESListButton
                  key={id}
                  disableRipple
                  component={LinkBehavior}
                  to={id}
                  onClick={onLinkClick}
                >
                  <ListItemText disableTypography>
                    <Typography variant="subtitle2" key={id}>
                      {title}
                    </Typography>
                  </ListItemText>
                </ESListButton>
              );
            })}
          </List>
          <List>
            {navlinks2.map(({ title, id, icon }) => {
              return (
                <ESListButton
                  key={id}
                  disableRipple
                  component={LinkBehavior}
                  to={id}
                  onClick={onLinkClick}
                >
                  <ListItemText disableTypography>
                    <Typography variant="subtitle2" key={id}>
                      {title}
                    </Typography>
                  </ListItemText>
                </ESListButton>
              );
            })}
          </List>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default PlatformPopover;
