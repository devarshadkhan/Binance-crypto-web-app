import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];
const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
   <>
     <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}> </Box>
      <Box sx={{ my: 2,textAlign:{xs:"center"} }}>
        <img src="https://static.binancecnt.com/static/logo-v3.svg" alt="" />
      </Box>
      <Divider />
      <List>
        {/* {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))} */}
        <List className="navbar-nav " sx={{ flexDirection: { xs: "column",md:"row" }, textAlign:{xs:"center"} }}>
                <ListItem class="nav-item dropdown">
                  <Link
                    class="nav-link "
                    to=""
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Business
                  </Link>
                  <List class="dropdown-menu">
                    <ListItem >
                      <Link class="dropdown-item" to="/business">
                        On-ramps & off ramps
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link class="dropdown-item" to="/partner-us">
                        NFT Checkouts
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link class="dropdown-item" to="">
                        Partner with Us
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link class="dropdown-item" to="/merchant-portal">
                        Login to Merchant portal
                      </Link>
                    </ListItem>
                  </List>
                </ListItem>
                <ListItem class="nav-item dropdown">
                  <Link
                    class="nav-link "
                    to=""
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Personal
                  </Link>
                  <List class="dropdown-menu">
                    <ListItem>
                      <Link class="dropdown-item" to="/buy-sell-crypto">
                        Buy & Sell Crypto
                      </Link>
                    </ListItem>
                  </List>
                </ListItem>
                <ListItem class="nav-item dropdown">
                  <Link
                    class="nav-link "
                    to=""
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    About Us
                  </Link>
                  <List class="dropdown-menu">
                    <ListItem>
                      <Link class="dropdown-item"      to="/about-us">
                        About Binance Connect
                      </Link>
                    </ListItem>
                  </List>
                </ListItem>
                <ListItem class="nav-item dropdown">
                  <Link
                    class="nav-link "
                    to=""
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    English
                  </Link>
                </ListItem>
              </List>
      </List>
   
   </>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <>
      <Box sx={{ display: "flex", bgcolor: "#fff" }}>
        <AppBar component="nav" sx={{ bgcolor: "#fff", boxShadow: "none",position:"static" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none",color:"#000" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1, display: { xs: "block", sm: "block" },textAlign:{sx:"center"} }}>
             <Link to="/"> <img
                src="https://static.binancecnt.com/static/logo-v3.svg"
                alt=""
              /></Link>
            </Box>
            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              {/* {navItems.map((item) => ( */}

              <List className="navbar-nav flex-row">
                <ListItem class="nav-item dropdown">
                  <Link
                    class="nav-link "
                    to=""
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Business
                  </Link>
                  <List class="dropdown-menu">
                    <ListItem >
                      <Link class="dropdown-item" to="/business">
                        On-ramps & off ramps
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link class="dropdown-item" to="/partner-us">
                        NFT Checkouts
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link class="dropdown-item" to="">
                        Partner with Us
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link class="dropdown-item" to="/merchant-portal">
                        Login to Merchant portal
                      </Link>
                    </ListItem>
                  </List>
                </ListItem>
                <ListItem class="nav-item dropdown">
                  <Link
                    class="nav-link "
                    to=""
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Personal
                  </Link>
                  <List class="dropdown-menu">
                    <ListItem>
                      <Link class="dropdown-item" to="/buy-sell-crypto">
                        Buy & Sell Crypto
                      </Link>
                    </ListItem>
                  </List>
                </ListItem>
                <ListItem class="nav-item dropdown">
                  <Link
                    class="nav-link "
                    to=""
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    About Us
                  </Link>
                  <List class="dropdown-menu">
                    <ListItem>
                      <Link class="dropdown-item"      to="/about-us">
                        About Binance Connect
                      </Link>
                    </ListItem>
                  </List>
                </ListItem>
                <ListItem class="nav-item dropdown">
                  <Link
                    class="nav-link "
                    to=""
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    English
                  </Link>
                </ListItem>
              </List>
              {/* ))} */}
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </>
  );
};

export default Header;

//   {/* <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LOGO
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href=""
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LOGO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar> */}