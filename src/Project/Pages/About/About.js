import { Box, Container, CssBaseline, Grid, Typography } from "@mui/material";
import React from "react";
import Footer from "../../Component/Footer/Footer";
import Header from "../../Component/Header/Header";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  wrap10: {
    padding: "5rem 0 2rem",
    "& h6": {
      fontSize: "2rem",
      fontWeight: "500",
      marginTop: "2rem",
    },
    "& h4": {
      fontSize: "3rem",
      fontWeight: "bold",
    },
    "& img": {
      width: "100%",
      height: "100%",
    },
  },
  bag31: {
    marginTop: "3rem",
    color: "rgba(71, 77, 87,0.9)",
  },
  bag32: {
    padding: "5rem 0 2rem",
    "& h3": {
      fontSize: "3rem",
      fontWeight: "400",
    },
  },
  bag33: {
    textAlign: "center",
    "& img": {
      width: "30%",
      height: "100%",
    },
    "& h6":{
      fontSize: "1.6rem", marginTop: "1rem", fontWeight: "500"
    },
    "& p":{
      fontSize: "13px",color:"rgba(71, 77, 87,0.8)"
    },
  },
});
const About = () => {
  const Data = [
    {
      id: 1,
      img: "https://static.binancecnt.com/static/about-us/user.png",
      decs: "  We protect our users and put users’ needs at the forefront of all our initiatives. We make products which help solve our users' problems while promising service excellence.",
      title:"User-focused",
    },
    {
      id: 2,
      img: "https://static.binancecnt.com/static/about-us/security.png",
      decs: "Our team is assembled with top security experts who are committed to consistently strengthen our infrastructure.",
      title:"Security",
    },
    {
      id: 3,
      img: "https://static.binancecnt.com/static/about-us/compliance.png",
      decs: "We adhere to industry standards and regulatory requirements from trusted authorities.      ",
      title:"Compliance",
    },
    {
      id: 4,
      img: "https://static.binancecnt.com/static/about-us/lock-close.png",
      decs: "We are accountable for our actions and always act with the highest ethical standards.",
      title:"Integrity",
    },
  ];
  const classes = useStyle();
  return (
    <>
      <Header />
      <CssBaseline />
      <Box className={classes.wrap10}>
        <Container>
          <Grid container spacing={2}>
            <Grid item lg={5}>
              <Box>
                <Typography variant="h6">Welcome to Binance Connect</Typography>
                <Typography variant="h4">
                  Your bridge into the future of finance
                </Typography>
              </Box>
              <Box className={classes.bag31}>
                <p>
                  Bifinity's leading payment infrastructure connects traditional
                  finance to world-leading and emerging blockchains,
                  transforming how businesses and people send and receive money
                  around the world.
                </p>
                <p>
                  Our vision is to create an open, financial world where people
                  from all walks of life and businesses, big or small, can
                  participate and realize their financial goals.
                </p>
              </Box>
            </Grid>
            <Grid item lg={7}>
              <img
                src="https://static.binancecnt.com/static/about-us/header.png"
                alt=""
              />
            </Grid>

            <Grid item lg={12}>
              <Box className={classes.bag32}>
                <Typography variant="h3">Our Commitment</Typography>
              </Box>
            </Grid>
            {Data.map((e) => {
              const { id, img, decs,title } = e;
              return (
                <>
                  <Grid item lg={3}>
                    <Box className={classes.bag33} key={id}>
                      <img src={img} alt="" />
                      <Typography variant="h6">{title}</Typography>
                      <p>{decs}</p>
                    </Box>
                  </Grid>
                </>
              );
            })}
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default About;