import { makeStyles } from "@mui/styles";
import { borderTop } from "@mui/system";


export const useStyle = makeStyles({
  wrap4: {
    padding: "4rem 0 2rem",
        "& p":{
            textAlign:"center",
            marginTop:"2rem",
            paddingTop:"1.4rem",
            color:"rgba(183, 189, 198,0.8)",
            borderTop:"1px solid rgba(183, 189, 198,0.3)"
        }
  },
  bag4: {
    margin: "2rem 0",
    "& i": {
      color: "#929AA5",
      margin: "0 1rem",
      cursor:"pointer"
    },
    "& i:hover": {
      color: " rgb(240, 185, 11)",
      transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
      cursor:"pointer"
    },
  },
  bag6: {
    "& ul li": {
        display:"block !important",
        // textAlign:"end"
    },
    "& ul li a": {
      textDecoration: "none",
      color: "rgba(112, 122, 138,0.6)",
      fontSize: "13px",
      padding: "6px",
    },
  },
});