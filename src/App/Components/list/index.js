import React, { useState } from "react";
import {
  Typography,
  Button,
  makeStyles,
  Paper,
  Box,
 
} from "@material-ui/core";

const style = makeStyles(theme => ({
  card: {
    width: "49%",
    height: 210,
    textAlign: "center",
    paddingTop: 5
  },
  button: {
    background: "#001835",

    color: "#fff",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "0rem 3rem !important",
    "&:hover": {
      border: "1px solid #001835",
      background: "transparent",
      color: "#001835"
    }
  },
  text: {
    fontSize: ".9rem",
    fontWeight: "bold",
    color: "#2b98f0",
    fontFamily: "'Oswald', sans-serif",
    textTransform: "uppercase",
    marginBottom: 12
  },
  subtext: {
    fontSize: "1.5rem"
  },
  features: {
    listStyle: "none",
    fontFamily: "'Raleway', sans-serif",
    fontSize: ".8rem",
    color: "rgba(0, 0, 0, 0.5)",
    margin: "0 0 1rem 0"
  },
  li: {
    padding: ".2rem 0",
    borderBottom: "1px solid rgba(63, 80, 96, 0.15)"
  },
  strong: {
    fontFamily: '"roboto-black", serif',
    color: "#001835",
    marginRight: 5
  },
  box: {
    textAlign: "center",
    width: "100%"
  },
  group: {
    display: "inline",
    flexDirection: "column",
    alignItems: "center"
  },
  btnGroup: {
    padding: "0rem 3rem !important",
    border: "1px solid #001835",
    display: "inline-block",
    fontSize: 12,
    paddingLeft: 12,
    paddingRight: 12
  }
}));

const ListContainer = ({
  name,
  bitcoin,
  pay,
  amount,
  earn,
  month,
  day,
  id
}) => {
  const classes = style();
  const [button, setButton] = useState(false);
  return (
    <Paper elevation={3} id={id} className={classes.card}>
      <Typography className={classes.text}>{name}</Typography>
      <Typography className={classes.subtext}>
        <sup>&#8358;</sup>
        {amount}
      </Typography>
      <div className={classes.priceBott}>
        <ul className={classes.features}>
          <li className={classes.li}>
            <strong className={classes.strong}>Earn</strong> &#8358;{earn}
          </li>
          <li className={classes.li}>
            <strong className={classes.strong}>Months</strong> {month}
          </li>
          <li className={classes.li}>
            <strong className={classes.strong}>Days</strong> {day}
          </li>
        </ul>
        <Box className={classes.box}>
          {button ? (
            <div className="btn-group" role="group" aria-label="Basic example">
              <button onClick={pay} type="button" className="btn button1">
                Credit card
              </button>
              <button onClick={bitcoin} type="button" className="btn button1">
                bitcoin
              </button>
            </div>
          ) : (
            <Button onClick={() => setButton(true)} className={classes.button}>
              purchase
            </Button>
          )}
        </Box>
      </div>
    </Paper>
  );
};

export default ListContainer;
