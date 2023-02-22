import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  ListItem,
  List,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useStyle } from "./style";
const Footer = () => {
  const Data = [
    {
      id: 1,
      link: "About",
      link1: "/about-us",
    },
    {
      id: 1,
      link: "Blog",
    },
    {
      id: 1,
      link: "Press Room",
    },
    {
      id: 1,
      link: "Privacy Policy",
      link1:"/privacy-policy"
    },
    {
      id: 1,
      link: "Cookie Policy",
      link1:"/privacy-policy"
    },
    {
      id: 1,
      link: "Cookie Preferences",
      link1:"/privacy-policy"
    },
    {
      id: 1,
      link: "Terms",
    },
  ];
  const Data1 = [
    {
      id: 1,
      link: "Products",
    },
    {
      id: 1,
      link: "On-ramps & off ramps",
    },
    {
      id: 1,
      link: "NFT Checkouts",
    },
    {
      id: 1,
      link: "Personal",
    },
    {
      id: 1,
      link: "Buy & Sell Crypto",
    },
  ];
  const classes = useStyle();
  return (
    <>
      <Box className={classes.wrap4}>
        <Container>
          <Grid container spacing={2}>
            <Grid item md={4} xs={12}>
              <img
                src="https://static.binancecnt.com/static/logo-v3.svg"
                alt=""
              />
              <Box className={classes.bag4}>
                <i class="bi bi-instagram"></i>
                <i class="bi bi-facebook"></i>
                <i class="bi bi-linkedin"></i>
                <i class="bi bi-twitter"></i>
              </Box>
            </Grid>

            <Grid item md={2} xs={6}>
              <Box className={classes.bag6}>
                <Typography variant="h6">Binance Connect</Typography>
                <List disablePadding>
                  {Data.map((e) => {
                    const { id, link, link1 } = e;
                    return (
                      <>
                        <ListItem disablePadding>
                          <Link to={link1}>{link}</Link>
                        </ListItem>
                      </>
                    );
                  })}
                </List>
              </Box>
            </Grid>
            <Grid item md={2} xs={6}>
              <Box className={classes.bag6}>
                <Typography variant="h6">Products</Typography>
                <List disablePadding>
                  {Data1.map((e) => {
                    const { id, link } = e;
                    return (
                      <>
                        <ListItem disablePadding>
                          <Link href="">{link}</Link>
                        </ListItem>
                      </>
                    );
                  })}
                </List>
              </Box>
            </Grid>
            <Grid item md={2} xs={6}>
              <Box className={classes.bag6}>
                <Typography variant="h6">Support</Typography>
                <List disablePadding>
                  <ListItem disablePadding>
                    <Link href="">FAQ</Link>
                  </ListItem>
                  <ListItem disablePadding>
                    <Link href="">Customer Support</Link>
                  </ListItem>
                </List>
              </Box>
            </Grid>
            <Grid item md={2} xs={6}>
              <Box className={classes.bag6}>
                <Typography variant="h6">Buy Crypto</Typography>
                <List disablePadding>
                  <ListItem disablePadding>
                    <Link href="">Buy Bitcoin</Link>
                  </ListItem>
                  <ListItem disablePadding>
                    <Link href="">Buy BNB</Link>
                  </ListItem>
                </List>
              </Box>
            </Grid>
            <Grid item md={12} >
              <Typography variant="body1">
                Copyright © 2021-2022 Binancecnt.com All rights reserved.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;