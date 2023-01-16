import './Home.css'
import { useCallback } from 'react';
import { loadFull } from "tsparticles";
import Particles from 'react-tsparticles'
import * as particlesConfig from '../config/particles-config.js'
import Typewriter from 'typewriter-effect';
import Navbar from '../navbar/Navbar';


function Home() {

    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);


    return (
        <div className='home'>
            <Navbar />
            <Particles className='particles' init={particlesInit} params={particlesConfig.PARTICLES_OPTIONS} />
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
