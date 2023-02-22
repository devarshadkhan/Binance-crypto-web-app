// import React, { useState } from "react";
// import {
//   Box,
//   Container,
//   Grid,
//   Typography,
//   InputLabel,
//   MenuItem,
//   FormControl,
//   Select,
//   ListItem,
//   List,
// } from "@mui/material";
// import { Link } from "react-router-dom";
// const Currency = [
//   {
//     id: 1,
//     img: "https://static.binancecnt.com/static/land-page/fiat-icons/usd.png",
//     decs: "USD",
//   },
//   {
//     id: 2,
//     img: "https://static.binancecnt.com/static/land-page/fiat-icons/eur.png",
//     decs: "EUR",
//   },
//   {
//     id: 3,
//     img: "https://static.binancecnt.com/static/land-page/fiat-icons/php.png",
//     decs: "PHP",
//   },
//   {
//     id: 4,
//     img: "https://static.binancecnt.com/static/land-page/fiat-icons/aud.png",
//     decs: "AUD",
//   },
//   {
//     id: 4,
//     img: "https://static.binancecnt.com/static/land-page/fiat-icons/gbp.png",
//     decs: "GBP",
//   },
//   {
//     id: 4,
//     img: "https://static.binancecnt.com/static/land-page/fiat-icons/rub.png",
//     decs: "RUB",
//   },
// ];
// const cryptoDropdown = () => {
//   // const [isActive, setIsActive] = useState(false);
//   // const [selected, setIsSelected] = useState("USD");
//   const [isActive,setIsActive] = useState(false);
//   const [isActive1,setIsActive1] = useState(false);
//   const [selected,setIsSelected] = useState("USD");
//   const [selected1,setIsSelected1] = useState("https://static.binancecnt.com/static/land-page/fiat-icons/usd.png");
//   // const [selected1,setIsSelected1] = useState(img)
//   function handleBlur(e) {
//     console.log("wedfvhjio",e);
//   }
//   return (
//     <>
//       <Grid items md={4}>
//         <Box>
//           <Box
//             className="navbar-nav flex-row"
//             justifyContent="end"
//             disablePadding
//           >
//             <Box class="nav-item dropdown" disablePadding>
//               {/* <List class="dropdown-menu">
//                       <ListItem>
//                         <Link class="dropdown-item" to="">
//                           <img
//                             src="https://static.binancecnt.com/static/land-page/fiat-icons/usd.png"
//                             alt=""
//                             style={{ width: "10%", margin: "0 10px" }}
//                           />
//                           Buy With USD
//                         </Link>
//                       </ListItem>
//                       <ListItem>
//                         <Link class="dropdown-item" to="">
//                           <img
//                             src="https://static.binancecnt.com/static/land-page/fiat-icons/eur.png"
//                             alt=""
//                             style={{ width: "10%", margin: "0 10px" }}
//                           />
//                           Buy With EUR
//                         </Link>
//                       </ListItem>
//                     </List> */}

//               <List className="navbar-nav flex-row">
//                 <ListItem class="nav-item dropdown">
//                   <Link
//                     class="nav-link "
//                     to=""
//                     role="button"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                     style={{
//                       textAlign: "end",
//                       fontWeight: "lighter !important",
//                     }}
//                     onClick={(e) => {
//                       setIsActive(!isActive);
//                     }}
//                   >
//                     Buy With
//                     <img
//                       // src="https://static.binancecnt.com/static/land-page/fiat-icons/usd.png"
//                       src={selected1}
//                       alt=""
//                       width="10%"
//                       style={{ margin: "0 10px 0 20px" }}
//                       onClick={(e) => {
//                                 setIsSelected1(e.target.textContent);
//                                 setIsActive1(!isActive1);
//                               }}
                              
//                     />
//                     <span>{selected}</span>
//                     <i class="bi bi-chevron-right"></i>
//                   </Link>
//                   <List class="dropdown-menu">
//                     {Currency.map((e) => {
//                       return (
//                         <>
//                           <ListItem sx={{ p: "0px" }}>
//                             <Link
//                               style={{ padding: "16px 10px" }}
//                               class="dropdown-item"
//                               to=""
//                               onClick={(e) => {
//                                 setIsSelected(e.target.textContent);
//                                 setIsActive(!isActive);
//                               }}
//                             >
//                               <img
//                                 src={e.img}
//                                 alt=""
//                                 style={{ width: "10%", margin: "0 10px" }}
//                               />
//                               {/* Buy With {" "} */}
//                               {e.decs}
//                             </Link>
//                           </ListItem>
//                         </>
//                       );
//                     })}
//                   </List>
//                 </ListItem>
//               </List>
//             </Box>
//           </Box>
//         </Box>
//       </Grid>
//     </>
//   );
// };

// export default cryptoDropdown;
