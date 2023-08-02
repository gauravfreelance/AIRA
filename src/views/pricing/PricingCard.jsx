import React from 'react'
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Grid, Stack, Typography ,Button} from "@mui/material";
import Colors from "../../common/Colors";
const CSRAIRA_ITEM = [
    {
      id: 1,
      title: "Free",
      desc: "Access to personal use of development and attended capabilities for free.",
      sub_desc:[
        "Unlimited individual automation runs",
      "Tools for designing individual automations",
      "Prebuilt, best-in-class integrations with many popular products"
    ],
    btn_name:"Start Free",
    top:"24.5"
    },
    {
      id: 2,
      title: "Pro",
      desc: "Pre-packaged plans make it easy for smaller departments or businesses to start automating, looking for multiple tenants and dedicated support.",
      sub_desc:[
        "Robots to enable remote, on-demand execution",
        "Advanced automation design tools with user governance",
        "Additional products to engage people and robots for seamless process collaboration",
        "UiPath Standard Support"
      ],
      btn_name:"Try Then Buy",
      top:"14"
    },
    {
      id: 3,
      title: "Entreprise",
      desc: "Flexible service offerings for companies seeking a comprehensive platform that fits their needs. This plan offers the best UiPath solutions—whether in the UiPath cloud, your dedicated cloud, or on-premises, with support packages.",
      sub_desc:[
        "Execute automated tests and RPA workflows with Test Robots",
      "100 Automation Express licenses free Additional products—process discovery, test management, AI, analytics for speed-to-value",
      " Flexible multi-region deployment",
      "Advanced authentication management"
    ],
    btn_name:"Contact Sales",
    top:"5"
    },
  ];
const ESCircle = (props) => {
    const { id, title, desc,sub_desc,btn_name,top } = props;
    return (
      <Box sx={{ backgroundColor: "#fff", padding:"1.5rem 4rem", borderRadius: 4 }}>
        <Stack direction="column" alignItems="center" justifyContent="center">
          
            <Typography
              variant="h4"
              sx={{
                verticalAlign: "middle",
                fontWeight: 600,
                color: "#6755DF",
              }}
            >
              {title}
            </Typography>
          
          <Typography
            variant="body1"
            sx={{ color: "#000", fontWeight: 500,fontSize:"1rem",lineHeight:"2rem",fontStyle:"normal", fontFamily: "Montserrat", mb: 2 }}
          >
            {desc}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ color: "#200E32", pb: 2, lineHeight: 1.8 }}
          >
            {sub_desc.map((item)=>(
                <li sx={{color: "#000", fontWeight: 500,fontSize:"1rem",lineHeight:"2rem",fontStyle:"normal",fontFamily: "Montserrat",}}>{item}</li>
            ))}
          </Typography>
          <Box sx={{display:"flex",justifyContent:"center",alignItems:"flex-end",height:"100%" ,marginTop:`${top}rem`}}>
            <Button  endIcon={<ArrowForwardIcon />} sx={{color:"#fff",display:"flex",justifyContent:"center",alignItems:"center",padding:"0.5rem 1rem 0.5 2rem", gap:"0.5rem",borderRadius:"0.5rem",background:"#6755DF"}}>{btn_name} </Button>
          </Box>
          
          
        </Stack>
      </Box>
    );
  };
const PricingCard = () => {
  return (
    <Box sx={{ backgroundColor: "#F8F9FB", color: "#200E32" }}>
    <Grid container spacing={2} sx={{ my: 3, display: "flex" }}>
        {CSRAIRA_ITEM.map((item) => {
          return (
            <Grid item xs={12} md={4} key={item.id} sx={{ display: "flex" }}>
              <ESCircle {...item} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  )
}

export default PricingCard