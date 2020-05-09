import React, { Component } from "react";
import {
  Grid,
  Box,
  Avatar,
  withStyles,
  TextField,
  Backdrop,
  Typography,
  Select,
  MenuItem
} from "@material-ui/core";
import { Alert } from '@material-ui/lab';
import { Person } from "@material-ui/icons";
import FileUploader from "react-firebase-file-uploader";
import compose from "recompose/compose";
import Button from "../../components/button";
import { storageRef } from "../../../firebase";
import Loading from "../../components/loader";
import { signUp } from  '../../../store/action';
import { connect } from 'react-redux';
import { getErrorState, getMessageState } from "../../../store/selector";

const array = [
  {
    name: 'Access Bank Plc',
    value: '044'
  },
  {
    name: 'Access Bank Plc (Diamond)',
    value: '063'
  },
  {
    name: 'Ecobank Nigeria',
    value: '050'
  },
  {
    name: 'Fidelity Bank Plc',
    value: '070'
  },
  {
    name: 'First Bank of Nigeria',
    value: '011'
  },
  {
    name: 'FCMB',
    value: '214'
  },
  {
    name: 'Guaranty Trust Bamk',
    value: '058'
  },
  {
    name: 'Heritage Bank',
    value: '030'
  },
  {
    name: 'keystone Bank',
    value: '082'
  },
  {
    name: 'Polaris Bank',
    value: '076'
  },
   {
    name: 'Sterling Bank',
    value: '232'
  }, {
    name: 'Stanbic Bank',
    value: '039'
  },
  {
    name: 'Union Bank',
    value: '033'
  },
  {
    name: 'Wema Bank',
    value: '035'
  },
  {
    name: 'Zenith Bank',
    value: '057'
  },
  {
    name: 'United Bank of Africa',
    value: '033'
  },
]

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastName: "",
      firstName: "",
      accountNumber: "",
      phoneNumber: '',
      email: "",
      password: "",
      img: "",
      bank: "",
      address: "",
      image: false,
      isLoading: false,
      open: false,
      error: null
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
        phoneNumber: this.state.phoneNumber,
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
      props: { classes, error, message  },
      state: { img, bank, image, isLoading },
      handleUploadError,
      handleUploadSuccess,
      handleChange,
      handleSubmit
    } = this;
    let menu = array.map(item => (
      <MenuItem key={item.name} value={item.value}>{item.name}</MenuItem>
    ))
    let alert = error ? (<Alert className={classes.alert} severity="error"> { message } </Alert>): null;
    return (
      <Backdrop className={classes.backdrop} open={this.props.open}>
        <Box className={classes.login}>
          { alert }
          <Grid item xs={12}>
            {isLoading ? <Loading /> : null}  
            <form onSubmit={handleSubmit} className={classes.form}>
              {image ? (
                <h6 style={{ color: "rgb(139, 10, 10)", textAlign: "center" }}>
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
                    beforeUploadStart={file => {if (file.size < 5 * 1024 * 1024 ) throw Error('File too large')}}
                    storageRef={storageRef}
                    onUploadError={handleUploadError}
                    onUploadSuccess={handleUploadSuccess}
                    metadata={{
                      contentType: 'image',
                      size: 5000
                    }}
                  />
                </label>
              )}

              <span className={classes.formTitle}>Sign Up</span>
            
              <TextField
                fullWidth
                name="firstName"
                required
                className={classes.root}
                variant="outlined"
                label="First Name"
                autoComplete="fname"
                type="text"
                onChange={handleChange}
              />
            
            
              <TextField
                fullWidth
                name="lastName"
                required
                className={classes.root}
                variant="outlined"
                type="text"
                label="Last Name"
                onChange={handleChange}
              />
            
              <TextField
                fullWidth
                name="phoneNumber"
                required
                className={classes.root}
                variant="outlined"
                type="tel"
                label="Phone Number"
                onChange={handleChange}
              />

          
              <TextField
                fullWidth
                required
                name="email"
                type="email"
                className={classes.root}
                variant="outlined"
                label="Email"
                onChange={handleChange}
              />
          
            
              <TextField
                fullWidth
                required
                name="password"
                color="secondary"
                className={classes.root}
                variant="outlined"
                type="password"
                label="Password"
                onChange={handleChange}
              />



              <TextField
                required
                id="accNumber"
                className={classes.root}
                name="accountNumber"
                minLength="10"
                maxLength="10"
                label="Account Number"
                type="number"
                variant="outlined"
                fullWidth
                onChange={handleChange}
              />

              <Select
                name="bank"
                required
                fullWidth
                variant="outlined"
                value={bank}
                placeholder="Select a bank"
                className={classes.root}
                onChange={handleChange}
                inputProps={{
                  name: "bank",
                  id: "bank-native-simple"
                }}
              >
                {menu}
              </Select>

              <TextField
                required
                id="address"
                name="address"
                variant="outlined"
                className={classes.root}
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
    width: "350px",
    borderRadius: "10px",
    overflow: "scroll",
    padding: "35px 15px 37px 15px",
    height: "90%",
    background: "#fff",
    border: "1px solid #001835",
    '&::-webkit-scrollbar':{
      display: 'none'
    }
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
    marginTop: 10
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
    color: "#000",
    fontSize: "1rem",
    cursor: "pointer",
    marginTop: 12
  }
};

const mapStateToProps = state => ({
  error: getErrorState(state),
  message: getMessageState(state)
})

const mapDispatchToProps = dispatch => {
  return {
    onSignUp: (data, update) => {
      dispatch(signUp(data, update));
    },
  }
};

export default compose(withStyles(Style), connect(mapStateToProps, mapDispatchToProps))(SignUp);
