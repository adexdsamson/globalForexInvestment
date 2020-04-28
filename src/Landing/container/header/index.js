import React from "react";
import {
  Box,
  makeStyles,
  Container,
  Typography,
  Avatar,
} from "@material-ui/core";
import IMG from "../../Assets/verne-ho-0LAJfSNa-xQ-unsplash.jpg";
import SignUp from "../../container/signUp";
import Login from "../../container/login";
import { logOut } from '../../../store/action';
import { useSpring, animated } from "react-spring";
import { getUserState, getLoginState, getSignUpState } from "../../../store/selector";
import { LOGIN_STATE, SIGN_UP, REMOVE_ERROR} from '../../../store/constant';
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  header: {
    color: "#fff",
    transition: "all 0.3s ease 0s",
    display: "inline-block",
    fontWeight: 400,
    width: "100%",
    [theme.breakpoints.down("md")]: {},
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
    height: 783,
    position: "absolute",
    zIndex: 12,
  },
  topbar: {
    position: "absolute",
    justifyContent: "space-between",
    justifyItems: "center",
    width: "100%",
    zIndex: 1000,
    paddingTop: 20,
    paddingBottom: 15,
    paddingLeft: 35,
    [theme.breakpoints.down("md")]: {
      paddingLeft: 15,
    },
  },
  toptext: {
    fontSize: "1.3rem",
    fontFamily: "'Raleway', sans-serif",
    fontWeight: "bolder",
    color: "#fff",
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
  },
  Intro: {
    position: "relative",
    background: `url(${IMG})`,
    width: "100%",
    height: 783,
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center top",
    textAlign: "center",
    paddingTop: "12.6rem",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      paddingTop: "10.6rem",
    },
  },
  content: {
    position: "relative",
    zIndex: 600,
  },
  h3: {
    color: "#fff",
    fontFamily: "'Oswald', sans-serif",
    textTransform: "uppercase",
    letterSpacing: ".4rem",
    paddingBottom: ".2rem",
    textShadow: "0 1px 2px #001835",
    [theme.breakpoints.down("md")]: {
      //fontSize: ".7rem",
      padding: 0,
      marginBottom: 12,
    },
  },
  h1: {
    fontFamily: "'Domine', serif",
    //fontSize: "4.3rem",
    lineHeight: 1.267,
    color: "#001835",
    padding: "0 12% .1rem",
    textShadow: "0 1px 3px rgba(0, 0, 0, 0.15)",
    [theme.breakpoints.down("md")]: {
      //fontSize: "1.9rem",
      padding: 0,
    },
  },
  action1: {
    color: "#fff",
    fontSize: "1rem",
    fontFamily: "'Raleway', sans-serif",
    cursor: "pointer",
    marginLeft: 15,
    borderLeft: "1px solid #fff",
    paddingLeft: 12,
    "&:hover": {
      borderLeft: "1px solid #001835",
      color: "#001835",
      textDecoration: "none",
    },
  },
  action2: {
    color: "#fff",
    fontSize: "1rem",
    fontFamily: "'Raleway', sans-serif",
    cursor: "pointer",
    marginLeft: 15,
    borderLeft: "1px solid #fff",
    paddingLeft: 12,
    "&:hover": {
      borderLeft: "1px solid #001835",
      color: "#001835",
      textDecoration: "none",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  user: {
    color: "#fff",
    fontSize: "1rem",
    fontFamily: "'Raleway', sans-serif",
    marginLeft: 15,

    paddingLeft: 12,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  box: {
    paddingTop: 12,
    position: "relative",
    zIndex: 600,
  },
  button: {
    border: "3px solid rgba(255, 255, 255, 0.6)",
    color: "white",
    backgroundColor: "transparent",
    textTransform: "uppercase",
    letterSpacing: ".3rem",
    height: "5.4rem",
    padding: "2rem 3rem 2rem ",
    cursor: "pointer",
    textAlign: "center",
    whiteSpace: "nowrap",
    "&:hover": {
      border: "3px solid #001835",
      color: "#001835",
    },
    [theme.breakpoints.down("md")]: {
      padding: "0rem .4rem .4rem ",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const user = useSelector(getUserState);
  const login = useSelector(getLoginState);
  const signUp = useSelector(getSignUpState);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch({ type: SIGN_UP })
    dispatch({ type: REMOVE_ERROR })
  };
  const props = useSpring({
    from: { opacity: 0, marginTop: -1000 },
    to: { opacity: 1, marginTop: 0 },
  });
  const handleCloseLogin = () => {
    dispatch({ type: LOGIN_STATE })
    dispatch({ type: REMOVE_ERROR })
  };

  return (
    <header className={classes.header}>
      <div className={classes.overlay}></div>
      <Container className={classes.topbar}>
        <Box display="inline-block">
          <Typography className={classes.toptext}>
            Global Forex Investment
          </Typography>
        </Box>
        {user.name ? (
          <Box style={{ float: "right" }} display="flex">
            <Avatar src={user.img} style={{ display: "flex" }} />

            <Typography className={classes.user} display="inline">
              {user.name}
            </Typography>
            <Typography
              onClick={() => dispatch(logOut())}
              className={classes.action1}
              display="inline"
            >
              LogOut
            </Typography>
          </Box>
        ) : (
          <Box style={{ float: "right" }} display="inline-block">
            <Typography
              onClick={() => dispatch({ type: LOGIN_STATE })}
              className={classes.action1}
              display="inline"
            >
              Login
            </Typography>

            <Typography
              onClick={() => dispatch({ type: SIGN_UP })}
              className={classes.action2}
              display="inline"
            >
              Register
            </Typography>
          </Box>
        )}
      </Container>
      <Box className={classes.Intro}>
        <animated.div style={props} className={classes.content}>
          <Typography variant="h6" className={classes.h3}>
            Welcome to global forex Investment
          </Typography>

          <Typography variant="h1" className={classes.h1}>
            The Most Reputable Source of Investment
          </Typography>
        </animated.div>
        <Box className={classes.box}>
          {user.name ? null : (
            <button onClick={() => dispatch({ type: SIGN_UP })} className={classes.button}>
              Create An Account
            </button>
          )}
        </Box>
      </Box>
      <SignUp open={signUp} handleClose={handleClose} />
      <Login open={login} handleClose={handleCloseLogin} />
    </header>
  );
};

export default Header;
