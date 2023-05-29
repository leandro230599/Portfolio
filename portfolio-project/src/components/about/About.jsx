import React from 'react'
import './About.css'
import { Link, animateScroll as scroll } from 'react-scroll'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

const About = () => {
  return (
    <section className='about'>

    <div className="about-text">
      <h2>Who I am?</h2>
      <p>
        I am Leandro Lopez
      </p>
      <p>
        <span role="img" aria-label="lightning">
          ⚡
        </span>{' '}
        I'm a developer fullstack, currently studying systems degree, focusing on Back-end web
      </p>
      <p>
        <span role="img" aria-label="lightning">
          ⚡
        </span>{' '}
        My favorite languages are Java and Javascript, Node(Environment Javascript ) with their different frameworks
        React, Vue, Spring
      </p>
      <p>
        Since 2021 - I've spent my time seeking and learning new
        technologies and forms of digital expression
      </p>
      <div className="location-wrapper">
        <svg
          className="octicon octicon-location"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          height="16"
          aria-hidden="true"
        >
          <path
            fill="white"
            fillRule="evenodd"
            d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
          ></path>
        </svg>
        <p>Buenos Aires, Argentina</p>
        <a onClick={scroll.scrollToTop}>Arriba</a>
        <Link
            activeClass="active"
            to="habilidades"
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
    </div>

    </section>
  )
}

export default About