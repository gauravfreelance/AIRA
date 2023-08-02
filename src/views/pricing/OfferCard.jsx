import React from 'react'
import { Box, Grid, Stack, Typography,Paper, } from "@mui/material";
import { Link } from 'react-router-dom';
const OfferCard = () => {
  return (
    <Box sx={{width:"100%",display:"flex",gap:"25px",justifyContent:"center"}}>
        <Box sx={{width:"45%",padding:"1.5rem",display:"flex",background:"#F1F0FF",borderRadius:"1rem",gap:"5px"}}>
            <Box>
                <img src="/images/pricing/person-graduate.svg"/>
            </Box>
            <Stack direction="column" alignItems="flex-start">
                <Typography variant='p' sx={{color:"#6755DF",fontWeight: 600,fontSize:"1.125rem",lineHeight:"1.5rem",fontStyle:"normal",fontFamily: "Montserrat"}}>Academy</Typography>
                <Typography variant='p' sx={{color:"#787878",fontWeight: 600,fontSize:"0.875rem",lineHeight:"1.5rem",fontStyle:"normal",fontFamily: "Montserrat"}}>Learn today the skills of the future with free</Typography>
                <Typography variant='p' sx={{color:"#787878",fontWeight: 600,fontSize:"0.875rem",lineHeight:"1.5rem",fontStyle:"normal",fontFamily: "Montserrat"}}>online RPA training.</Typography>
                <Box>
                <Link to="#" style={{textDecoration: 'none' ,color:"#FFAF00",fontWeight: 600,fontSize:"0.875rem",lineHeight:"1.5rem",fontStyle:"normal",fontFamily: "Montserrat",}}>Start learning</Link>
                <img sx={{color:"#FFAF00"}} src="/images/pricing/Arrow.svg"/>
            </Box>
            </Stack>
            
        </Box>
        <Box sx={{width:"45%",padding:"1.5rem",display:"flex",background:"#F1F0FF",borderRadius:"1rem",gap:"5px"}}>
            <Box>
                <img src="/images/pricing/travel.svg"/>
            </Box>
            <Stack direction="column" alignItems="flex-start">
                <Typography variant='p' sx={{color:"#6755DF",fontWeight: 600,fontSize:"1.125rem",lineHeight:"1.5rem",fontStyle:"normal",fontFamily: "Montserrat"}}>Academy</Typography>
                <Typography variant='p' sx={{color:"#787878",fontWeight: 600,fontSize:"0.875rem",lineHeight:"1.5rem",fontStyle:"normal",fontFamily: "Montserrat"}}>Learn today the skills of the future with free</Typography>
                <Typography variant='p' sx={{color:"#787878",fontWeight: 600,fontSize:"0.875rem",lineHeight:"1.5rem",fontStyle:"normal",fontFamily: "Montserrat"}}>online RPA training.</Typography>
                <Box>
                <Link to="#" style={{textDecoration: 'none' ,color:"#FFAF00",fontWeight: 600,fontSize:"0.875rem",lineHeight:"1.5rem",fontStyle:"normal",fontFamily: "Montserrat",}}>Explore Marketplace</Link>
                <img sx={{color:"#FFAF00"}} src="/images/pricing/Arrow.svg"/>
            </Box>
            </Stack>
            
        </Box>
    </Box>
  )
}

export default OfferCard