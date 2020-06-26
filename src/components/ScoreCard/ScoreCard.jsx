import React from 'react'
import './ScoreCard.css'

function ScoreCard({score}) {
    return (
        <div className='score-card'>
            X
            <div className="btn">
                {score.x} : {score.y}
            </div>
            O
        </div>
    )
}

export default ScoreCard
