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
import Form from "react-bootstrap/Form";
import Data from "./CryptocurrencyData";
// import CryptoDropdown from "./CryptoDropdown/CryptoDropdown";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useStyle } from "./style";
const Currency = [
  {
    id: 1,
    img: "https://static.binancecnt.com/static/land-page/fiat-icons/usd.png",
    decs: "USD",
  },
  {
    id: 2,
    img: "https://static.binancecnt.com/static/land-page/fiat-icons/eur.png",
    decs: "EUR",
  },
  {
    id: 3,
    img: "https://static.binancecnt.com/static/land-page/fiat-icons/php.png",
    decs: "PHP",
  },
  {
    id: 4,
    img: "https://static.binancecnt.com/static/land-page/fiat-icons/aud.png",
    decs: "AUD",
  },
  {
    id: 4,
    img: "https://static.binancecnt.com/static/land-page/fiat-icons/gbp.png",
    decs: "GBP",
  },
  {
    id: 4,
    img: "https://static.binancecnt.com/static/land-page/fiat-icons/rub.png",
    decs: "RUB",
  },
];
const Cryptocurrency = () => {
  const [isActive,setIsActive] = useState(false);
  const [isActive1,setIsActive1] = useState(false);
  const [selected,setIsSelected] = useState("USD");
  const [selected1,setIsSelected1] = useState("https://static.binancecnt.com/static/land-page/fiat-icons/usd.png");
  const classes = useStyle();
  const [val, setVal] = React.useState(7);

  const handleChange = (event) => {
    setVal(event.target.value);
  };
  return (
    <>
      <Box className={classes.wrap3}>
        <Container>
          <Grid container  justifyContent="center">
            <Grid items md={8}>
              <Box>
                <Typography variant="h3">
                  Top Cryptocurrency Conversions
                </Typography>
              </Box>
            </Grid>
           {/* <CryptoDropdown/> */}
           <Grid items md={4}>
        <Box>
          <Box
            className="navbar-nav flex-row"
            justifyContent="end"
            disablePadding
          >
            <Box class="nav-item dropdown" disablePadding>
              <List className="navbar-nav flex-row">
                <ListItem class="nav-item dropdown">
                  <Link
                    class="nav-link "
                    to=""
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{
                      textAlign: "end",
                      fontWeight: "lighter !important",
                    }}
                    onClick={(e) => {
                      setIsActive(!isActive);
                    }}
                  >
                    Buy With
                    <img
                      // src="https://static.binancecnt.com/static/land-page/fiat-icons/usd.png"
                      src={selected1}
                      alt=""
                      width="10%"
                      style={{ margin: "0 10px 0 20px" }}
                      onClick={(e) => {
                                setIsSelected1(e.target.textContent);
                                setIsActive1(!isActive1);
                              }}
                              
                    />
                    <span>{selected}</span>
                    <i class="bi bi-chevron-right"></i>
                  </Link>
                  <List class="dropdown-menu">
                    {Currency.map((e) => {
                      return (
                        <>
                          <ListItem sx={{ p: "0px" }}>
                            <Link
                              style={{ padding: "16px 10px" }}
                              class="dropdown-item"
                              to=""
                              onClick={(e) => {
                                setIsSelected(e.target.textContent);
                                setIsActive(!isActive);
                              }}
                            >
                              <img
                                src={e.img}
                                alt=""
                                style={{ width: "10%", margin: "0 10px" }}
                              />
                              {/* Buy With {" "} */}
                              {e.decs}
                            </Link>
                          </ListItem>
                        </>
                      );
                    })}
                  </List>
                </ListItem>
              </List>
            </Box>
          </Box>
        </Box>
      </Grid>
            {Data.map((item) => {
              return (
                <>
                  <Grid items md={2} >
                    <Box className={classes.bag2} textAlign="center">
                      <img src={item.img} alt="" />
                      <p>{item.decs}   <span>{selected}</span></p>
                    </Box>
                  </Grid>
                </>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Cryptocurrency;

//  {/* <FormControl fullWidth>
//                   <InputLabel id="demo-simple-select-label">Buy with</InputLabel>
//                   <Select
//                     labelId="demo-simple-select-label"
//                     id="demo-simple-select"
//                     value={value}
//                     variant="standard"
//                     onChange={handleChange}
//                   >
//                     <MenuItem value={10}>Ten</MenuItem>
//                     <MenuItem value={20}>Twenty</MenuItem>
//                     <MenuItem value={30}>Thirty</MenuItem>
//                   </Select>
//                 </FormControl> */}

//                 {/* <CryptoDropdown
//                   value={val}
//                   handleChange={handleChange}
//                   items={[
//                     {
//                       img: "https://static.binancecnt.com/static/land-page/fiat-icons/usd.png",
//                       key: "Last 7 Days",
//                       value: 7,
//                     },
//                     { key: "Last 28 Days", value: 28 },
//                     { key: "Last 90 Days", value: 90 },
//                   ]}
//                 /> */}

//   {/* <select>
//             {options.map((option) => (
//               <option value={option.value}>{option.label}</option>
//             ))}
//           </select> */}
//                  {/* {options.map((e) => {
//                         const {img,title,id} = e;
//                         console.log("xdfcgbhn",e);
//                   <ListItem key={id}>
//                     <Link class="dropdown-item" to="">
//   <img
//     src={img}
//     alt=""
// style={{ width: "10%", margin: "0 10px" }}
//                       />
//                       {title}
//                     </Link>
//                   </ListItem>
//                 })} */}