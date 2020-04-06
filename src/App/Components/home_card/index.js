import React from 'react';
import { Grid, Container, makeStyles, Typography } from '@material-ui/core';
import Img from "../../Assets/bg-01.jpg";

const useStyles = makeStyles(theme => ({
  card: {
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    background: 'linear-gradient(top, #7579ff, #b224ef)',
    backgroundImage: `url(${Img})`,
    height: 200,
    marginTop: 12,
    [theme.breakpoints.down('xs')]: {
      height: 120,
    }
  },
  title: {
    color: '#fff',
    marginTop: 10,
    fontSize: 36,
    fontWeight: 'bold',
    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
      fontWeight: 'bold',
    }
  },
  color: {
    color: '#fff'
  }
}))


const Card = () => {
  const classes = useStyles();
  
  return ( 
    <Grid 
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Container>
        <Grid item xs={12} sm container>
          <Container className={classes.card}>
            <Typography className={classes.title}>
              Global Forex Investment
            </Typography>
            <Typography variant='caption' className={classes.color}>
             EARNING INVESTMENT PLAN IS NOW OPEN.
            </Typography>
            <hr />
            <Typography variant='body2' className={classes.color}>
              Every payment is due in 30days
            </Typography>
          </Container>
        </Grid>
        </Container>
    </Grid>
   );
}
 
export default Card;