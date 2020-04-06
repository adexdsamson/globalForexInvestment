import React, { Fragment } from 'react';
import { makeStyles, Avatar, Typography, Container } from '@material-ui/core';
import Img from '../../Assets//zachary-nelson.jpg';
import {info, infoHeader, infoText} from '../../Assets/variables';

const useStyles = makeStyles(theme => ({
  infos: {
    backgroundColor: 'white'
  },
  infoEntry: {
    position: 'relative'
  },
  halfGrey: {
    width: '50%',
    height: '100%',
    position: 'absolute',
    left: '50%',
    top: 0,
    backgroundColor: 'rgba(63, 80, 96, 0.15)',
    [theme.breakpoints.down("md")]: {
      position: 'static',
    }
  },
  content: {
    position: 'relative',
    paddingTop: '9.2rem',
    paddingBottom: '10.8rem',
    width: '94%',
    maxWidth: 1140,
    margin: '0 auto',
    [theme.breakpoints.down("md")]: {
      paddingTop: '1.2rem',
      paddingBottom: '2.8rem',
    }
  },
  h2:{
    
    fontFamily: "'Domine', serif",
    position: 'relative',
    paddingBottom: '1.5rem',
    
  },
  h5: {
    color: 'rgba(0, 24, 53, 0.4)',
    marginBottom: '.6rem',
    marginLeft: '.2rem',

  },
  mediaWrap: {
    width: '50%',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 600,
    left: '50%',
    paddingLeft: 0,
    paddingRight: 20,
    [theme.breakpoints.down("md")]: {
      position: 'static',
      width: '100%',
      transform: 'translateY(0)',
      paddingRight: 0,
      marginBottom: '1.4rem'
    }
  },
  media: {
    width: '100%',
    height: '100%',
    
  },
  basic:{
    background: '#001835',
    paddingTop: '7.2rem',
    paddingBottom: '4.8rem',
    textAlign: 'center'
  },
  text: {
    color: 'white',
    fontFamily: "'Domine', serif",
    
    letterSpacing: 1,
    [theme.breakpoints.down("md")]: {
      
    }
  },
  p: {
    
    fontFamily: "'Raleway', sans-serif",
    color: '#999999'
  }
}))

const Info = () => {
  const classes = useStyles()
  return ( 
    <Fragment>
      <section className={classes.infos}>
        <div className={classes.infoEntry}>
          <div className={classes.halfGrey}></div>
          <div className={classes.content}>
            <div className={classes.mediaWrap}>
              <Avatar className={classes.media} src={Img} variant='square' />
            </div>
            <div className='col-md-6'> 
              <Typography className={classes.h2} variant='h2' >{infoHeader}</Typography>
              <Typography className={classes.p}>{info}</Typography>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.basic}>
      <Container>
        <Typography variant='h2' className={classes.text}>
        {infoText}
        </Typography>
      </Container>
    </section>
    </Fragment>
   );
}



 
export default Info;