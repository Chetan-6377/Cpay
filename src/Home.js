import React from 'react'
import Nav from './nav';
import Header from './Header';
import Middle from './Middle';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
  return <>
  <Nav />
  <Header />
  <Middle />
  <About/>
  <Service/>
  <Contact/>
  <Footer/>
  </>
}

export default Home;
