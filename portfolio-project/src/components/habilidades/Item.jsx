import React from 'react'
import './Item.css'

const Item = ({ name }) => {
    // TODO: Hacer responsive los item con flexbox
    return (
        <div className={'item'}>
            <div className='contenedor'>
                <img 
                    className='imagen mover'
                    src={ '/'+name+'.png' } 
                    alt={ name } />
                <h3 className='texto'> { name.toUpperCase() } </h3>
            </div>
        </div>
    )
}

export default Item;