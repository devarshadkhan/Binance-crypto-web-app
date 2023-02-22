import React from "react";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import { Box, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import FutureFinance from "../../Component/FutureFinance/FutureFinance";
import KeyFeatures from "../../Component/KeyFeatures/KeyFeatures";

const useStyle = makeStyles((theme)=>({
  wrap5: {
    padding: "3rem 0 4rem",
    textAlign: "center",
    "& h2": {
      fontSize: "3.8rem",
      fontWeight: "400",
      margin: "1rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1rem !important",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "2rem",
      },
    },
    "& p": {
      color: "rgba(112, 122, 138,0.7)",
      margin: "1.6rem 0 3rem",
    },
    "& button": {
      background: "rgba(252, 213, 53, 0.9)",
      padding: "10px 3rem",
      border: "none",
      color: "#000",
    },
    "& button:hover": {
      background: "rgba(252, 213, 53, 0.6)",
      color: "#000",
    },
  },
  bag7: {
    marginTop: "2.7rem",
    "& img": {
      width: "15%",
      margin: "0 20px",
    },
  },
  wrap7: {
    background: "rgba(244, 244, 244,0.8)",
    padding: "4rem 0",
    textAlign: "center",
    "& h4": {
      fontSize: "2rem",
      fontWeight: "bold",
      margin: "1rem 0",
    },
    "& p": {
      color: " rgba(112, 122, 138,0.7)",
      fontSize: "13px",
    },
    "& button": {
      background: "rgba(252, 213, 53,0.9)",
      color: "#000",
      border: "none",
      padding: "10px 3rem",
    },
  },
}));
const OffRampOnRamp = () => {
  const size = { fontSize: "2.5rem", fontWeight: "lighter" };
  const classes = useStyle();
  return (
    <>
      <Header />

      <Box className={classes.wrap5}>
        <Container>
          <Grid container spacing={2}>
            <Grid item md={12}>
              <Box>
                <Typography variant="h2">
                  Let your users buy, sell and check-out with crypto in the
                  easiest way.
                </Typography>
                <Typography variant="body2">
                  Accept crypto payments and grow your business online with
                  Binance Connect's powerful payments software and API solutions
                </Typography>
                <button className="btn btn-primary">Contact sales</button>
              </Box>

              <Box className={classes.bag7}>
                <img
                  src="https://static.binancecnt.com/static/business/top1.png"
                  alt=""
                  style={{ width: "7%" }}
                />
                <img
                  src="https://static.binancecnt.com/static/business/top2.png"
                  alt=""
                />
                <img
                  src="https://static.binancecnt.com/static/business/top3.png"
                  alt=""
                  style={{ width: "7%" }}
                />
                <img
                  src="https://static.binancecnt.com/static/business/top4.png"
                  alt=""
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <FutureFinance size={size} />
      <KeyFeatures />

      <Box className={classes.wrap7}>
        <Container>
          <Grid container spacing={2}>
            <Grid item lg={12} md={12} sm={12}>
              <Box>
                <Typography variant="h4">Ready to get started?</Typography>
                <p>Get in touch with our team or create an account today.</p>
                <button className="btn btn-primary">Contact Us</button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer/>
    </>
  );
};

export default OffRampOnRamp;