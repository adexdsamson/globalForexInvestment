import React from "react";
import {Box, makeStyles, Container } from "@material-ui/core";
import Service from '../../presentations/serviceList';
import {service} from '../../Assets/variables';
import {Spring} from 'react-spring/renderprops';

const useStyles = makeStyles(theme => ({
  feature: {
    padding: '5rem 0',
    backgroundColor: '#fff',
    overflow: 'hidden',
    fontWeight: 400,
    position: 'relative',
    paddingBottom: '5rem',
    textAlign: 'center',
    [theme.breakpoints.down("md")]: {
      paddingTop: '4.2rem',
      paddingBottom: '2.8rem',
    }
  },
 
}));


const ServiceContainer = () => {
  const classes = useStyles();
  return (
    <Spring
      from={{opacity: 0}}
      to={{opacity: 1}}
      config={{delay: 1000, duration: 1000}}
    >
      {props => (
        <section style={props} className={classes.feature}>
          <Container>
              <Box className='row'>
                {service.length ?<Service views={service} /> : null}
              </Box>
            </Container>
        </section>)}
    </Spring>
  );
};

export default ServiceContainer;
