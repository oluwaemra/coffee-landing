import React from 'react';
import NavBar from '../Components/NavBar';
import Intro from '../Pages/Intro';
import About from '../Pages/About';
import Menu from '../Pages/Menu';
import Work from '../Pages/Work';
import Customer from '../Pages/Customer';
import News from '../Pages/News';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div className='home-container'>
        <NavBar/>
        <Intro/>
        <About/>
        <Menu/>
        <Work/>
        <Customer/>
        <News/>
        <Footer/>
    </div>
  );

};

export default Home;