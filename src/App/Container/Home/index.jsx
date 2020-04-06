import React, { Component } from "react";
import { Grid, Typography, Container, List } from "@material-ui/core";
import Header from "../../Components/home_header";
import Cards from "../../Components/home_card";
import Invest from "../../Presentation/InvestList";
import { Transaction, Card } from "paystack-js";
import {
  Investment,
  paymentDetails,
  paymentMethods,
  paymentOptions
} from "../../Assets/variables";
import Alert from "../../Components/alert";


const getInvestment = id => Investment.filter(item => item.id === id);


class Home extends Component {
  state = {
    open: false
  };

  handleInvestments = async id => {
    let array = getInvestment(id);
    let data = array[0];
    const request = new PaymentRequest(
      paymentMethods,
      paymentDetails(data.actual),
      paymentOptions
    );
    let response = await await request.show();
    response.complete("success");
    const card = new Card({
      number: response.details.cardNumber,
      cvv: response.details.cardSecurityCode,
      month: response.details.expiryMonth,
      year: response.details.expiryYear
    });
    const requestData = {
      email: response.payerEmail,
      amount: data.actual, // amount in kobo
      key: "pk_test_b50749be2f1d9278e1fa3ebd75ec17bfd1ec3b42"
    };

    const transaction = await Transaction.request(requestData);
    const charge = await transaction.setCard("card", card);

    const chargeResponse = await charge.chargeCard();
    if (chargeResponse.status === "success") {
      this.setState({ open: !this.state.open });
    }
  };

  handleBitcoin = id => { console.log('bitcoin payment')};
  render() {
    let { handleInvestments, handleBitcoin } = this;
    return (
      <Grid container>
        <Header />
        <Cards />
        <Container style={{ marginTop: 12 }}>
          <Typography variant="subtitle1">Investment Plan</Typography>

          <List>
            <Invest
              views={Investment}
              onPay={handleInvestments}
              onBit={handleBitcoin}
            />
          </List>

          <Alert body={"Payment Successful"} />
        </Container>
      </Grid>
    );
  }
}

export default Home;
