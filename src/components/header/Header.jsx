import styled from "@emotion/styled";
import { Avatar, CardHeader, Menu, MenuItem, Stack,Box } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import _ from "lodash";
import * as React from "react";
import { useState } from "react";
import { Link, Link as RRLink, useLocation,useNavigate } from "react-router-dom";
import AIRALOGO from "../../assets/airalogo.svg";
import PersonIcon from "../../assets/navicons/person.svg";
import SearchIcon from "../../assets/navicons/search.svg";
import SupportIcon from "../../assets/navicons/support.svg";
import WorldIcon from "../../assets/navicons/world.svg";
import Colors from "../../common/Colors";
import CompanyPopover from "../../views/headerpopovers/CompanyPopover";
import PlatformPopover from "../../views/headerpopovers/PlatformPopover";
import ResourcesPopover from "../../views/headerpopovers/ResourcesPopover";
import SolutionsPopover from "../../views/headerpopovers/SolutionsPopover";
import TryDialog from "../../views/tryairadialog/TryDialog";
import RoundedButton from "../button/RoundedButton";
import ESPopOver from "../floatingComponent/ESPopOver";
import FlagFrance from "../../assets/footericons/flagFrance.png";
import FlagIndia from "../../assets/footericons/flagIndia.png";
import FlagSaudi from "../../assets/footericons/flagSaudi.png";
import { useTranslation } from "react-i18next";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
//import { useTheme } from '../../components/ThemeContext/ThemeContext';
//import { Nav } from "reactstrap";
const LANGUAGE = [
  {
    id: "fr",
    title: "French",
    icon: FlagFrance,
  },
  {
    id: "ar",
    title: "Arabic",
    icon: FlagSaudi,
  },
  {
    id: "en",
    title: "English",
    icon: FlagIndia,
  },
];

export const LinkBehavior = React.forwardRef((props, ref) => {
  return <RRLink to={`/${props.id}`} ref={ref} {...props} />;
});

export const navPages = [
  // { name: "Home", id: "/" },
  //{ name: "Hyperautomation", id: "/hyperautomation" },
  //{ name: "Resources", id: "/resources" },
  { lid: "platform", name: "Platform", id: "/platform" },
  { lid: "solutions", name: "Solutions", id: "/solutions" },
  { lid: "resources", name: "Resources", id: "/resources" },
  { lid: "company", name: "Company", id: "/company" },
  // { name: "About Us", id: "/aboutus" },
  // { name: "Contact Us", id: "/contactus" },
];

const RenderPopOverView = ({ id, onLinkClick }) => {
  switch (id) {
    case "/platform":
      return <PlatformPopover onLinkClick={onLinkClick} />;
    case "/solutions":
      return <SolutionsPopover onLinkClick={onLinkClick} />;
    case "/resources":
      return <ResourcesPopover onLinkClick={onLinkClick} />;
    case "/company":
      return <CompanyPopover onLinkClick={onLinkClick} />;
    default:
      return (
        <div>
          <h4>You found a bug</h4>
        </div>
      );
  }
};

const ESButton = styled(Button)`
  font-family: "Montserrat";
  font-weight: 600;
  line-height: 24px;
  font-size: 14px;
`;
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Header = () => {
  const location = useLocation();
  const [openTryAIRADialog, setOpenTryAIRADialog] = useState(false);
  const [languageAnchorEl, setLanguageAnchorEl] = React.useState(null);
  const openLanguageMenu = Boolean(languageAnchorEl);
  const { t,i18n  } = useTranslation();
  const [icon,setIcon]=useState(false)
  const [icon1,setIcon1]=useState(false)
  const [icon2,setIcon2]=useState(false)
  const [icon3,setIcon3]=useState(false)
  // const { darkMode, setDarkMode } = useTheme();

  // const handleToggle = () => {
  //   setDarkMode(!darkMode);
  // };


  const handleLanguageClick = (event) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setLanguageAnchorEl(null);
  };

  const handleLanguageChange = (e, id) => {
    //document.dir = _.isEqual(id, "ar") ? "rtl" : "ltr";
    i18n.changeLanguage(id);
    handleLanguageClose();
  };

  // const DarkMode = () => {
  //   document.querySelector(".app")?.classList.toggle('dark-mode');
  // }

  const [toHideMegaMenu] = useState(["/aboutus", "/contactus"]);
  return (
    <AppBar
      position="static"
      elevation={1}
      sx={{
        backgroundColor: "#fff",
        pt: 1,
        px: 5,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Stack direction="row" gap={3}>
            <Link to="/">
              <img src={AIRALOGO} alt="AIRA Logo" />
            </Link>
            <Stack
              direction="row"
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            >
              {navPages.map((page) => (
                <ESPopOver
                  key={page.id}
                  openOnHover={!toHideMegaMenu.includes(page.id)}
                  containerPlacement="bottom"
                  onRightClickCallback={() => {
                    // selectNode({
                    //   id: nodeId,
                    // });
                  }}
                  render={({ close, labelId, descriptionId }) => {
                    return (
                      <RenderPopOverView id={page.id} onLinkClick={close} />
                    );
                  }}
                  placement="left"
                >
                  <ESButton
                    component={LinkBehavior}
                    to={page.id}
                    disableRipple
                    sx={{
                      display: "block",
                      borderBottom: `3px solid ${
                        _.isEqual(location.pathname, `${page.id}`)
                          ? Colors.airaPrimary
                          : "transparent"
                      }`,
                      color: "#000",
                      "&:hover": {
                        borderBottom: `3px solid ${Colors.airaPrimary}`,
                        background: "transparent",
                      },
                    }}
                  >
                    {t(page.lid)}
                  </ESButton>
                </ESPopOver>
              ))}
            </Stack>
          </Stack>
          <Stack direction="row" gap={4}>
            <Stack direction="row">
            {/* <div className="dropdown  d-flex">
                <Nav.Link  >
                  <span className="dark-layout"><i className="fe fe-moon"></i></span>
                  <span className="light-layout"><i className="fe fe-sun"></i></span>
                </Nav.Link>
              </div> */}
              {/* <label>
      <input type="checkbox" checked={darkMode} onChange={handleToggle} />
      Dark Mode
    </label> */}
              <IconButton sx={{ m: 0 }} onClick={() => {
                  setIcon(true);
                }} size="small">
                <img src={SearchIcon} alt="Search" />
              </IconButton>
              <IconButton sx={{ m: 0 }} onClick={() => {}} size="small">
                <img src={SupportIcon} alt="Support" />
              </IconButton>
              <IconButton sx={{ m: 0 }} onClick={() => {}} size="small">
                <Link >
                <img src={PersonIcon} alt="Person" />
                </Link>
              </IconButton>
              <div>
                <IconButton
                  sx={{ m: 0 }}
                  onClick={handleLanguageClick}
                  size="small"
                >
                  <img src={WorldIcon} alt="World" />
                </IconButton>
                <Menu
                  anchorEl={languageAnchorEl}
                  open={openLanguageMenu}
                  onClose={handleLanguageClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  {LANGUAGE.map((langItem, langIdx) => {
                    const { title, icon, id } = langItem;
                    return (
                      <MenuItem
                        dense
                        onClick={(e) => {
                          handleLanguageChange(e, id);
                        }}
                        key={langItem.id}
                        sx={{ p: 0 }}
                      >
                        <CardHeader
                          avatar={
                            <Avatar
                              src={icon}
                              alt={title}
                              sx={{ width: 25, height: 25 }}
                            />
                          }
                          title={title}
                        />
                      </MenuItem>
                    );
                  })}
                </Menu>
              </div>
            </Stack>
            <div style={{ alignSelf: "center" }}>
              <RoundedButton
                label="Try AIRA Free"
                onClick={() => {
                  setOpenTryAIRADialog(true);
                }}
              />
            </div>
          </Stack>
        </Toolbar>
      </Container>
      <TryDialog
        open={openTryAIRADialog}
        handleClose={() => {
          setOpenTryAIRADialog(false);
        }}
      />
      
      <Dialog
        open={icon}
        TransitionComponent={Transition}
        keepMounted
        fullWidth
        maxWidth="sm"
        onClose={()=> setIcon(false)}
        aria-describedby="try-aira"
        PaperProps={{
          style: { borderRadius: "30px" },
        }}
      >
        <DialogContent sx={{ borderRadius: "20px" }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ mb: 4 }}
          >
            <Box>
            <img src={SearchIcon} alt="Search" />
            </Box>
            <IconButton onClick={()=> setIcon(false)}>
              <CloseIcon />
            </IconButton>
          </Stack>
          </DialogContent>
          </Dialog>
    </AppBar>
  );
};
export default Header;
