import React, { Component } from "react";
import {
  Grid,
  Box,
  withStyles,
  TextField,
  Backdrop,
  Typography
} from "@material-ui/core";

import compose from "recompose/compose";
import Button from "../../components/button";
import Auth from '../../Action/AuthService';
import Loading from "../../components/loader";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoading: false,
    };
    this.handleChange = this.handleChange.bind(this);
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
      state: { isLoading },
      handleChange,
      handleSubmit
    } = this;
    return (
      <Backdrop
        className={classes.backdrop}
        open={this.props.open}
      >
        <Box className={classes.login}>
          <Grid item xs={12}>
            {isLoading ? <Loading /> : null}
            <form onSubmit={handleSubmit} className={classes.form}>
              <span className={classes.formLogo}></span>

              <span className={classes.formTitle}>Login</span>

              <TextField
                fullWidth
                required
                name="email"
                className={classes.input}
                variant="outlined"
                type='email'
                label="Email"
                onChange={handleChange}
              />

              <TextField
                fullWidth
                name="password"
                required
                color="secondary"
                className={classes.root}
                variant="outlined"
                type="password"
                label="Password"
                onChange={handleChange}
              />

              <Box className={classes.Button}>
                <Button name="Login" />
                <Typography
                  variant="h6"
                  className={classes.text}
                  onClick={this.props.handleClose}
                >
                  {" "}
                  close{" "}
                </Typography>
              </Box>
            </form>
          </Grid>
        </Box>
      </Backdrop>
    );
  }
}

const Style = {
  backdrop: {
    zIndex: 1000,
    color: "#fff"
  },
  login: {
    width: "300px",
    borderRadius: "10px",
    overflow: "hidden",
    padding: "35px 15px 37px 15px",
    height: "33rem",
    background: "rgba(212, 208, 208)",
    border: "1px solid #001835"
  },
  form: {
    width: "100%"
  },
  Button: {
    marginTop: 60,
    marginRight: 12,
    marginLeft: 12,
    textAlign: "center"
  },
  root: {
    color: "#fff !important",
    marginTop: 10
  },
  formLogo: {
    fontSize: "60px",
    color: "#001835",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    backgroundColor: "#001835",
    margin: "0 auto",
    marginBottom: "12px"
  },
  formTitle: {
    fontFamily: "'Domine', serif",
    fontSize: "1rem",
    color: "#000",
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
    fontSize: '.9rem',
    cursor: 'pointer'
  }
};

export default compose(withStyles(Style))(Login);
