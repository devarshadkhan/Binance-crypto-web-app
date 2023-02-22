import {
  Box,
  Container,
  Grid,
  TextField,
  Typography,
  Checkbox,
} from "@mui/material";
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
  firstname: yup
    .string("Enter your firstname")
    .max(15, "Must be 15 characters or less")
    .required("First name is required"),
  lastname: yup
    .string("Enter your lastname")
    .max(20, "Must be 20 characters or less")
    .required("Last name is required"),
  companyname: yup
    .string("Enter your companyname")
    .max(20, "Must be 20 characters or less")
    .required("Company name is required"),
  companyURL: yup
    .string("Enter your companyname")
    .max(50, "Must be 20 characters or less")
    .required("Please path must be a valid URL"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
});
const PartnerWithUs = () => {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      companyname: "",
      companyURL: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const classes = useStyle();
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <>
      <Header />
      <Box className={classes.wrap8}>
        <Container>
          <Grid container spacing={2}>
            <Grid item lg={12} md={12} sm={12}>
              <Box>
                <Typography variant="h5">Partner with Us</Typography>
                <Typography variant="body1">
                  Integrate fiat onramp solutions and allow your users to buy
                  and sell crypto easily
                </Typography>

                <form onSubmit={formik.handleSubmit}>
                  <Grid container>
                    <Grid item md={6} sm={12}>
                      <Box sx={{ margin: "0 10px 0 0px" }}>
                        <p htmlFor="">First Name</p>
                        <TextField
                          id="firstname"
                          name="firstname"
                          placeholder="Enter First Name"
                          variant="outlined"
                          value={formik.values.firstname}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.firstname &&
                            Boolean(formik.errors.firstname)
                          }
                          helperText={
                            formik.touched.firstname && formik.errors.firstname
                          }
                        />
                      </Box>
                    </Grid>

                    <Grid item md={6} sm={12} >
                      <Box sx={{ margin: "0 0 0 10px" }}>
                        <p htmlFor="">Last Name</p>
                        <TextField
                          id="lastname"
                          name="lastname"
                          placeholder="Enter Last Name"
                          variant="outlined"
                          value={formik.values.lastname}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.lastname &&
                            Boolean(formik.errors.lastname)
                          }
                          helperText={
                            formik.touched.lastname && formik.errors.lastname
                          }
                        />
                      </Box>
                    </Grid>
                    <Grid item md={12} sm={12} lg={12}>
                      <Box>
                        <p htmlFor="">Company Email</p>
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
                        <p htmlFor="">Company Name</p>
                        <TextField
                          fullWidth
                          id="companyname"
                          name="companyname"
                          variant="outlined"
                          placeholder="Enter Company Name"
                          value={formik.values.companyname}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.companyname &&
                            Boolean(formik.errors.companyname)
                          }
                          helperText={
                            formik.touched.companyname &&
                            formik.errors.companyname
                          }
                        />
                      </Box>
                    </Grid>
                    <Grid item md={12} sm={12} lg={12}>
                      <Box>
                        <p htmlFor="">Company Website</p>
                        <TextField
                          fullWidth
                          id="companyURL"
                          name="companyURL"
                          variant="outlined"
                          placeholder="ABC.com"
                          value={formik.values.companyURL}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.companyURL &&
                            Boolean(formik.errors.companyURL)
                          }
                          helperText={
                            formik.touched.companyURL &&
                            formik.errors.companyURL
                          }
                        />
                      </Box>
                    </Grid>
                    <Grid item md={12} sm={12}>
                      <Box>
                        <p htmlFor="">Company Type</p>
                        <FormControl fullWidth>
                          {/* <InputLabel fullWidth id="demo-simple-select-label">
                            {age}
                          </InputLabel> */}
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            // label="Age"
                            onChange={handleChange}
                          >
                            <MenuItem value={"DeFi"} defaultValue>
                              DeFi
                            </MenuItem>
                            <MenuItem value={"ECommerce"}>ECommerce</MenuItem>
                            <MenuItem value={"Wallet"}>Wallet</MenuItem>
                            <MenuItem value={"Fintech"}>Fintech</MenuItem>
                            <MenuItem value={"Others"}>Others</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Grid>
                    <Grid item md={12} sm={12}>
                      <Box className={classes.bag10}>
                        {/* <Checkbox {...label} color="secondary"/> */}
                        {/* <Field type="checkbox" name="checked" value="Three" /> */}
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          checked
                          required
                          style={{ height: "20px !importants" }}
                        />
                        <p>
                          I agree to Binance Connect’s Terms of Use and Privacy
                          Policy. By clicking 'Submit', you are submitting a
                          request to explore a business opportunity with Binance
                          Connect.
                        </p>
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
      <Footer />
    </>
  );
};

export default PartnerWithUs;