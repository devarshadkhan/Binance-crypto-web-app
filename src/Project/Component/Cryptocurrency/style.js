import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles((theme)=>({
  wrap3: {
    padding: "3rem 0",
    "& h3": {
      fontSize: "2.5rem",
      fontWeight: "bold",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1rem",
      },
    },
  },
  bag2:{
    margin:"3rem 23px 0 0",
    background:"rgba(250, 250, 250,0.9)",
    padding:"20px",
    "& img":{
        margin:" 0 0 1rem 0"
    },
    "& p":{
        fontSize:"13px"
    }
  }

}));