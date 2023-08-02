import React from 'react'
import { Box, Grid, Stack, Typography,Paper, } from "@mui/material";
import Offer from '/images/pricing/offer.svg'
import Offer1 from '/images/pricing/offer1.svg'
import {TableContainer,
    Table,
    TableBody,
    TableHead,
    TableRow,
    TableCell
  } from "@mui/material";
import { BsBox2 } from 'react-icons/bs';
const OfferData=[
    {
        offer:"Free",
        product:"Cloud"
    },
    {
        offer:"Pro",
        product:"Cloud"
    },{
        offer:"Pro Trial",
        product:"Cloud"
    },{
        offer:"Entreprice",
        product:"Cloud on-Premises"
    }
]

const Offers=[
    {
        text1:"DISCOVER AUTOMATION OPPORTUNITIES ",
        text2:"POWERED BY AI AND YOUR PEOPLE",
        title:"Automation Hub",
        icon1:"images/pricing/offer1.svg",
        icon2:"images/pricing/offer1.svg",
        icon3:"images/pricing/offer.svg",
        icon4:"images/pricing/offer.svg",
    },
    {
        text1:"",
        text2:"",
        title:"Task Capture",
        icon1:"images/pricing/offer1.svg",
        icon2:"images/pricing/offer1.svg",
        icon3:"images/pricing/offer.svg",
        icon4:"images/pricing/offer.svg",
    },
    {
        text1:"",
        text2:"",
        title:"Process mining",
        icon1:"images/pricing/offer1.svg",
        icon2:"images/pricing/offer1.svg",
        icon3:"images/pricing/offer.svg",
        icon4:"images/pricing/offer.svg",
    },
    {
        text1:"",
        text2:"",
        title:"Task mining",
        icon1:"images/pricing/offer1.svg",
        icon2:"images/pricing/offer1.svg",
        icon3:"images/pricing/offer.svg",
        icon4:"images/pricing/offer.svg",
    },
    {
        text1:"BUILD AND TEST AUTOMATION QUICKLY, FROM",
        text2:"THE SIMPLE TO THE ADVANCED",
        title:"Automation Express",
        icon1:"images/pricing/offer1.svg",
        icon2:"images/pricing/offer1.svg",
        icon3:"images/pricing/offer.svg",
        icon4:"images/pricing/offer.svg",
    },
    {
        text1:"",
        text2:"",
        title:"Studio",
        icon1:"images/pricing/offer1.svg",
        icon2:"images/pricing/offer1.svg",
        icon3:"images/pricing/offer.svg",
        icon4:"images/pricing/offer.svg",
    },
    {
        text1:"",
        text2:"",
        title:"autmation ops",
        icon1:"images/pricing/offer1.svg",
        icon2:"images/pricing/offer1.svg",
        icon3:"images/pricing/offer.svg",
        icon4:"images/pricing/offer.svg",
    },
    {
        text1:"",
        text2:"",
        title:"Documentaton  Understanding",
        icon1:"images/pricing/offer1.svg",
        icon2:"images/pricing/offer1.svg",
        icon3:"images/pricing/offer.svg",
        icon4:"images/pricing/offer.svg",
    },
    {
        text1:"",
        text2:"",
        title:"Integration Service",
        icon1:"images/pricing/offer1.svg",
        icon2:"images/pricing/offer1.svg",
        icon3:"images/pricing/offer.svg",
        icon4:"images/pricing/offer.svg",
    },
    {
        text1:"MANAGE, DEPLOY, AND OPTIMIZE AUTOMATION",
        text2:"AT ENTERPRISE SCALE",
        title:"Automation Express",
        icon1:"images/pricing/offer1.svg",
        icon2:"images/pricing/offer1.svg",
        icon3:"images/pricing/offer.svg",
        icon4:"images/pricing/offer.svg",
    },
    {
        text1:"",
        text2:"",
        title:"Orchestrator",
        icon1:"images/pricing/offer1.svg",
        icon2:"images/pricing/offer1.svg",
        icon3:"images/pricing/offer.svg",
        icon4:"images/pricing/offer.svg",
    },
    {
        text1:"",
        text2:"",
        title:"Data Service",
        icon1:"images/pricing/offer1.svg",
        icon2:"images/pricing/offer1.svg",
        icon3:"images/pricing/offer.svg",
        icon4:"images/pricing/offer.svg",
    },
    {
        text1:"",
        text2:"",
        title:"Test Manager",
        icon1:"images/pricing/offer1.svg",
        icon2:"images/pricing/offer1.svg",
        icon3:"images/pricing/offer.svg",
        icon4:"images/pricing/offer.svg",
    },
    {
        text1:"",
        text2:"",
        title:"A1 Center",
        icon1:"images/pricing/offer1.svg",
        icon2:"images/pricing/offer1.svg",
        icon3:"images/pricing/offer.svg",
        icon4:"images/pricing/offer.svg",
    },
    {
        text1:"",
        text2:"",
        title:"Insights",
        icon1:"images/pricing/offer1.svg",
        icon2:"images/pricing/offer1.svg",
        icon3:"images/pricing/offer.svg",
        icon4:"images/pricing/offer.svg",
    },
    {
        text1:"RUN AUTOMATIONS THROUGH ROBOTS THAT",
        text2:" WORK WITH YOUR APPLICATIONS AND DATA",
        title:"Automation Cloud Robots",
        icon1:"images/pricing/offer1.svg",
        icon2:"images/pricing/offer1.svg",
        icon3:"images/pricing/offer.svg",
        icon4:"images/pricing/offer.svg",
    },
    {
        text1:"",
        text2:"",
        title:"Insights",
        icon1:"images/pricing/offer1.svg",
        icon2:"images/pricing/offer1.svg",
        icon3:"images/pricing/offer.svg",
        icon4:"images/pricing/offer.svg",
    },
    {
        text1:"",
        text2:"",
        title:"Unattended Robots",
        icon1:"images/pricing/offer1.svg",
        icon2:"images/pricing/offer1.svg",
        icon3:"images/pricing/offer.svg",
        icon4:"images/pricing/offer.svg",
    },
    {
        text1:"",
        text2:"",
        title:"Attended Robots",
        icon1:"images/pricing/offer1.svg",
        icon2:"images/pricing/offer1.svg",
        icon3:"images/pricing/offer.svg",
        icon4:"images/pricing/offer.svg",
    },
    {
        text1:"",
        text2:"",
        title:"Test Robots",
        icon1:"images/pricing/offer1.svg",
        icon2:"images/pricing/offer1.svg",
        icon3:"images/pricing/offer.svg",
        icon4:"images/pricing/offer.svg",
    },
    {
        text1:"ENGAGE PEOPLE AND ROBOTS AS ONE TEAM",
        text2:"SEAMLESS PROCESS COLLABORATION",
        title:"Apps",
        icon1:"images/pricing/offer1.svg",
        icon2:"images/pricing/offer1.svg",
        icon3:"images/pricing/offer.svg",
        icon4:"images/pricing/offer.svg",
    },
    {
        text1:"",
        text2:"",
        title:"Action Center",
        icon1:"images/pricing/offer1.svg",
        icon2:"images/pricing/offer1.svg",
        icon3:"images/pricing/offer.svg",
        icon4:"images/pricing/offer.svg",
    },
    {
        text1:"ADMINISTRATION & SUPPORT",
        text2:"",
        title:"Tenants",
        icon1:"images/pricing/offer1.svg",
        icon2:"images/pricing/offer1.svg",
        icon3:"images/pricing/offer.svg",
        icon4:"images/pricing/offer.svg",
    },
    {
        text1:"",
        text2:"",
        title:"Standard Support",
        title1:"Additional Support options are availabe",
        icon1:"images/pricing/offer1.svg",
        icon2:"images/pricing/offer1.svg",
        icon3:"images/pricing/offer.svg",
        icon4:"images/pricing/offer.svg",
    },
    

]
const Offering = () => {
  return (
    <Box sx={{backgroundColor: "#fff", padding:"1.5rem 4rem", borderRadius: 4 }}>
        <Stack direction="column" alignItems="flex-end"  sx={{width:"100%",}}>
            <Box  sx={{width:"65%",display:"flex",flexDirection:"column",gap:"20px", background:"#F1F0FF"}}>
                <Stack direction="row" alignItems="center" justifyContent="space-around" sx={{background:"#F1F0FF"}}>
                    
                {OfferData.map((item)=>(
                            <Typography variant='p' sx={{color:"#6755DF",fontWeight: 600,fontSize:"1rem",lineHeight:"1.75rem",fontStyle:"normal",fontFamily: "Montserrat"}}>{item.offer}</Typography>
                ))}  
                    </Stack>
                    <Stack direction="row" alignItems="center" justifyContent="space-around" sx={{background:"#F1F0FF"}}>
                    {OfferData.map((item)=>(
                        <>
                            {item.product.split(" ").length<2?
                            <Typography variant='p' sx={{color:"#000",fontWeight: 600,fontSize:"1rem",lineHeight:"1.75rem",fontStyle:"normal",fontFamily: "Montserrat",textTransform:"uppercase"}}>{item.product}</Typography>:
                            (
                                <Box sx={{display:"flex", flexDirection:"column",alignItems:"center",}}>
                                    <Typography variant='p' sx={{color:"#000",fontWeight: 600,fontSize:"1rem",lineHeight:"1.75rem",fontStyle:"normal",fontFamily: "Montserrat",textTransform:"uppercase"}}>{item.product.split(" ")[0]}</Typography>
                                    <Typography variant='p' sx={{color:"#000",fontWeight: 600,fontSize:"1rem",lineHeight:"1.75rem",fontStyle:"normal",fontFamily: "Montserrat",textTransform:"uppercase"}}>{item.product.split(" ")[1]}</Typography>
                                </Box>
                                
                                
                            )}
                        </>
                           
                        ))}
                    </Stack>
                
            </Box>
        </Stack>
        {Offers.map((item)=>(
            <>
        <Stack>
            {item.text1 && (<Typography variant='p' sx={{color:"#787878",fontWeight: 600,fontSize:"0.75rem",lineHeight:"1.125rem",fontStyle:"normal",fontFamily: "Montserrat"}}>{item.text1}</Typography>)}
        
            {item.text2 && (<Typography variant='p' sx={{color:"#787878",fontWeight: 600,fontSize:"0.75rem",lineHeight:"1.125rem",fontStyle:"normal",fontFamily: "Montserrat"}}>{item.text2}</Typography>)}
        </Stack>
        <Stack justifyContent="space-between" direction="row" sx={{borderBottom:"1px solid rgba(103, 132, 159, 0.32)",padding:"8px 0px"}}>
            
                
            <Box sx={{width:"35%",display:"flex",flexDirection:"column"}}>
                <Typography variant='p' sx={{color:"#000",fontWeight: 600,fontSize:"0.75rem",lineHeight:"1.125rem",fontStyle:"normal",fontFamily: "Montserrat"}}>{item.title}</Typography>
                {item.title1 && (<Typography variant='p' sx={{color:"#A1A1A1",fontWeight: 600,fontSize:"0.75rem",lineHeight:"1.125rem",fontStyle:"normal",fontFamily: "Montserrat"}}>{item.title1}</Typography>)}
            </Box>
            <Box sx={{width:"70%",display:"flex",justifyContent:"space-around"}}>
                <Box>
                    <img src={item.icon1}/>
                </Box>
                <Box>
                    <img src={item.icon2}/>
                </Box>
                <Box>
                    <img src={item.icon3}/>
                </Box>
                <Box>
                    <img src={item.icon4}/>
                </Box>
                
                
            </Box>
            
            
        </Stack>
        </>
            ))}
        <Stack justifyContent="space-between" direction="row">
        
        </Stack>
    </Box>
  )
}

export default Offering