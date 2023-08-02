import React from 'react'
import { Box, Grid, Paper, Stack, TextField, Typography ,Button} from "@mui/material";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { notification } from 'antd';
import axios from 'axios';
import Colors from "../../common/Colors";
import { Link, Router, useNavigate } from 'react-router-dom';
const Login = () => {
  const methods = useForm({
    full_name: "",
    email: "",
    contact_number: "+91",
});
const navigate = useNavigate();
const {
    handleSubmit,
    control,
    formState: { errors },
} = methods;
const onSubmit = async(data) => {
    //console.log("data", data);
    await axios.post('http://182.70.242.120:8083/api/auth/signin', data)
      .then((response) => {
        console.log('Post success:', response);
        navigate('/');
        notification.success({
            message: 'Amigo!',
            description: 'Welcome back',
            duration: 3,
        });
      })
      .catch((error) => {
        notification.error({
            message: 'Login Failure',
            description: error,
            duration: 1,
        });
        console.error('Error posting data:', error);
      });
};
  return (
    <Grid container spacing={2} direction="row" sx={{ my: 25, }}>
            <Grid item xs={12} sm={6} md={6} justifyContent="flex-end"  direction="row">
      <Stack
        
        alignItems="center"
        direction="row"
        justifyContent="space-between"
      >
       <img
          src="images/aboutus/about_us_header.png"
          alt="blogsHeader"
          style={{ width: "700px", height: "400px" }}
        />  
      </Stack>
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
                                <Typography variant='h4' sx={{ fontWeight: "bold" }}>Partner Login</Typography>
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
                                    id="password"
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
                           

                            <Stack sx={{ marginTop: 1 }}>
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
                                <Stack direction="column" alignItems="center" >
                                <Typography variant='p' sx={{ fontWeight: 600,color: "#6755DF"}}>
                                    Forgot your password ?
                                </Typography>
                            </Stack>
                            </Stack>
                            
                            <Stack direction="column" alignItems="center">
                                <Typography variant='p' sx={{ fontWeight:600 }}>
                                    <span style={{ color: "#6755DF" }}> 
                                        <Link to={"/register"}>
                                            Sign-up From here!
                                        </Link>
                                    </span>
                                </Typography>
                            </Stack>
                            <Stack direction="column" alignItems="center">
                                <Typography variant='p' sx={{ fontWeight:600 }}>For Partner Portal Login issues, please <span style={{ color: "#6755DF" }}> contact us. </span></Typography>
                            </Stack>
                        </Stack>
                        </Grid>
                </Grid>
            </FormProvider>
      </Grid>
  )
}

export default Login