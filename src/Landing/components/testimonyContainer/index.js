import React from "react";
import { makeStyles, Container, Typography } from "@material-ui/core";
//import Img from "../../Assets/intro-bg.jpg";
import { FormatQuote } from "@material-ui/icons";

const useStyle = makeStyles(theme => ({
  wrap: {
    display: "block",
    position: "relative",
    padding: "2rem 20px .5rem",
    fontSize: "16px",
    color: "rgba(255, 255, 255, 0.8)",
    borderRadius: 5,
    background: "#2b98f0",
    paddingBottom: "1.5rem"
  },
  icon: {
    position: "absolute",
    top: 20,
    right: 20,
    textAlign: "center",
    justifyContent: "center",
    display: "flex"
  },
  user: {
    width: 70,
    height: 70,
    position: "relative"
  },
  div: {
    display: "flex",
    textAlign: "center",
    marginBottom: ".5rem"
  },
  name: {
    fontWeight: 500,
    fontSize: '1.2em',
    fontFamily: "'Domine', serif",
    marginBottom: 0,
    color: "#fff"
  },
  position: {
    fontSize: 14,
    fontFamily: "'Oswald', sans-serif",
    color: "rgba(255, 255, 255, 0.7)"
  },
  p: {
    fontSize: '1.3rem',
    fontFamily: "'Raleway', sans-serif",
    paddingBottom: '1em'
  }
}));

const TestiContainer = ({ name, occupation, body}) => {
  const classes = useStyle();
  return (
    <div className={classes.wrap}>
      <div className={classes.icon}>
        <FormatQuote />
      </div>
      <div>
       
        <div className="pl-3">
          <Typography className={classes.name}>{name}</Typography>
          <Typography variant="subtitle2" className={classes.position}>
            {occupation}
          </Typography>
        </div>
      </div>
      <Container className='pl-4 pr-4'>
        <Typography className={classes.p}>
          {body}
        </Typography>
      </Container>
    </div>
  );
};

export default TestiContainer;
