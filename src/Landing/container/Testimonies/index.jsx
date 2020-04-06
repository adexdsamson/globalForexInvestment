import React, { Component } from "react";
import { Container, withStyles, Typography} from "@material-ui/core";
import {testimonies} from '../../Assets/variables';
import Testimonies from '../../presentations/testimonyList';


const Style = {
  section: {
    position: "relative",
    backgroundColor: "#001835",
    padding: "7em 0",
    textAlign: "center"
  },
  subheading: {
    fontSize: 12,
    display: "block",
    fontWeight: 500,
    fontFamily: "'Oswald', sans-serif",
    textTransform: "uppercase",
    letterSpacing: 1,
    color: '#999999',
    marginBottom: 5,
    
  },
  text: {
    color: 'white',
    fontFamily: "'Domine', serif",
    letterSpacing: 1
  },
};



class Testimony extends Component {
  state = {};
  render() {
    let {
      props: { classes }
    } = this;
    return (
      <section className={classes.section}>
        <Container>
          <div className="row">
            <div className="col-12">
              <span className={classes.subheading}>Testimonies</span>
              <Typography variant="h2" className={classes.text}>
                Happy Customer
              </Typography>
            </div>
          </div>
          <div className='row mt-5'>
            <div className='col-12'>
             {testimonies.length ? <Testimonies views={testimonies} /> : null}
            </div>
          </div>
        </Container>
      </section>
    );
  }
}

export default withStyles(Style)(Testimony);
