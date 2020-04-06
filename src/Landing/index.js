import React from 'react';
import { Box } from '@material-ui/core';
import Header from './container/header';
import Service from './container/service';
import Info from './container/info';
import Price from './container/pricing';
import Testimony from './container/Testimonies';
import Contact from './container/contact';
import Footer from './container/footer';


const Landing = () => {
  return(
    <Box>
      <Header />
      <Service />
      <Info />
      <Price />
      <Testimony />
      <Contact />
      <Footer />
    </Box>
  )
}



export default Landing; 