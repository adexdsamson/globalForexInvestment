import React from 'react';
import { Grid, Container, Typography, makeStyles } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  name: {
    marginTop: 12,
    fontWeight: 'bold'
  },
  date: {
    fontSize: 12,
    color: '#555'
  }
}))


const Header = ({user}) => {
  const classes = useStyles();
  let date = new Date().toDateString();
  return ( 
    <Grid container>
      <Container>
        <Typography className={classes.name}>
          Hi, {user.name}
        </Typography>
        <Typography className={classes.date}>
          {date}
        </Typography>
      </Container>
    </Grid>
   );
}
 
export default Header;