import {
  Card,
  CardContent,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { LinkBehavior } from "../../components/header/Header";
import { AiOutlineDollarCircle, AiOutlineTeam } from "react-icons/ai";
import { GiHumanPyramid, GiHumanTarget } from "react-icons/gi";
import { GrContactInfo } from "react-icons/gr";
import { RiSuitcaseFill } from "react-icons/ri";
import Colors from "../../common/Colors";

const ICON_SIZE = 25;

export const ESListButton = (props) => {
  const { sx, children } = props;
  return (
    <ListItemButton
      sx={{
        px: 3,
        borderLeft: "8px solid transparent",
        borderRadius: "4px",
        "&:hover": {
          borderLeft: `8px solid ${Colors.airaSecondary}`,
          transition: "border-left 0.2s",
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </ListItemButton>
  );
};

const navlinks = [
  {
    title: "About us",
    id: "about_us",
    icon: <GrContactInfo fontSize={ICON_SIZE} />,
  },
  // {
  //   title: "Leadership Team",
  //   id: "leadership_team",
  //   icon: <AiOutlineTeam fontSize={ICON_SIZE} />,
  // },
  {
    title: "Pricing",
    id: "pricing",
    icon: <AiOutlineDollarCircle fontSize={ICON_SIZE} />,
  },
  {
    title: "Careers at AIRA",
    id: "careers",
    icon: <RiSuitcaseFill fontSize={ICON_SIZE} />,
  },
  {
    title: "Corporate Social Responsibility",
    id: "csr",
    icon: <AiOutlineTeam fontSize={ICON_SIZE} />,
  },
  {
    title: "Find a partner",
    id: "findpartner",
    icon: <GiHumanTarget fontSize={ICON_SIZE} />,
  },
  {
    title: "Partnership Portal Page.",
    id: "portal",
    icon: <GiHumanPyramid fontSize={ICON_SIZE} />,
  },
];

const CompanyPopover = ({ onLinkClick }) => {
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
export default CompanyPopover;
