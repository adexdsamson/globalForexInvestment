import React from "react";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  wrapInput: {
    wrap: {
      width: "100%",
      position: "relative",
      borderBottom: "2px solid rgba(255,255,255,0.24)",
      marginBottom: "30px"
    }
  },
  input100: {
    fontFamily: "Poppins-Regular",
    fontSize: "16px",
    color: "#fff",
    lineHeight: "1.2",
    display: "block",
    width: "100%",
    height: "45px",
    background: "transparent",
    padding: "0 5px 0 38px",
    ":focus": {
      paddingLeft: "5px"
    },
    ":focus + ::after": {
      top: "-22px",
      fontSize: "18px"
    },
    ":focus + ::before": {
      width: "100%"
    }
  },
  focusInput: {
    position: "absolute",
    display: "block",
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    
    bottom: "-2px",
    webkitTransition: "all 0.4s",
    oTransition: "all 0.4s",
    mozTransition: "all 0.4s",
    transistion: "all 0.4s",
    background: "#fff",
    fontFamily: "Material-Design-Iconic-Font",
    fontSize: "22px",
    color: "#fff",
    content: "attr(data-placeholder}",
    top: "6px",
    left: "0px",
    paddingLeft: "5px",
  
  }
}));

const Input = ({ name, type, placeholder, data }) => {
  const classes = useStyles();
  return (
    <Box className={classes.wrapInput}>
      <input
        className={classes.input100}
        placeholder={placeholder}
        type={type}
        name={name}
      />
      <span className={classes.focusInput} data-placeholder={data}></span>
    </Box>
  );
};

export default Input;
