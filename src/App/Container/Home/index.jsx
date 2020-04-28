import React, { Component } from "react";
import { Grid, Typography, Container, List } from "@material-ui/core";
import Header from "../../Components/home_header";
import Cards from "../../Components/home_card";
import Invest from "../../Presentation/InvestList";
import { getUserState } from '../../../store/selector';
import { Investment } from "../../Assets/variables";
import { connect } from 'react-redux';



class Home extends Component {
  state = {
    open: false
  };

  
  render() {
    let {props: {user}} = this
    return (
      <Grid container>
        <Header user={user} />
        <Cards />
        <Container style={{ marginTop: 12 }}>
          <Typography variant="subtitle1">Investment Plan</Typography>

          <List>
            <Invest
              views={Investment}
            />
          </List>

        </Container>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  user: getUserState(state).user
});

export default connect(mapStateToProps)(Home);
