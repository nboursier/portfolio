import { Link } from "react-router-dom"
import { useState, createContext } from 'react';
import Header from '../components/header';
import Starter from '../components/starter';
import About from '../components/about';
import Skills from '../components/skills';
import Projects from '../components/projects';
import Contact from '../components/contact';
import Footer from '../components/footer';
import arrowUp from '../assets/arrow_up.webp';
import '../scss/pages/_homepage.scss'
import '../scss/style.scss'



function Home() {
   

    return (

        
        <div>
            <Header/>
            <div>
                <a className="arrow_up" href="#top">
                    <img src={arrowUp} alt="arrow up" className="arrow_up" />
                </a>
                <Starter />
                <About id="about" />
                <Skills id="skills"/> 
                <Projects id="projects"/>
                <Contact id="contact"/>

            </div>
            <Footer/>
        </div>
       
    );
}

export default Home;
