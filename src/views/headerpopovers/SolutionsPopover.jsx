import {
  Card,
  CardContent,
  List,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import {
  AiOutlineInsurance,
  AiOutlinePhone,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import {
  BsBank2,
  BsClipboard2Data,
  BsFillAirplaneFill,
  BsTruck,
} from "react-icons/bs";
import { FaAws, FaSalesforce } from "react-icons/fa";
import { FcProcess, FcSalesPerformance } from "react-icons/fc";
import { GiHealthNormal, GiHumanPyramid, GiRadioTower } from "react-icons/gi";
import { GrOverview } from "react-icons/gr";
import { MdPrecisionManufacturing } from "react-icons/md";
import { RiFlowChart } from "react-icons/ri";
import { SiHubspot, SiJira, SiOracle, SiSap } from "react-icons/si";
import Colors from "../../common/Colors";
import { LinkBehavior } from "../../components/header/Header";
import { ESListButton } from "./CompanyPopover";

const ICON_SIZE = 25;

const SOLUTIONSSECTION = [
  {
    title: "By Industry",
    icon: "document.png",
    links: [
      {
        title: "Manufacturing",
        id: "manufacturing",
        icon: <MdPrecisionManufacturing fontSize={ICON_SIZE} />,
      },
      {
        title: "Telecom",
        id: "telecom",
        icon: <GiRadioTower fontSize={ICON_SIZE} />,
      },
      {
        title: "Banking and Finance",
        id: "banking_and_finance",
        icon: <BsBank2 fontSize={ICON_SIZE} />,
      },
      {
        title: "BPO",
        id: "bpo",
        icon: <AiOutlinePhone fontSize={ICON_SIZE} />,
      },
      {
        title: "Insurance",
        id: "insurance",
        icon: <AiOutlineInsurance fontSize={ICON_SIZE} />,
      },
      {
        title: "Retail",
        id: "retail",
        icon: <AiOutlineShoppingCart fontSize={ICON_SIZE} />,
      },
      {
        title: "Aviation",
        id: "aviation",
        icon: <BsFillAirplaneFill fontSize={ICON_SIZE} />,
      },
      {
        title: "Healthcare",
        id: "healthcare",
        icon: <GiHealthNormal fontSize={ICON_SIZE} />,
      },
      // {
      //   title: "All industries",
      //   id: "all_industries",
      //   icon: <AiOutlineSmallDash fontSize={ICON_SIZE} />,
      // },
    ],
  },
  {
    title: "By Department",
    icon: "geometry.png",
    links: [
      {
        title: "Supply Chain",
        id: "supply_chain",
        icon: <RiFlowChart fontSize={ICON_SIZE} />,
      },
      {
        title: "Human Resource",
        id: "human_resource",
        icon: <GiHumanPyramid fontSize={ICON_SIZE} />,
      },
      {
        title: "Marketing and sales",
        id: "marketing_and_sales",
        icon: <FcSalesPerformance fontSize={ICON_SIZE} />,
      },
      {
        title: "Customer Service",
        id: "customer_service",
        icon: <BsClipboard2Data fontSize={ICON_SIZE} />,
      },
      // {
      //   title: "All Departments",
      //   id: "all_departments",
      //   icon: <AiOutlineSmallDash fontSize={ICON_SIZE} />,
      // },
    ],
  },
  {
    title: "By Technology",
    icon: "technology.png",
    links: [
      {
        title: "ServiceNow",
        id: "service_now",
        icon: <FaSalesforce fontSize={ICON_SIZE} />,
      },
      {
        title: "Salesforce",
        id: "salesforce",
        icon: <FaSalesforce fontSize={ICON_SIZE} />,
      },
      { title: "SAP", id: "sap", icon: <SiSap fontSize={ICON_SIZE} /> },
      { title: "Jira", id: "jira", icon: <SiJira fontSize={ICON_SIZE} /> },
      { title: "AWS", id: "aws", icon: <FaAws fontSize={ICON_SIZE} /> },
      {
        title: "Oracle",
        id: "oracle",
        icon: <SiOracle fontSize={ICON_SIZE} />,
      },
      {
        title: "Hubspot",
        id: "hubspot",
        icon: <SiHubspot fontSize={ICON_SIZE} />,
      },
    ],
  },
];

const SolutionsPopover = ({ onLinkClick }) => {
  return (
    <Card raised sx={{ width: "100%" }}>
      <CardContent sx={{ px: 10, py: 5 }}>
        <Stack direction="row" gap={1}>
          {SOLUTIONSSECTION.map(({ title, icon, links }, idx) => {
            return (
              <Stack direction="column" key={title}>
                <Stack direction="row" alignItems="flex-start" gap={1}>
                  <img
                    src={`/images/headerpopover/solutions/${icon}`}
                    alt="heading"
                  />
                  <Typography
                    variant="subtitle"
                    sx={{
                      fontWeight: 700,
                      verticalAlign: "middle",
                      color: Colors.airaPrimary,
                      mb: 1,
                    }}
                  >
                    {title}
                  </Typography>
                </Stack>
                <List>
                  {links.map(({ title, id, icon }) => {
                    return (
                      <ESListButton
                        disableRipple
                        key={id}
                        component={LinkBehavior}
                        to={id}
                        onClick={onLinkClick}
                      >
                        <ListItemText disableTypography>
                          <Typography variant="subtitle2">{title}</Typography>
                        </ListItemText>
                      </ESListButton>
                    );
                  })}
                </List>
              </Stack>
            );
          })}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default SolutionsPopover;
