import React, { Component } from "react";
import {
  Grid,
  Box,
  Avatar,
  withStyles,
  TextField,
  Typography,
  Select,
  MenuItem,
  LinearProgress
} from "@material-ui/core";
import Img from "../../Assets/bg-01.jpg";
import { Person } from "@material-ui/icons";
import { navigate } from "@reach/router";
import compose from "recompose/compose";
import Button from "../../Components/button";
import { storageRef } from "../../../firebase";
import Loading from "../../Components/loader";
import FileUploader from "react-firebase-file-uploader";
import { connect } from 'react-redux';
import { signUp } from  '../../../store/action';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastName: "",
      firstName: "",
      accountNumber: "",
      email: "",
      password: "",
      img: "",
      bank: "",
      address: "",
      image: false,
      isLoading: false,
      open: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.img !== "") {
      this.setState({ isLoading: true });
      let update = {
        name: this.state.firstName + " " + this.state.lastName,
        imageURL: this.state.img
      };
      let data = {
        email: this.state.email,
        password: this.state.password,
        img: this.state.img,
        address: this.state.address,
        bank: this.state.bank,
        accNum: this.state.accountNumber
      }
      this.props.onSignUp(data, update)
      this.setState({ isLoading: false });
    } else {
      this.setState({ image: true });
    }
  };
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleProgress = progress => this.setState({ progress });

  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };
  handleUploadSuccess = filename => {
    storageRef
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ img: url }));
  };



  render() {
    let {
      props: { classes },
      state: { img, bank, image, isLoading, progress },
      handleUploadError,
      handleUploadSuccess,
      handleChange,
      handleSubmit
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
          <Box className={classes.containerLogin}>
            <Box className={classes.overlay}></Box>
            <Box className={classes.login}>
              <Grid item xs={12}>
                {isLoading ? <Loading /> : null}
                <LinearProgress variant="determinate" value={progress} />
                <form onSubmit={handleSubmit} className={classes.form}>
                  {image ? (
                    <h6
                      style={{ color: "rgb(139, 10, 10)", textAlign: "center" }}
                    >
                      please upload profile picture
                    </h6>
                  ) : null}
                  {img ? (
                    <Box className={classes.pic}>
                      <Avatar style={{ width: 120, height: 120 }} src={img} />
                    </Box>
                  ) : (
                    <label className={classes.pic}>
                      <Person fontSize="large" />
                      <FileUploader
                        hidden
                        accept="image/*"
                        storageRef={storageRef}
                        onUploadError={handleUploadError}
                        onUploadSuccess={handleUploadSuccess}
                        onProgress={this.handleProgress}
                      />
                    </label>
                  )}

                  <span className={classes.formTitle}>Sign Up</span>

                  <div className="row">
                    <div className="col-md-6">
                      <TextField
                        fullWidth
                        name="firstName"
                        required
                        className={classes.input}
                        variant="outlined"
                        label="First Name"
                        autoComplete="fname"
                        type="text"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <TextField
                        fullWidth
                        name="lastName"
                        required
                        className={classes.input}
                        variant="outlined"
                        type="text"
                        label="Last Name"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <TextField
                        fullWidth
                        required
                        name="email"
                        type="email"
                        className={classes.input}
                        variant="outlined"
                        label="Email"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <TextField
                        fullWidth
                        required
                        name="password"
                        color="secondary"
                        className={classes.input}
                        variant="outlined"
                        type="password"
                        label="Password"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <TextField
                        required
                        id="accNumber"
                        className={classes.input}
                        name="accountNumber"
                        minLength="10"
                        maxLength="10"
                        label="Account Number"
                        type="number"
                        variant="outlined"
                        fullWidth
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <Select
                        name="bank"
                        required
                        fullWidth
                        variant="outlined"
                        value={bank}
                        label="Select a bank"
                        className={classes.input}
                        onChange={handleChange}
                        inputProps={{
                          name: "bank",
                          id: "bank-native-simple"
                        }}
                      >
                        <MenuItem value="gtbank">GTBANK</MenuItem>
                        <MenuItem value="firstBank">FIRST BANK</MenuItem>
                        <MenuItem value="access">ACCEESS BANK</MenuItem>
                      </Select>
                    </div>
                  </div>

                  <TextField
                    required
                    id="address"
                    name="address"
                    variant="outlined"
                    className={classes.input}
                    label="Address"
                    type="text"
                    fullWidth
                    onChange={handleChange}
                    autoComplete="billing address-line1"
                  />

                  <Box className={classes.Button}>
                    <Button name="Sign Up" />
                    <Typography
                      variant="h6"
                      className={classes.text}
                      onClick={() => navigate('/app')}
                    >
                      {" "}
                      Login{" "}
                    </Typography>
                  </Box>
                </form>
              </Grid>
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
  containerLogin: {
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
    backgroundColor: "#00183",
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
    zIndex: -1
  },
  login: {
    width: "350px",
    borderRadius: "10px",
    overflow: "scroll",
    padding: "35px 15px 37px 15px",
    height: "90%",
    background: "#fff",
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
  input: {
    color: "#fff !important",
    marginTop: 10
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
    backgroundColor: "#001835",
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
  pic: {
    color: "#fff",
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
  text: {
    color: '#000',
    fontSize: '1rem',
    cursor: 'pointer',
    marginTop: 12
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onSignUp: data => {
      dispatch(signUp(data));
    },
  }
};

export default compose(withStyles(Style), connect(null, mapDispatchToProps))(SignUp);
