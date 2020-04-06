import React, { Component } from "react";
import {
  Grid,
  Avatar,
  AppBar,
  Toolbar,
  Typography,
  Container,
  withStyles,
  TextField,
  Select,
  InputLabel,
  Button
} from "@material-ui/core";
import { storageRef } from "../../../firebase";
import { Person } from "@material-ui/icons";
import FileUploader from "react-firebase-file-uploader";

const style =(theme => ({
  nav: {
    position: "relative"
  },
  title: {
    fontSize: "20px",
    margin: 0,
    padding: 0,
    textTransform: "uppercase",
    fontWeight: "bold"
  },
  container: {
    paddingTop: 12
  },
  pic: {
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    background: "linear-gradient(top, #7579ff, #b224ef)",
    margin: "0 auto",
    marginBottom: "12px"
  },
  containerDate: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  button: {
    background: "linear-gradient(top, #7579ff, #b224ef)",
    color: '#fff'
  }
}));

class Profile extends Component {
  state = {
    selectedDate: ''
  };
  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };
  handleUploadSuccess = filename => {
    this.setState({ avatar: filename, progress: 100, isUploading: false });
    storageRef
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ avatarURL: url }));
  };
  componentDidMount() {
    let date = new Date('2014-08-18T21:11:54')
    this.setState({ selectedDate: date})
  }
  render() {
    const {
      props: { classes },
      state: { img, age },
      handleUploadError,
      handleUploadSuccess,
      handleChange
    } = this;
    return (
      <Grid container>
        <AppBar position="absolute" color="default" className={classes.nav}>
          <Toolbar>
            <Typography
              component="h1"
              color="inherit"
              className={classes.title}
              noWrap
            >
              Profile
            </Typography>
          </Toolbar>
        </AppBar>
        <Container className={classes.container}>
          {img ? (
            <Avatar style={{ width: 120, height: 120 }} src={img} />
          ) : (
            <label className={classes.pic}>
              <Person fontSize="large" />
              <FileUploader
                hidden
                accept="image/*"
                storageRef={storageRef}
                onUploadError={handleUploadError}
                onUploadSuccess={handleUploadSuccess}
              />
            </label>
          )}
          <form>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First name"
                  fullWidth
                  autoComplete="fname"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First name"
                  fullWidth
                  autoComplete="fname"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  id="datetime-local"
                  label="Date of birthday"
                  type="datetime-local"
                  defaultValue="2017-05-24T10:30"
                  className={classes.textField}
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="address"
                  label="Address"
                  fullWidth
                  autoComplete="billing address-line1"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="accNumber"
                  name="accountNumber"
                  label="Account Number"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <InputLabel htmlFor="age-native-simple">Bank</InputLabel>
                <Select
                  native
                  fullWidth
                  value={age}
                  onChange={handleChange}
                  inputProps={{
                    name: 'bank',
                    id: 'bank-native-simple',
                  }}
                >
                  <option value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </Select>
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <Button className={classes.button} fullWidth variant="contained">
                  Continue
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Grid>
    );
  }
}

export default withStyles(style)(Profile);
