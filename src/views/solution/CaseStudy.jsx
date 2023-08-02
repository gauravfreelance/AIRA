import React from 'react'
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Stack, Typography,Button} from "@mui/material";
const CaseData=[{
    name:"CASE STUDY",
    title:"A Complete Guide to UiPath—made in collaboration with ERP Today",
    desc:"Automation can remove the manual tedious tasks that slow us down unlocking greater innovative potential. Check out “A Complete Guide to UiPath” to see how our products are enabli..."
},
{
    name:"CASE STUDY",
    title:"A Complete Guide to UiPath—made in collaboration with ERP Today",
    desc:"Automation can remove the manual tedious tasks that slow us down unlocking greater innovative potential. Check out “A Complete Guide to UiPath” to see how our products are enabli..."
},
{
    name:"CASE STUDY",
    title:"A Complete Guide to UiPath—made in collaboration with ERP Today",
    desc:"Automation can remove the manual tedious tasks that slow us down unlocking greater innovative potential. Check out “A Complete Guide to UiPath” to see how our products are enabli..."
},
]
const CaseStudy = (props) => {
    //const {name,title,desc}=props
  return (
    <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",}}>
      {CaseData.map((item)=>(
          <Box sx={{display:"flex",flexDirection:"column",marginTop:-10,marginLeft:"1rem",marginRight:"1rem"}}>
            <Box sx={{width:"100%",height:"14rem",background:"#D9D9D9"}}></Box>
            <Box sx={{padding:"1rem 1.5rem",display:"flex",flexDirection:"column",background:"#fff",gap:1}}>
          <Typography variant='p' sx={{color:"#6755DF",fontWeight: 600,fontSize:"0.875rem",lineHeight:"normal",fontStyle:"normal",fontFamily: "Montserrat",}}>{item.name}</Typography>
          
            <Typography variant='body1' sx={{color:"#6755DF",fontWeight: 500,fontSize:"1.25rem",lineHeight:"1.75rem",fontStyle:"normal",fontFamily: "Montserrat",}}>{item.title}</Typography>
          
          
          {/* <Typography variant='p' sx={{color:"#6755DF",fontWeight: 400,fontSize:"1.125rem",lineHeight:"normal",fontStyle:"normal",fontFamily: "Montserrat",textAlign:"center"}}>be automated</Typography> */}
          
            <Typography variant='body2' sx={{color:"#000",fontWeight: 500,fontSize:"1rem",lineHeight:"1.5rem",fontStyle:"normal",fontFamily: "Montserrat",}}>{item.desc}</Typography>
          <Box>
          <Button variant="text" sx={{color:"#FFAF00"}} endIcon={<ArrowForwardIcon />}>
            Register Now
          </Button>
          </Box>
        </Box>
        
      </Box>
      ))}
        
    </Box>
  )
}

export default CaseStudy