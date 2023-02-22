import { Box, Grid, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { color } from "@mui/system";
const Data = [
  {
    img: "https://static.binancecnt.com/static/land-page/brige.png",
    title: "Defi Fiat-to-Crypto Bridge",
    decs: "Gain access to a $1 trillion+ dollar market with our seamless crypto payments infrastructure",
    btn:"Learn More"
  },
  {
    img: "https://static.binancecnt.com/static/land-page/nft.png",
    title: "NFT Checkouts",
    decs: "Tailored checkout pages for safe, simple and fast NFT transactions for your customers.",
    btn:"Comming Soon",
    cursor:"not-allowed",
    // background:"rgb(239 206 113)",
    background:"rgba(201, 148, 0,0.2)",
    Color:"rgb(201, 148, 0)",
  },
];
const useStyle = makeStyles((theme) => ({
  wrap2: {
    padding: "2rem 0 ",
    "& h4": {
      fontSize: "1.6rem",
      fontWeight: "bold",
      marginBottom: "2rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "16px !important",
      },
    },
    "& div": {
      "& h6": {
        fontSize: "1.6rem",
        fontWeight: "500",
        marginBottom: "1rem",
      },
      "& p": {
        width: "70%",
        margin: "0 auto",
        color: "#707a8a",
      },
      "& button":{
        background: "rgb(252, 213, 53)", border: "none", margin: "2rem 0", padding: "0.6rem 2rem", color: "#000"
      },
      "& button:hover":{
        background: "rgb(252, 213, 53)", opacity:"0.7", color:"#000"
      }
    },
  },
}));
const FutureFinance = (props) => {
  // const [style, setStyle] = useState("14px")
  console.log("gcfnbm",props)
  const classes = useStyle();
 
  return (
    <Box className={classes.wrap2}>
      <Container>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <Typography variant="h4" style={props.size}>
              Tap in to the future of finance
            </Typography>
          </Grid>

          {Data.map((e) => {
            const { img, title, decs, btn, cursor, background, Color } = e;
            return (
              <>
                <Grid item md={6}>
                  <Box textAlign="center" variant="div">
                    <img src={img} alt="" width="100%" />
                    <Typography variant="h6">{title}</Typography>
                    <p>{decs}</p>
                    <button className="btn btn-primary" style={{cursor:cursor, background:background,color:Color}}>{btn}</button>
                  </Box>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default FutureFinance;