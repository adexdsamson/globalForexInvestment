import React, { Component } from "react";
import { withStyles, Container, Typography } from "@material-ui/core";
import Price from "../../presentations/priceList";
import { price } from "../../Assets/variables";
import { onPayment } from "../../../firebase";
import UserStores from "../../../store";
import { Alert } from "react-bootstrap";

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
  state = { value: "", open: false, body: "" };

  handleClickOpen = () => {};

  handleClose = (value) => {
    this.setState({ open: false });
    this.setState({ value: value });
  };

  handleInvestment = async (id) => {
    const user = UserStores.getUser();
    if (!user.name) {
      console.log("Login or Register");
    } else {
      let array = getInvestment(id);
      let data = array[0];
      onPayment(data)
        .then((res) => console.log(res))
        .catch((e) => console.log(e));
    }
  };

  handleBitcoinPayment = () => {
    console.log("bitcoin payment");
  };

  render() {
    let {
      props: { classes },

      handleInvestment,
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
                <Price views={price} onPay={handleInvestment} />
              ) : null}
            </div>
          </div>
          <Alert headers='Login' />
        </Container>
      </section>
    );
  }
}

export default withStyles(Styles)(Pricing);
