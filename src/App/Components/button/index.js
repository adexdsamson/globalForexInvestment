import React from 'react';
import {Button, makeStyles} from '@material-ui/core';


const style = makeStyles(theme => ({
  root: {
    fontFamily: 'Poppins-Medium',
    fontSize: '16px',
    color: '#fff',
    lineHeight: '1.2',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 20px',
    minWidth: '120px',
    height: '50px',
    borderRadius: '25px',
    backgroundColor: '#001835',
    opacity: '1',
    left: '0',
    top: '0',
  }
}))

const ButtonUI = ({name}) => {
  const classes = style()
  return ( 
    <Button type='submit' fullWidth className={classes.root}>
      {name}
    </Button>
  );
}
 
export default ButtonUI;