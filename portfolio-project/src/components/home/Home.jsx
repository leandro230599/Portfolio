import './Home.css'
import { useCallback } from 'react';
import { loadFull } from "tsparticles";
import Particles from 'react-tsparticles'
import * as particlesConfig from '../config/particles-config.js'
import Typewriter from 'typewriter-effect';
import Navbar from '../navbar/Navbar';


function Home() {

    return (
        <div className='home'>
            <Navbar />
            <h1>
                <Typewriter
                    options={{
                        strings: ["Hi!, I'm Leandro Lopez", "I'm developer FullStack"],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 10,
                        cursor: '<',
                        delay: 100,
                    }} 
                />
            </h1>
        </div>
    )
}

export default Home
