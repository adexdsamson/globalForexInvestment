import React, { Component } from "react";
import { Grid, Box, withStyles, TextField, Typography } from "@material-ui/core";
import { navigate } from "@reach/router";
import Img from "../../Assets/bg-01.jpg";
import compose from "recompose/compose";
import Button from "../../Components/button";
import Auth from '../../Action/AuthService';
import UserStores from "../../../store";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoading: false,
      user: {}
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount(){
    UserStores.on("change", () => {
      this.setState({user: UserStores.getUser()});
    });
  }

  componentWillUnmount() {
    UserStores.on("change", () => {
      this.setState({user: UserStores.getUser()});
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ isLoading: true });
    Auth.login(this.state.email, this.state.password)
    
    this.setState({ isLoading: false });
  };

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    let {
      props: { classes },
      handleSubmit,
      handleChange
    } = this;
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignContent="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <Box className={classes.limiter}>
          <Box className={classes.container}>
            <Box className={classes.overlay}></Box>
            <Box className={classes.login}>
              <form onSubmit={handleSubmit} className={classes.form}>
                <span className={classes.formLogo}></span>

                <span className={classes.formTitle}>Login</span>

                <TextField
                  name="email"
                  fullWidth
                  required
                  variant="outlined"
                  className={classes.input}
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                />

                <TextField
                  name="password"
                  fullWidth
                  required
                  variant="outlined"
                  className={classes.input}
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                />

                <Box alignItems="center" className={classes.Button}>
                  <Button name="Login" />
                  <Typography
                    variant="h6"
                    className={classes.text}
                    onClick={() => navigate('/app/sign_up')}
                  >
                    {" "}
                    Sign Up{" "}
                  </Typography>
                </Box>
              </form>
            </Box>
          </Box>
        </Box>
      </Grid>
    );
  }
}

const Style = {
  limiter: {
    width: "100%",
    margin: "0 auto"
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    padding: "15px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "relative",
    zIndex: "1",
    left: "0",
    top: "0",
    height: "100vh",
    background: "rgba(212, 208, 208)",
    backgroundImage: `url(${Img})`
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: "100%",
    background: "#111111",
    opacity: 0.85,
    zIndex: -2
  },
  login: {
    width: "300px",
    borderRadius: "10px",
    overflow: "hidden",
    padding: "35px 15px 37px 15px",
    height: "33rem",
    background: "rgba(212, 208, 208)"
  },
  form: {
    width: "100%",
    textAlign: "center"
  },
  Button: {
    marginTop: 60,
    marginRight: 12,
    marginLeft: 12,
    textAlign: "center"
  },
  input: {
    color: "#fff !important",
    marginTop: 20
  },
  formLogo: {
    fontSize: "60px",
    color: "#333333",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    background: "#001835",
    margin: "0 auto",
    marginBottom: "12px"
  },
  formTitle: {
    fontFamily: "Poppins-Medium",
    fontSize: "30px",
    color: "#fff",
    lineHeight: "1.2",
    textAlign: "center",
    textTransform: "uppercase",
    display: "block",
    marginBottom: "15px"
  },
  copyRight: {
    color: "#fff"
  },
  text: {
    color: '#000',
    fontSize: '1rem',
    cursor: 'pointer',
    marginTop: 12
  }
};

export default compose(withStyles(Style))(Login);
