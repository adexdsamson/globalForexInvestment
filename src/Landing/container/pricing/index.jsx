import React, { Component } from "react";
import { withStyles, Container, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@material-ui/core";
import Price from "../../presentations/priceList";
import { price } from "../../Assets/variables";
import { connect } from 'react-redux';
import { Alert } from "react-bootstrap";
import { getUserState, getDialogState } from "../../../store/selector";
import { compose } from "recompose";
import { DIALOG } from "../../../store/constant";

const Styles = {
  section: {
    background: "#e2e5e7",
    paddingTop: "5rem",
    paddingBottom: "5rem",
  },
  heading: {
    marginTop: 0,
    fontFamily: "'Oswald', sans-serif",
  },
  priceContent: {
    marginTop: "3rem",
    maxWidth: 1080,
    width: "100%",
    textAlign: "center",
    margin: "0 auto",
  },
  Intro: {
    maxWidth: 840,
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
  },
};

const getInvestment = (id) => price.filter((item) => item.id === id);

class Pricing extends Component {

  handlePayment = id => {
    if (this.props.user.name) {
      const array = getInvestment(id);
      let link = array[0].link
      window.open(link)
    } else {
      this.props.onAlert()
    }
  }

  handleClose = () => {
    this.props.onAlert()
  };


  render() {
    let {
      props: { classes, user, open },
      handleClose,
    } = this;
    return (
      <section className={classes.section}>
        <Container className={classes.Intro}>
          <Typography variant="h2" className={classes.heading}>
            Plans and Pricing.
          </Typography>
        </Container>
        <Container>
          <div className={classes.priceContent}>
            <div className="row justify-content-center">
              {price.length ? (
                <Price views={price} user={user} onPay={this.handlePayment} />
              ) : null}
            </div>
            
          </div>
          <Alert headers='Login' />
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle> Please Register or Login </DialogTitle>
            <DialogContent>
              You are seeing this dialog, for you have not registered or logged in your account
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
              I understand
            </Button>
            </DialogActions>
          </Dialog>
        </Container>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  user: getUserState(state),
  open: getDialogState(state)
});

const mapDispatchToProps = dispatch => {
  return {
    onAlert: () => {
      dispatch({ type: DIALOG })
    }
  }
}

export default compose(withStyles(Styles), connect(mapStateToProps, mapDispatchToProps))(Pricing);
