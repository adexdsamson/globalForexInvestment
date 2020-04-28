import React, { Component } from "react";
import {
  CircularProgress,
  Container,
  Box,
  Typography,
  withStyles
} from "@material-ui/core";

const useStyles = {
  root: {
    padding: "4em 0",
    position: "relative",
    backgroundColor: "#f8f9fa "
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    marginRight: -15,
    marginLeft: -15,
    justifyContent: "center"
  },
  col: {
    flex: "0 0 58.33333%",
    maxWidth: "58.33333%",
    position: "relative",
    width: "100%",
    minHeight: 1,
    paddingRight: 15,
    paddingLeft: 15
  },
  h2: {
    fontFamily: "'Domine', serif",
    marginBottom: "1.8rem",
    fontWeight: 900,
    color: "#1001835"
  },
  button2: {
    background: "#001835",
    color: "#FFFFFF",
    marginLeft: "auto",
    marginRight: "auto",
    textTransform: "uppercase",
    height: "4rem !important",
    lineHeight: "3rem !important",
    padding: "1rem 3rem !important",
    "&:hover": {
      border: "1px solid #001835",
      background: "transparent",
      color: "#001835"
    }
  }
};

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      email: "",
      lastName: "",
      comments: "",
      isLoading: false,
      subject: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }



  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    let {
      state: { isLoading, subject, email, comments, firstName, lastName },
      props: { classes },
      handleChange
    } = this;
    return (
      <section className={classes.root}>
        <Container>
          <Box className="row justify-content-center">
            <Box className="col-md-7">
              <Typography variant="h2" className={classes.h2}>
                Message Us
              </Typography>

              <form className={classes.form}>
                <div className="form-group row">
                  <div className="col-md-6 mb-3 mb-lg-0">
                    <input
                      type="text"
                      name="firstName"
                      onChange={handleChange}
                      className="form-control"
                      placeholder="First name"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      name="lastName"
                      type="text"
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-md-12">
                    <input
                      name="subject"
                      type="text"
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-md-12">
                    <input
                      name="email"
                      type="email"
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      id=""
                      name="comments"
                      cols="30"
                      onChange={handleChange}
                      rows="10"
                      placeholder="Write your message here."
                    ></textarea>
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-md-6">
                    {isLoading ? (
                      <CircularProgress />
                    ) : (
                      <a
                        className={classes.button2}
                        href={`mailto:globalforexinvestment3@gmail.com?subject=${subject}!&cc=${email}!&body='My name is ${firstName} ${lastName}, I need you for the following: ${comments}'`}
                      >
                        Send Message
                      </a>
                    )}
                  </div>
                </div>
              </form>
            </Box>
          </Box>
        </Container>
      </section>
    );
  }
}

export default withStyles(useStyles)(Contact);
