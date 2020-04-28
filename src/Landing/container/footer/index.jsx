import React from "react";
import { makeStyles, Container, Typography, Avatar } from "@material-ui/core";
import { Email, Phone, LocationOn } from "@material-ui/icons";
import Img from '../../Assets/gfi_logo.jpeg';

const useStyles = makeStyles(theme => ({
  footer: {
    background: "#111111",
    position: "relative",
    zIndex: 0,
    overflow: "hidden",
    padding: "7em 0",
    [theme.breakpoints.down("md")]: {
      padding: "0",
     }
  },
  heading: {
    fontSize: "1.5rem",
    marginBottom: 30,
    fontFamily: "'Domine', serif",
    color: "#fff",
    position: "relative",
    fontWeight: 700,
    [theme.breakpoints.down("md")]: {
     marginTop: '2.5rem'
    }
  },
  body: {
    fontSize: "1.1rem",
    fontFamily: "'Raleway', sans-serif"
  },
  ul: {
    padding: 0
  },
  li: {
    display: "table",
    lineHeight: 1.5,
    marginBottom: 15
  },
  icon: {
    width: 40,
    fontSize: 18,
    paddingTop: 2,
    color: "white"
  },
  text: {
    fontSize: "1.1rem",
    display: "table-cell",
    fontFamily: "'Raleway', sans-serif",
    verticalAlign: "top",
    color: "white",
    paddingLeft: 19,
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
      paddingLeft: 13,
    }
  },
  copyRight: {
    color: "#999999",
    marginTop: 50,
    fontFamily: "'Raleway', sans-serif",
    fontSize: "1rem",
    [theme.breakpoints.down("md")]: {
      fontSize: ".7rem",
    }
  },
  logo: {
    width: '5rem',
    height: '5rem',
    marginBottom: '.6rem'
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container>
        <div className="row">
          <div className="col-md-6 text-white">
            <Typography variant="h2" className={classes.heading}>
              About Us
            </Typography>
            <Avatar src={Img} className={classes.logo} />
            <Typography className={classes.body}>
              Global Forex Investment (GFI) is a forex company using a short
              term investment model, we help our investors make forex trades to
              realise high returns as quick as possible. We have a good record of payment.
            </Typography>
          </div>
          <div className="col-md-6">
            <Typography variant="h2" className={classes.heading}>
              Have a Questions?
            </Typography>
            <div className="block-23">
              <ul className={classes.ul}>
                <li className={classes.li}>
                  <span className={classes.icon}>
                    <Phone />
                  </span>
                  <span className={classes.text}>+234 816 927 3038</span>
                </li>
                <li className={classes.li}>
                  <span className={classes.icon}>
                    <Email />
                  </span>
                  <span className={classes.text}>globalforexinvestment3@gmail.com</span>
                </li>
                <li className={classes.li}>
                  <span className={classes.icon}>
                    <LocationOn />
                  </span>
                  <span className={classes.text}>
                    18, adewole area, along Mongona Estate, oluyole extension, ibadan
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <div className="row mt-5">
        <div className="col-md-12 text-center">
          <Typography className={classes.copyRight}>
            Copyright &copy; All rights reserved | This website is created by {' '}
            <a style={{textDecoration: 'none'}} href="https://deola-adediran.firebaseapp.com" className="text-white">
             {" "} Deola Adediran
            </a>
          </Typography>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
