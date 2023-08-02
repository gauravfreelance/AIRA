import React ,{useState}from 'react'
//import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
    Box,
    Card,
    CardContent,
    Divider,
    Grid,
    IconButton,
    Stack,
    Typography,
    Button
  } from "@mui/material";
import Colors from "../../common/Colors";
const SOLUTIONSDATA = [
    {
      title: "Increase revenue capture",
      desc: ["Remove manual touch", "points and enable straight-","through processing"],
      icon: "coint-growth.svg",
      route: "banking",
    },
    {
      title: "Strengthen risk posture",
      desc: ["Improve risk profiles and", "optimize existing controls"],
      icon: "shield-checkmark-read.svg",
      route: "insurance",
    },
    {
      title: "Raise NPS scores",
      desc: ["Elevate customer","engagement with better","journeys and user experience"],
      icon: "smiley-face-message.svg",
      route: "healthcare",
    },
    {
      title: "Lower operational costs",
      desc: ["Streamline customer","experience across different","channels"],
      icon: "Arrow.svg",
      route: "telecom",
    },
]
const ESCard = (props) => {
    const { title, desc, icon, onCardClick } = props;
    return (
      <Card
        onClick={onCardClick}
        sx={{
          backgroundColor: Colors.airaPrimary,
          height:"14.125rem",
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
        <CardContent sx={{display:"flex",
          flexDirection:"column",
          alignItems:"center",}}>
          <img
            src={`/images/solution/${icon}`}
            alt=""
            style={{
              height: "56px",
              width: "56px",
            }}
          />
          <Typography variant="body1" sx={{color:"#fff",mt:1,fontWeight: 700,fontSize:"1.125rem",lineHeight:"normal",fontStyle:"normal",fontFamily: "Montserrat",textAlign:"center"}} >
            {title}
          </Typography>
          {desc.map((item)=>(
            <Typography variant="body1" sx={{color:"#fff",fontWeight: 400,fontSize:"1.125rem",lineHeight:"normal",fontStyle:"normal",fontFamily: "Montserrat",textAlign:"center"}}>{item}</Typography>
          ))}
          
          
          
        
        </CardContent>
      </Card>
    );
  };


const SolutionCard = () => {
    const [selectedSolutions, setSelectedSolutions] = useState({});
  return (
    <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          mt:3
        }}
      >
    {/* <Grid
    item
    xs={12}
    md={6}
    lg={3}

    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      flexGrow: 1,
    }}
  > */}
      {/* <Stack sx={{ my: 10 }}>
<Grid container gap={2} sx={{ p: 2, pl: 0 }}>     */}
        {SOLUTIONSDATA.map((item, idx) => {
          return (
            <Grid item xs={12} md={3} lg={3} key={idx} sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "space-between",
                justifyContent: "center",
                
              }}>
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
      {/* </Grid> 
       </Stack>
     </Grid>*/}
      </Grid>
  )
}

export default SolutionCard