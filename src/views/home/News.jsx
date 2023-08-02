import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import Blog from '../blogs/Blog'
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import {
    Container,
    styled,
    Stack,
    Box,
    Typography,
    Chip,
  Divider,
  Grid,
  Dialog, DialogContent ,
    Button,
    InputAdornment,
    TableCell,
    Table,
    TableBody,
    TableHead,
    TableRow,
    Card, CardMedia, CardContent,
} from "@mui/material";
import Colors from "../../common/Colors";
//import { CloseButton } from 'reactstrap';

const IMGBASEURL = "/images/blogs";
const REFERENCES = [
    { id: "amedisys", image: "video1.mp3" },
    { id: "buckeye", image: "video1.mp3" },
    { id: "commonspirit", image: "video1.mp3" },
];
const NewsData = [
    {
      id: 1,
      image: "blogs1.png",
      video:"video.mp4",
      title:
        "A Quick Guide To Realizing The Full Potential Of Business Intelligence And Analytics",
      date: "June 8,2022",
      duration: "5 min",
      tag: "Automation",
    },
    {
      id: 2,
      image: "blogs2.png",
      video:"video.mp4",
      title: "Critical Success Factors For Intelligent Automation Transformation",
      date: "June 8,2022",
      duration: "5 min",
      tag: "Automation",
    },
    {
      id: 3,
      image: "blogs3.png",
      video:"video.mp4",
      title: "How to Create a Successful RPA Project Funnel?",
      date: "June 8,2022",
      duration: "5 min",
      tag: "RPA",
    },
    
  ];

  const BlogCard = (props) => {
    const { image, title, date, duration, tag } = props;
    const handlePlay = () => {
        props.setShowPlayer(true);
    };
    return (
      <Card
        raised
        sx={{
           
          backgroundImage: `url(${IMGBASEURL}/${image})`,
          cursor: "pointer",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "15px",
          backgroundSize: "400px 400px",
          height: "400px",
          
        }}
        onClick={handlePlay}
      >
        <CardContent
          sx={{
            position: "relative",
            height: "400px",
          }}
        >
          <Stack
            direction="column"
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              p: 2,
              color: "#fff",
            }}
            alignSelf="flex-end"
          >
            <Typography variant="body1" sx={{ fontWeight: 600, color: "#fff" }}>
              {title}
            </Typography>
            <Divider sx={{ backgroundColor: "#fff", my: 1 }} />
  
            <Typography variant="body2" sx={{ color: "#fff" }}>
              {date}
            </Typography>
  
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ mt: 1 }}
            >
              <Chip label={tag} sx={{ backgroundColor: "#fff" }} />
              <Stack direction="row" gap={2}>
                <Typography variant="subtitle2" sx={{ color: "#fff" }}>
                  {duration}
                </Typography>
                <img src={`${IMGBASEURL}/time.svg`} alt="timesvg" />
              </Stack>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    );
  };

const DailogContainer=({blogItem})=>{
    const [open, setOpen] = useState(false);
    //const [close, setClose] = useState(false);
    
    const handleOpen = () => { 
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      return(
        <Grid item xs={12} md={4} key={blogItem.id} onClick={handleOpen} >
        <BlogCard {...blogItem}  />
        <Dialog open={open} onClose={handleClose}  maxWidth="md">
        
        <DialogContent>
        <button className="close-button" style={{top:20, right:20}} onClick={handleClose}>
            <CloseIcon sx={{ color: "#6C7C93" }} />
        </button>  
        <ReactPlayer
            url={`/video/${blogItem.video}`}
            className="react-player"
            width="100%"
            height="100%"
            controls
        />
        
        </DialogContent>
      </Dialog></Grid>
      )
  }

const News = () => {
    //const [showPlayer, setShowPlayer] = useState(false);
    // const [open, setOpen] = useState(false);
    // //const [close, setClose] = useState(false);
    // const handlePlay = () => {
    //     setShowPlayer(true);
    // };
    // const handleOpen = () => {
        
    //     setOpen(true);
        
        
    //   };
    
    //   const handleClose = () => {
    //     setOpen(false);
    //   };
    return (
        <Box sx={{ backgroundColor: Colors.steelGrey, py: 5 }}>
            <Stack
                direction="column"
                alignItems="center"
                justifyContent="center"
                gap={2}
            >
                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    News
                </Typography>

            </Stack>

            <Stack
                
                direction="row"
                gap={3}
                sx={{ mt: 5, flex: 1,width:"82%",margin:"0 auto" }}
                alignItems="center"
                justifyContent="center"
            >
                <Grid container spacing={3} >
                {NewsData.map((blogItem) => {
                    return (

                    <>    
                            
                                
        
        {/* <Modal open ={open}>
        <button className="close-button" style={{top:20, right:20}} onClick={handleClose}>
            <CloseIcon sx={{ color: "#6C7C93" }} />
        </button>
        <ReactPlayer
            url={`/video/${blogItem.video}`}
            className="react-player"
            width="100%"
            height="100%"
            controls
        />
        </Modal> */}
        <DailogContainer  blogItem={blogItem}/>
      
      
      
                            
                               {/* <Card key={blogItem.id} sx={{ width: "25%" }}>
                                <ReactPlayer
                                    url={`/video/${blogItem.video}`}
                                    className="react-player"
                                    width="100%"
                                    height="100%"
                                    controls
                                />
                                </Card> */}
                            

                        </>
                    );
                })}
                </Grid>
                           
                        
                            
            </Stack>

        </Box>
    )
}

export default News
