import React from 'react'
import './Tile.css'

function Tile({onPress, tile, index}) {

    return (
        <div onClick={(e) => {onPress(index, e)}}  className={`tile ${tile}`}></div>
    )
}

export default Tile
