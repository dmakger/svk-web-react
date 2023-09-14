import React from 'react';
import cl from './_MainBackground.module.scss'
import redBallSVG from '../../static/red-ball.svg'
import purpleBallSVG from '../../static/purple-ball.svg'

const MainBackground = () => {
    return (
        <div className={cl.background}>
            {/* <img alt='o Ball' src={oSVG} /> */}
            <img alt='red Ball' className={cl.redBall} src={redBallSVG} />
            <img alt='purple Ball' className={cl.purpleBall} src={purpleBallSVG} />
        </div>
    );
};

export default MainBackground;