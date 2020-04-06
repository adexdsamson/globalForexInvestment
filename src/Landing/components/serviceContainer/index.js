import React from 'react';
import {Box, Typography, makeStyles } from '@material-ui/core';


const useStyle = makeStyles(them => ({
  root: {
    borderRight: '3px solid white',
    marginLeft: 12,
    textAlign: 'center',
    marginTop: '2rem'
  },
  icon: {
    width: 100,
    height: 100,
    paddingRight: 5
  },
  heading: {
    marginTop: 0,
    textTransform: 'uppercase',
    color: '#2b98f0',
    fontSize: '1.4rem',
    fontFamily: "'Domine', serif",
    letterSpacing: 2
  },

  line: {
    color: '#4a5060',
    marginTop: '4rem'
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: -15,
    marginRight: -15
  },
  p: {
    fontSize: '1.2rem',
    fontFamily: "'Raleway', sans-serif",
    color: '#999999'
  }
}))

const ServiceContainer = ({ title, body}) => {
  const classes = useStyle();
  return ( 
    <Box className='col-md-4 pb-5'>
      <Box className='media'>
        <div className="media-body text-white">
          <h5 className={classes.heading}>{title}</h5>
          <Typography className={classes.p}>
          {body}
          </Typography>
        </div>
      </Box>
    </Box>
   );
}
 
export default ServiceContainer;