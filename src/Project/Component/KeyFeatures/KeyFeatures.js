import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Typography, Box, Container } from "@mui/material";
const useStyle = makeStyles((theme) => ({
  wrap6: {
    [theme.breakpoints.down("sm")]: {
      spacing: "0",
    },
    "& img": {
      [theme.breakpoints.down("sm")]: {
        width: "80%",
      },
    },
    "& div": {
      // margin: "2rem 0",
    },
    "& h5": {
      fontSize: "1.6rem",
      fontWeight: "bold",
      marginBottom: "1rem",
    },
    "& p": {
      [theme.breakpoints.down("sm")]: {
        padding: "10px",
      },
    },
  },
}));
const KeyFeatures = () => {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.wrap6}>
        <Container>
          <Grid container spacing={2}>
            <Grid item lg={6} sm={12}>
              <Box>
                <Typography variant="h5">
                  Complemented with our key features
                </Typography>
                <Typography variant="body2">
                  How Bifinity can enhance your business, with this fancy
                  features that your user deserve.
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={6} sm={12}>
              <img
                src="https://static.binancecnt.com/static/business/list1.png"
                alt=""
              />
              <Box>
                <Typography variant="h5">Experience the leaders</Typography>
                <p>
                  Reach untapped markets and unlock new revenue streams.With
                  Binance Connect, your customers can easily buy, sell and
                  cash-out 50+ cryptocurrencies in over 30 countries.
                </p>
              </Box>
              <img
                src="https://static.binancecnt.com/static/business/list2.png"
                alt=""
              />
              <Box>
                <Typography variant="h5">Choose how you buy crypto</Typography>
                <p>
                  Binance Connect supports all major payment methods, including
                  Visa, Mastercard and more.
                </p>
              </Box>
              <img
                src="https://static.binancecnt.com/static/business/list3.png"
                alt=""
              />
              <Box>
                <Typography variant="h5">
                  Committed to regulatory compliance
                </Typography>
                <p>
                  We are a fully-licensed virtual asset provider with an
                  industry-standard KYC onboarding process that safeguards your
                  users.
                </p>
              </Box>
              <img
                src="https://static.binancecnt.com/static/business/list4.png"
                alt=""
                style={{ width: "100%" }}
              />
              <Box>
                <Typography variant="h5">Made for Developers</Typography>
                <p>
                  Skip the poorly-optimized plugins and compicated setup.
                  Integrate Binance Connect's intuitive and battle-tested APIs
                  with just a few lines of code.
                </p>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default KeyFeatures;