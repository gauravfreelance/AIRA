import {
  Card,
  CardContent,
  List,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { AiOutlineFilePdf } from "react-icons/ai";
import { BsCalendarEvent, BsNewspaper } from "react-icons/bs";
import { FcDocument } from "react-icons/fc";
import { GiPapers } from "react-icons/gi";
import { MdChangeHistory } from "react-icons/md";
import { SiBlogger } from "react-icons/si";
import { LinkBehavior } from "../../components/header/Header";
import { ESListButton } from "./CompanyPopover";

const ICON_SIZE = 25;

const navlinks = [
  { title: "Blogs", id: "blogs", icon: <SiBlogger fontSize={ICON_SIZE} /> },
  {
    title: "Success Stories",
    id: "success_stories",
    icon: <MdChangeHistory fontSize={ICON_SIZE} />,
  },
  {
    title: "White paper",
    id: "whitepapers",
    icon: <BsNewspaper fontSize={ICON_SIZE} />,
  },
  {
    title: "Events",
    id: "events",
    icon: <BsCalendarEvent fontSize={ICON_SIZE} />,
  },
  {
    title: "Brochure",
    id: "brochures",
    icon: <AiOutlineFilePdf fontSize={ICON_SIZE} />,
  },
  {
    title: "Documentation",
    id: "documentation",
    icon: <FcDocument fontSize={ICON_SIZE} />,
  },
  // {
  //   title: "Testimonials",
  //   id: "testimonials",
  //   icon: <GiPapers fontSize={ICON_SIZE} />,
  // },
  {
    title: "Use Cases",
    id: "usecases",
    icon: <GiPapers fontSize={ICON_SIZE} />,
  },
];

const ResourcesPopover = () => {
  return (
    <Card raised>
      <CardContent sx={{ p: 0 }}>
        <List sx={{ p: 0 }}>
          {navlinks.map(({ title, id, icon }) => {
            return (
              <ESListButton key={id} component={LinkBehavior} to={id}>
                <ListItemText disableTypography>
                  <Typography variant="subtitle2">{title}</Typography>
                </ListItemText>
              </ESListButton>
            );
          })}
        </List>
      </CardContent>
    </Card>
  );
};

export default ResourcesPopover;
