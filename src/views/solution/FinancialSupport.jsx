import React from 'react'
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Stack, Typography,Button } from "@mui/material";
const FinancialData=[
  {
    id:"1",
    name:"McKinsey",
    desc1:"of banking processes can to automated",
    //desc2:"be automated"
  },
  {
    id:"2",
    name:"Everest Group",
    desc1:"of surveyed enterprises have >$1 million cost savings from automation",
    //desc2:"be automated"
  },
  {
    id:"3",
    name:"McKinsey",
    desc1:"of financial services firms have embedded AI+RPA in their operations",
    //desc2:"be automated"
  }
]
const FinancialSupport = () => {
  return (
    <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"2rem",py:"5.44rem"}}>
      {FinancialData.map((item)=>(
          <Box sx={{width:"20.0875rem",height:"21.875rem",padding:"1.5rem 2rem",borderRadius:"1.5rem",display:"flex",flexDirection:"column",background:"#fff"}}>
          <Typography variant='p' sx={{color:"#000",paddingBottom:"13rem",fontWeight: 400,fontSize:"1.125rem",lineHeight:"normal",fontStyle:"normal",fontFamily: "Montserrat",textAlign:"center"}}>{item.name}</Typography>
          <Typography variant='p' sx={{color:"#000",fontWeight: 400,fontSize:"1.125rem",lineHeight:"normal",fontStyle:"normal",fontFamily: "Montserrat",textAlign:"center",mb:"auto"}}>{item.desc1}</Typography>
          <Box sx={{display:"flex",flexDirection:"column",justifyContent:"flex-end"}}>
          <Button variant="text" sx={{color:"#FFAF00",mb:2}} endIcon={<ArrowForwardIcon /> }>
            Register Now
          </Button>
          </Box>
          {/* <Typography variant='p' sx={{color:"#6755DF",fontWeight: 400,fontSize:"1.125rem",lineHeight:"normal",fontStyle:"normal",fontFamily: "Montserrat",textAlign:"center"}}>be automated</Typography> */}
      </Box>
      ))}
        
    </Box>
  )
}

export default FinancialSupport