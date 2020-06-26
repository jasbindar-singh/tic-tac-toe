import React, {useState, useRef} from 'react'
import Tile from '../Tile/Tile.jsx'
import { checkWinner } from '../../util/checkWinner'
import Modal from '../Modal/Modal.jsx';
import './Board.css'
import ScoreCard from '../ScoreCard/ScoreCard.jsx';

function Board() {

    let isX = useRef(true);
    let winner = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [grid, setGrid] = useState(Array(9).fill(null));
    const [score, setScore] = useState({x: 0, y: 0})

    const handleTileClick = (index) => {

        if(grid[index] === null){
            grid[index] = isX.current ? 'x' : 'o';
            isX.current = !isX.current;
            setGrid([...grid])
        }

        winner.current = checkWinner(grid)
        
        if(!!winner.current){
            if(winner.current === 'x')
                setScore(prev => {
                    return {...prev, x: prev.x + 1}
                })
            else if(winner.current === 'o')
                setScore(prev => {
                    return {...prev, y: prev.y + 1}
                })
            toggle()
        }

    }

    const toggle = () => {
        setIsModalOpen(prev => !prev)
    }

    const restart = () => {
        setGrid(Array(9).fill(null))
        toggle()
    }

    return (
        <>
            <div className="board-container">
                <div className='board'>
                    {
                        grid.map((doc, index) => {
                            return <Tile onPress={handleTileClick} tile={doc} index={index} key={index}/>;
                        })
                    }
                </div>
            </div>
            <ScoreCard score={score} />
            <Modal isModalOpen={isModalOpen} restart={restart} winner={winner.current}/>
        </>
    )
}

export default Board
