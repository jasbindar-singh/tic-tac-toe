import React from 'react'
import './Modal.css'
import Button from '../Button/Button'

function Modal({ isModalOpen, restart, winner }) {

    return (
        <div style={{display: isModalOpen ? 'flex' : 'none'}} className='modal'>
            <div className="modal-content">
                <div className="modal-message">
                    {
                        winner === 'd' ? 'It\'s a Draw!' : (
                            winner === 'x' ? 'Winner is X!' : 'Winner is O!'
                        )
                    }
                </div>
                <img className="splash-image" src={`/${winner}.png`} alt="X"/>
                <Button onPress={restart}>Play Again!</Button>
            </div>
        </div>
    )
}

export default Modal
