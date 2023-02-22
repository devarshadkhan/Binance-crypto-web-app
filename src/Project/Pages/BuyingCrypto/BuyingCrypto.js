import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";
import React, { useState } from "react";
import Header from "../../Component/Header/Header";
import { makeStyles } from "@mui/styles";
import Footer from "../../Component/Footer/Footer";
const useStyle = makeStyles((theme)=>({
  wrap9: {
    padding: "4rem 0 3rem",
  },
  bag21: {
   
    width: "53%",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    // textAlign:"end",
    "& h4": {
      fontSize: "2.9rem",
      fontWeight: "500",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.9rem",
      },
      "& span": {
        color: "#FCD535",
      },
    },
    "& p": {
      fontWeight: "400",
      fontSize: "13px",
      lineHeight: "24px",
      marginTop: "20px",
      color: "#707A8A",
      textAlign: "justify",
    },
  },
  bag22: {
    width: "60%",
    margin: "0 auto",
    backgroundColor: "#fffafa",
    padding: "12px",
    borderRadius: "5px",
    boxShadow: "0px 0px 5px 0px #f7f7f7",
    position:"relative",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  bag23: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& i": {
      fontSize: "1.4rem",
      fontWeight: "bold !important",
    },
  },
  bag24: {
    gap: "6px",
    justifyContent: "flex-end",
    cursor: "pointer",
    "& img": {
      width: "25%",
    },
    "& p,i": {
      margin: "0",
      fontSize: "12px",
    },
    "& input": {
      input_type_number____webkit_inner_spin_button: {
        WebkitAppearance: "none",
        margin: "0",
      },
      input_type_number____webkit_outer_spin_button: {
        WebkitAppearance: "none",
        margin: "0",
      },
    },
  },
  bag28: {
    marginTop: "5rem",
    "& h6": {
      fontSize: "14px",
      color: "rgba(112, 122, 138,0.9)",
      fontWeight: "lighter",
    },
    "& p": {
      fontSize: "13px",
      color: "rgba(112, 122, 138,0.9)",
    },
    "& button": {
      backgroundColor: "#EAECEF",
      color: "#000",
      border: "none",
      padding: "10px 3rem",
    },
    "& button:hover": {
      backgroundColor: "#EAECEF",
      color: "#000",
      border: "none",
    },
    "& div": {
      fontSize: "11px",
      textAlign: "justify",
      marginTop: "1rem",
      color: "rgba(112, 122, 138,0.8)",
      fontWeight: "500",
      "& span": {
        color: "rgba(201, 148, 0,0.9)",
        fontWeight: "600",
      },
    },
  },
  bag32:{
    background:"#fff",
    position:'absolute',
    // width:"50%",
    // margin:"0 0 0 auto",
    padding:"14px",
    borderRadius:"5px",
    boxShadow:"0px 0px 5px 0px rgba(112, 122, 138,0.4)",
    position:"absolute",
    right:"0",
    zIndex:"1"
  },
  bag25:{
    margin:"2rem 0",
      "& p":{
        // margin:"0 0 10px 0",
      }
  },
  bag9:{
    [theme.breakpoints.down("sm")]: {
      display:"block !important",
      textAlign:"center !important",
      
    },
    "& button":{
     
      [theme.breakpoints.down("sm")]: {
        margin:"1rem 0 !important"
        
      },
    }
  }
}));
const BuyingCrypto = () => {
  const [show, setShow] = useState();

  const classes = useStyle();
  return (
    <>
      <Header />

      <Box className={classes.wrap9}>
        <Container>
          <Grid container spacing alignItems="center">
            <Grid item md={6}>
              <Box className={classes.bag21}>
                <Typography variant="h4">
                  Buying <span>Crypto</span> just got easier
                </Typography>
                <p>
                  Buy and sell 50+ cryptocurrencies on a platform trusted and
                  used by millions of users worldwide.
                </p>
              </Box>
            </Grid>

            <Grid item md={6}>
              <Box className={classes.bag22}>
                <Box className={classes.bag23}>
                  <Typography variant="h6">Buy Crypto</Typography>
                  <i class="bi bi-list" onClick={()=>setShow(!show)}></i>
                </Box>
                {
                  show ? 
                  <Box className={classes.bag32}>
                  <Box sx={{display:"flex",gap:"10px"}}>
                  <i class="bi bi-box-arrow-in-right"></i>
                  <p>
                    Log in
                  </p>
                  </Box>
                  <Box sx={{display:"flex",gap:"10px"}}>
                  <svg xmlns="http://www.w3.org/2000/svg" font-size="24" color="#1E2329" class="inline-block align-middle box-border m-0 min-w-0 fill-current flex-none" viewBox="0 0 24 24" fill="none" width="24" height="24"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 3.5a5.502 5.502 0 00-5.302 4.032 7.502 7.502 0 016.77 6.77A5.502 5.502 0 0015 3.5zM14.5 15a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-8 0L9 17.5l2.5-2.5L9 12.5 6.5 15zM9 4H4v5l5-5zm11 16h-5l5-5v5z" fill="currentColor"></path></svg>
                  <p>
                   Buy Crypto
                  </p>
                  </Box>
                </Box>
                : null
                }
                <Box className={classes.bag25}>
                  <p htmlFor="">Spend</p>
                  <TextField
                    id=""
                    type="number"
                    placeholder="15.00 - 12.500.00"
                    label=""
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Box
                            sx={{ display: "flex", alignItems: "center" }}
                            className={classes.bag24}
                          >
                            <img
                              src="https://static.binancecnt.com/static/land-page/fiat-icons/eur.png"
                              alt=""
                            />
                            <p>EUR</p>
                            <i class="bi bi-chevron-right"></i>
                          </Box>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
                <Box className={classes.bag25}>
                  <p htmlFor="">Receive</p>
                  <TextField
                    id=""
                    type="number"
                    placeholder="15.00 - 12.500.00"
                    label=""
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Box
                            sx={{ display: "flex", alignItems: "center" }}
                            className={classes.bag24}
                          >
                            <img
                              src="https://static.binancecnt.com/static/land-page/fiat-icons/usd.png"
                              alt=""
                            />
                            <p>BTC</p>
                            <i class="bi bi-chevron-right"></i>
                          </Box>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
                <Box className={classes.bag28}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="h6">Estimated price</Typography>
                    <Typography variant="body2">
                      1 EUR ≈0.00005826 BTC
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      marginTop: "2rem",
                      display: "flex",
                      justifyContent: "space-evenly",
                    }}
                    className={classes.bag9}
                  >
                    <button className="btn  btn-primary">Sign up</button>
                    <button
                      className="btn  btn-primary"
                      style={{ backgroundColor: "#FCD535" }}
                    >
                      Log in
                    </button>
                  </Box>
                  <div>
                    By signing up or logging in using your Binance.com account,
                    you agree to Binance Connect <span>Terms of Use</span> &{" "}
                    <span>Privacy Policy</span>
                  </div>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default BuyingCrypto;