import React from 'react'

import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

import './Habilidades.css'
import { Link, animateScroll as scroll } from 'react-scroll'
import Item from './Item';

const Habilidades = () => {
  return (
    <section className='habilidades'>

      <div className="habilidades-text">
        <h1>Habilidades</h1>
      </div>
      <div className='cont'>
        <div className="contgrilla anchoresp">
          <Item name={"html"} />
          <Item name={"java"} />
          <Item name={"css"} />
          <Item name={"javascript"} />
          <Item name={"react"} />
          <Item name={"vue"} />
          <Item name={"bootstrap"} />
          <Item name={"python"} />
          <Item name={"django"} />
          <Item name={"flask"} />
          <Item name={"git"} />
        </div>
      </div>

    </section>
  )
}

export default Habilidades