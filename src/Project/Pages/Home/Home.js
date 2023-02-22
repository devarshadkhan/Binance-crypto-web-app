import React from "react";
import Header from "../../Component/Header/Header";
import { Box, Grid, Container, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import FutureFinance from "../../Component/FutureFinance/FutureFinance";
import Cryptocurrency from "../../Component/Cryptocurrency/Cryptocurrency";
import Footer from "../../Component/Footer/Footer";
import { useTheme } from "@mui/system";
import { useMediaQuery } from "@mui/material/useMediaQuery";
// const styles = (theme) => ({
//   root: {
//     padding: theme.spacing(1),
//     [theme.breakpoints.down('md')]: {

//     },
//     [theme.breakpoints.up('md')]: {

//     },
//     [theme.breakpoints.up('lg')]: {

//     },
//   },
// });
const useStyle = makeStyles((theme) => ({
  wrap1: {
    padding: "4rem 0",
    [theme.breakpoints.down("sm")]: {
      padding: "3rem 0 1rem",
    },
    "& h2": {
      fontSize: "3rem",
      fontWeight: "bold",
      wordBreak: "break-word",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.7rem",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "1.7rem",
      },
    },
    "& p": {
      fontSize: "1rem",
      fontWeight: "400",
      wordBreak: "break-word",
      // color: "rgb(112, 122, 138)",
      color: "#707a8a",
      width: "64%",
      margin: "22px 0",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        margin: "22px 0",
      },
      [theme.breakpoints.up("sm")]: {
        width: "100%",
        margin: "22px 0",
      },
    },
    "& a": {
      backgroundColor: "rgb(252, 213, 53)",
      color: "#000",
      padding: "10px 4rem",
      border: "none",
      [theme.breakpoints.down("sm")]: {
        padding: "10px 2rem",
      },
    },
    "& a:hover": {
      opacity: "0.9",
      backgroundColor: "rgb(252, 213, 53)",
      color: "#000",
    },
  },
  bag1: {
    margin: "3rem 0 0",

    "& div": {
      borderLeftWidth: "1px",
      // borderStyle: "solid"
      [theme.breakpoints.down("sm")]: {
        marginTop: "1rem",
      },
    },
    "& h6": {
      fontSize: "2rem",
      fontWeight: "600",
      marginBottom: "1.4rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1rem",
        marginBottom: "0.4rem",
      },
      [theme.breakpoints.up("sm")]: {
        // fontSize: "1rem",
      },
    },
    "& span": {
      color: "#707a8a",
      fontSize: "15px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
        wordBreak:"break-all"
      },
      [theme.breakpoints.up("sm")]: {
        // fontSize: "12px",
        wordBreak:"break-all"
      },
    },
    [theme.breakpoints.down("sm")]: {
      margin: "1rem 0 0",
      width: "100%",
      justifyContent: "center !important",
      flexWrap: "wrap !important",
      flexDirection: "row !important",
      gap:"20px"
  
    },
    [theme.breakpoints.up("sm", "md")]: {
      width: "100%",
      flexWrap: "wrap",
      flexDirection: "column ",
      // justifyContent:"center"
    },
  },
  bag2: {
    [theme.breakpoints.down("sm")]: {
      display: "none !important",
    },
  },
  bag3: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
}));
const Home = () => {
  const theme = useTheme();
  const classes = useStyle();
  return (
    <>
      <Header />
      <Box className={classes.wrap1}>
        <Container>
          <Grid container spacing={2}>
            <Grid item md={7} sm={12}>
              <Box>
                <Typography variant="h2">
                  Scale your business with crypto.
                </Typography>
                <p>
                  Accept crypto payments and grow your business online with
                  Binance Connect's powerful payments software and API solutions
                </p>
              </Box>
              <Box className={classes.bag3}>
                <Link to="" className="btn btn-primary">
                  Partner With Us
                </Link>
              </Box>
              <Stack
                className={classes.bag1}
                direction="row"
                justifyContent="space-between"
                flexWrap="wrap"
              >
                <Box textAlign="center" variant="div">
                  <h6>50+</h6>
                  <span>Supported Cryptocurrencies</span>
                </Box>
                <Box textAlign="center">
                  <h6>Variety of</h6>
                  <span>Payment Methods</span>
                </Box>
                <Box textAlign="center">
                  <h6>Millions of</h6>
                  <span>Users</span>
                </Box>
              </Stack>
            </Grid>
            <Grid item md={5}>
              <Box className={classes.bag2}>
                <img
                  src="https://static.binancecnt.com/static/land-page/header.png"
                  style={{ width: "110%" }}
                  alt=""
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* This is a Component Future of Finance */}

      <FutureFinance />
      <Cryptocurrency />
      <Footer />
    </>
  );
};

export default Home;