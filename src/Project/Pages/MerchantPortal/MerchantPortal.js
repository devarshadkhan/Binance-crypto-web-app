import {
    Box,
    Container,
    Grid,
    TextField,
    Typography,
    Checkbox,
    InputAdornment,
    IconButton
  } from "@mui/material";
  import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
  import React, { useState } from "react";
  import { useFormik, Field } from "formik";
  import * as yup from "yup";
  import Header from "../../Component/Header/Header";
  import Footer from "../../Component/Footer/Footer";
  import { makeStyles } from "@mui/styles";
  import InputLabel from "@mui/material/InputLabel";
  import MenuItem from "@mui/material/MenuItem";
  import FormControl from "@mui/material/FormControl";
  import Select from "@mui/material/Select";
  const useStyle = makeStyles((theme)=>({
    wrap8: {
      width: "40%",
      margin: "0 auto",
      padding: "3rem 0 2rem",
      [theme.breakpoints.down("sm")]:{
        width:"100%"
      },
      "& h5": {
        fontSize: "2rem",
        fontWeight: "bold",
        margin: "10px 0",
      },
      "& p": {
        color: "rgba(71, 77, 87,0.8)",
        fontSize: "0.9rem",
      },
      // "& svg":{
      //     color:"yellow"
      // },
      "& form": {
        margin: "2rem 0",
        "& div": {
          marginTop: "6px",
          [theme.breakpoints.down("sm")]:{
            justifyContent:"center",
            display:"block"
          },
        },
        "& p": {
          margin: "0",
          fontSize: "13px",
          color: "rgba(71, 77, 87,0.8)",
        },
        "& input": {
          // height: "0 !important",
          [theme.breakpoints.down("sm")]:{
            height: "0 !important",
          },
          borderColor: "#e5e7eb",
        },
      },
      "& input::placeholder": {
        fontSize: "12px",
      },
    },
    bag10: {
      display: "flex",
      alignItems: "center",
      "& p": {
        fontSize: "10px !important",
      },
    },
    bag11: {
      width: "100%",
      "& button": {
        width: "100%",
        marginTop: "18px",
        background: "rgba(252, 213, 53,0.6)",
        color: "#000",
        border: "none",
        padding: "11px 0",
      },
      "& button:hover": {
        background: "rgba(252, 213, 53,0.6)",
        color: "#000",
      },
    },
  }));
  
  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  });
  const PartnerWithUs = () => {
    const formik = useFormik({
      initialValues: {
        email: "",
        password:""
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
    });
    const classes = useStyle();
    const [age, setAge] = useState("");
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: true,
      });

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    const label = { inputProps: { "aria-label": "Checkbox demo" } };
    const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    return (
      <>
        <Header />
        <Box className={classes.wrap8}>
          <Container>
            <Grid container spacing={2}>
              <Grid item lg={12} md={12} sm={12}>
                <Box>
                  <Typography variant="h5">Log in to Binance Connect</Typography>
                  <Typography variant="body1">
                  Log in by using Binance Connect account details.
                  </Typography>
  
                  <form onSubmit={formik.handleSubmit}>
                    <Grid container>
                      <Grid item md={12} sm={12} lg={12}>
                        <Box>
                          <p htmlFor=""> Email</p>
                          <TextField
                            fullWidth
                            id="email"
                            name="email"
                            placeholder="xxx@gmail.com"
                            variant="outlined"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.email && Boolean(formik.errors.email)
                            }
                            helperText={
                              formik.touched.email && formik.errors.email
                            }
                          />
                        </Box>
                      </Grid>
                      <Grid item md={12} sm={12} lg={12}>
                        <Box>
                          <p htmlFor=""> Password</p>
                          <TextField
                            fullWidth
                            type="password"
                            id="password"
                            name="password"
                            placeholder="password"
                            variant="outlined"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
                            error={
                              formik.touched.password && Boolean(formik.errors.password)
                            }
                            helperText={
                              formik.touched.password && formik.errors.password
                            }
                          />
                        </Box>
                      </Grid>
                    </Grid>
  
                    <Box className={classes.bag11}>
                      <button
                        className="btn btn-primary"
                        variant="contained"
                        fullWidth
                        type="submit"
                      >
                        Submit
                      </button>
                    </Box>
                  </form>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
        {/* <Footer /> */}
      </>
    );
  };
  
  export default PartnerWithUs;