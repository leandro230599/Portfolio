import './Home.css'
import { useCallback } from 'react';
import { loadFull } from "tsparticles";
import Particles from 'react-tsparticles'
import * as particlesConfig from '../config/particles-config.js'
import Typewriter from 'typewriter-effect';
import Navbar from '../navbar/Navbar';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { Link } from 'react-scroll';


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
            <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-63}
                duration={500}
              >
                <ArrowCircleDownIcon
                  fontSize="large"
                  style={{ pointerEvents: 'fill', cursor: 'pointer' }}
                />
            </Link>
        </div>
    )
}

export default Home
