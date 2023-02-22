import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Project/Pages/Home/Home";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import OffRampOnRamp from "./Project/Pages/OffRampOnRamp/OffRampOnRamp";
import PartnerWithUs from "./Project/Pages/PartnerWithUs/PartnerWithUs";
import BuyingCrypto from "./Project/Pages/BuyingCrypto/BuyingCrypto";
import About from "./Project/Pages/About/About";
import PrivacyPolicy from "./Project/Pages/PrivacyPolicy/PrivacyPolicy";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MerchantPortal from "./Project/Pages/MerchantPortal/MerchantPortal";

const styles = (theme) => ({
  root: {
    [theme.breakpoints.down('md')]: {
     
    },
    [theme.breakpoints.up('md')]: {
     
    },
    [theme.breakpoints.up('lg')]: {

    },
  },
});

function App() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  console.log("djytfhj",matches)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/business" element={<OffRampOnRamp />} />
          <Route path="/partner-us" element={<PartnerWithUs />} />
          <Route path="/buy-sell-crypto" element={<BuyingCrypto />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/merchant-portal" element={<MerchantPortal/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;