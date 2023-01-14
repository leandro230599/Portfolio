import './Home.css'
import { useCallback } from 'react';
import { loadFull } from "tsparticles";
import Particles from 'react-tsparticles'
import * as particlesConfig from '../config/particles-config.js'
import TypeIt from "typeit-react";

function Home() {

    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);


    return (
        <div className='home'>
            <Particles className='particles' init={particlesInit} params={particlesConfig.PARTICLES_OPTIONS} />
            <TypeIt 
                className="typeit"
                options={{
                    strings: "Leandro López",
                    speed: 400,
                    waitUntilVisible: true,
                }}
            />
        </div>
    )
}

export default Home
