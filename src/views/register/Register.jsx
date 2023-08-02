import React from 'react'
//import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { notification } from 'antd';
import Colors from "../../common/Colors";
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Card,
    CardContent,
    FormHelperText,
    Grid,
    Stack,
    TextField,
    Typography,
    IconButton,
    Divider,
    Button,
} from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import axios from 'axios';

const Register = () => {
    const methods = useForm({
        username: "",
        email: "",
        contact_number: "+91",
        location:""
    });
    const navigate = useNavigate();
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = methods;
    const onSubmit = async(data) => {
        
        console.log("data", data);
        
    
    await axios.post('http://182.70.242.120:8083/api/auth/signup', data)
      .then((response) => {
        console.log('Post success:', response);
        navigate('/login');
        notification.success({
            message: 'Bingo!',
            description: 'You have registered successfully!',
            duration: 1,
        });
      })
      .catch((error) => {
        console.error('Error posting data:', error);
        notification.error({
            message: 'Signup Failure',
            description: error,
            duration: 1,
        });
      });
    };
    return (


        <Grid container spacing={2} direction="row" sx={{ my: 20, }}>
            <Grid item xs={12} sm={6} md={6} justifyContent="flex-end"  direction="row">
                {/* <Stack
        sx={{ my: 10 }}
        alignItems="center"
        direction="row"
        justifyContent="center"
      > */}

                <Box
                    sx={{

                        backgroundColor: Colors.airaPrimary,
                        


                        borderRadius: "10px", marginLeft: "35%"
                    }}
                >
                    <div style={{ position: "relative" ,overflow:"hidden"}}>
                    <Stack direction="column" sx={{ paddingBottom: "90%", }}>
                        <Box sx={{p:5}}>
                        <Typography variant='h3' sx={{ fontWeight: "bold",color:"#FFF" }}>Become a</Typography>
                            <Typography variant='h3'sx={{ fontWeight: "bold",color:"#FFAF00" }}>AIRA partner</Typography>
                            <Typography variant='p' sx={{color:"#FFF"}}>Lorem ipsum dolor sit amet, consectetur</Typography>
                            <Typography variant='p' sx={{color:"#FFF"}}>adipiscing elit. Ut et massa mi. Aliquam</Typography>
                            <Typography variant='p' sx={{color:"#FFF"}}>in hendrerit.</Typography>
                        </Box>
                            

                            <div
                                style={{
                                    height: "204px",
                                    width: "40px",
                                    position: "absolute",
                                    transform: "rotate(45deg)",
                                    borderTopRightRadius: "50px",
                                    borderTopLeftRadius: "50px",
                                    backgroundColor: "#FFAF00",
                                    top: 315,
                                    marginLeft: "5px",
                                }}
                            ></div>
                            <div
                                style={{
                                    height: "360px",
                                    width: "40px",
                                    top: 278,
                                    margin: "10px",
                                    transform: "rotate(45deg)",
                                    position: "absolute",
                                    borderTopRightRadius: "50px",
                                    borderTopLeftRadius: "50px",
                                    backgroundColor: "#FFFFFF",
                                    
                                }}
                            ></div>
                            <div
                                style={{
                                    height: "140px",
                                    width: "40px",
                                    transform: "rotate(35deg)",
                                    top: 250,
                                    position: "absolute",
                                    borderRadius: "50px",
                                    marginLeft: "35px",
                                    border: `1px solid ${Colors.airaPrimary}`,
                                }}
                            ></div>

                        
                    </Stack>
                    </div>


                </Box>
            </Grid>
            <FormProvider {...methods}>
                <Grid item spacing={3} sx={{ marginLeft: "5%" }}>
                    <Grid
                        item
                        xs={12}
                        
                        
                        alignItems="center"
                        justifyContent="flex-end"
                    >

                        <Stack direction="column" gap={2}>
                            <Stack direction="column" >
                                <Typography variant='h4' sx={{ fontWeight: "bold" }}>Instructions</Typography>
                            </Stack>
                            <Stack direction="column" alignItems="center">
                                <Typography variant='p' sx={{ fontWeight: 600 }}>Please use your company email address to register.</Typography>
                            </Stack>
                            <Stack direction="column" alignItems="center">
                                <Typography variant='p' sx={{ fontWeight:600 }}>We will send you a verification code for final signup.</Typography>
                            </Stack>

                            <Stack direction="column">
                                <Typography
                                    variant="body1"
                                    sx={{ fontWeight: 600, color: "#6755DF" }}
                                >
                                    Username
                                </Typography>
                                {/* <FormHelperText
                        htmlFor="email"
                        color="muted"
                        clasSName="mb-1"
                        style={{ fontWeight: "bold" }}
                      >
                        Email
                      </FormHelperText> */}
                                <Controller
                                    rules={{ required: true }}
                                    name="username"
                                    id="username"
                                    control={control}
                                    render={({ field: { onChange, value } }) => {
                                        return (
                                            <TextField
                                                fullWidth
                                                value={value}
                                                size="small"
                                                sx={{
                                                    "& fieldset": {
                                                        //paddingLeft: (theme) => theme.spacing(2.5),
                                                        borderRadius: "10px",
                                                    },
                                                }}
                                                onChange={onChange}
                                                id="username"
                                                autoComplete="off"
                                                // size="small"
                                                type="text"
                                                variant="outlined"
                                                placeholder="Username"
                                                rows={10}
                                            />
                                        );
                                    }}
                                />
                                {/* <ErrorMessage
                        name="email"
                        errors={errors}
                        render={({ message }) => <p>{message}</p>}
                      /> */}
                            </Stack>
                            <Stack direction="column">
                                <Typography
                                    variant="body1"
                                    sx={{ fontWeight: 600, color: "#6755DF" }}
                                >
                                    Password
                                </Typography>
                                {/* <FormHelperText
                        htmlFor="full_name"
                        color="muted"
                        clasSName="mb-1"
                        style={{ fontWeight: "bold" }}
                      >
                        Full Name
                      </FormHelperText> */}
                                <Controller
                                    rules={{ required: false }}
                                    name="password"
                                    id="Password"
                                    control={control}
                                    render={({ field: { onChange, value } }) => {
                                        return (
                                            <TextField
                                                sx={{
                                                    "& fieldset": {
                                                        //paddingLeft: (theme) => theme.spacing(2.5),
                                                        borderRadius: "10px",
                                                    },
                                                }}
                                                fullWidth
                                                autoFocus
                                                value={value}
                                                size="small"
                                                onChange={onChange}
                                                id="password"
                                                autoComplete="off"
                                                type="password"
                                                // size="small"
                                                variant="outlined"
                                                placeholder="Password"
                                                rows={10}
                                            />
                                        );
                                    }}
                                />

                                            {/* <ErrorMessage
                                    name="full_name"
                                    errors={errors}
                                    render={({ message }) => <p>{message}</p>}
                                /> */}
                      
                            </Stack>
                            <Stack direction="column">
                                <Typography
                                    variant="body1"
                                    sx={{ fontWeight: 600, color: "#6755DF" }}
                                >
                                    Company Mail
                                </Typography>
                                {/* <FormHelperText
                        htmlFor="full_name"
                        color="muted"
                        clasSName="mb-1"
                        style={{ fontWeight: "bold" }}
                      >
                        Full Name
                      </FormHelperText> */}
                                <Controller
                                    rules={{ required: false }}
                                    name="email"
                                    id="email"
                                    control={control}
                                    render={({ field: { onChange, value } }) => {
                                        return (
                                            <TextField
                                                sx={{
                                                    "& fieldset": {
                                                        //paddingLeft: (theme) => theme.spacing(2.5),
                                                        borderRadius: "10px",
                                                    },
                                                }}
                                                fullWidth
                                                autoFocus
                                                value={value}
                                                size="small"
                                                onChange={onChange}
                                                id="email"
                                                autoComplete="off"
                                                type="email"
                                                // size="small"
                                                variant="outlined"
                                                placeholder="Company Mail"
                                                rows={10}
                                            />
                                        );
                                    }}
                                />

                                            {/* <ErrorMessage
                                    name="full_name"
                                    errors={errors}
                                    render={({ message }) => <p>{message}</p>}
                                /> */}
                      
                            </Stack>
                            <Stack direction="column">
                                <Typography
                                    variant="body1"
                                    sx={{ fontWeight: 600, color: "#6755DF" }}
                                >
                                    Country
                                </Typography>
                                {/* <FormHelperText
                        htmlFor="full_name"
                        color="muted"
                        clasSName="mb-1"
                        style={{ fontWeight: "bold" }}
                      >
                        Full Name
                      </FormHelperText> */}
                                <Controller
                                    rules={{ required: false }}
                                    name="location"
                                    id="location"
                                    control={control}
                                    render={({ field: { onChange, value } }) => {
                                        return (
                                            <TextField
                                                sx={{
                                                    "& fieldset": {
                                                        //paddingLeft: (theme) => theme.spacing(2.5),
                                                        borderRadius: "10px",
                                                    },
                                                }}
                                                fullWidth
                                                autoFocus
                                                value={value}
                                                size="small"
                                                onChange={onChange}
                                                id="location"
                                                autoComplete="off"
                                                type="text"
                                                // size="small"
                                                variant="outlined"
                                                placeholder="Country"
                                                rows={10}
                                            />
                                        );
                                    }}
                                />

                                            {/* <ErrorMessage
                                    name="full_name"
                                    errors={errors}
                                    render={({ message }) => <p>{message}</p>}
                                /> */}
                      
                            </Stack>

                            <Stack sx={{ my: 1 }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    sx={{ color: "#fff" }}
                                    fullWidth
                                    onClick={() => {
                                        handleSubmit(onSubmit)();
                                    }}
                                >
                                    Submit
                                </Button>
                            </Stack>
                            
                            <Stack direction="column" alignItems="center">
                                <Typography >Already have an account?<span style={{ color: "#6755DF" }}> Sign In </span></Typography>
                            </Stack>
                        </Stack>

                    </Grid>
                </Grid>
            </FormProvider>



            {/* </Stack>
      </Box> */}
        </Grid>

    )
}

export default Register