import React, { useState, useEffect } from 'react';
import GameWrapper from './game.style';

const Game = ({ game, jackpot}) => {
  //const [jackpotValue, setJackpotValue] = useState(jackpot[game.id]);

  /*useEffect(() => {
    const interval = setInterval(() => {
      setJackpotValue(jackpot[game.id]);
    }, 5000);
    return () => clearInterval(interval);
  }, [jackpot, game.id]); */

  return (
    <GameWrapper>
      <img src={game.image} alt={game.name} />
      <div className="game-details">
        <h3>{game.name}</h3>
        {jackpot && (
          <span className="game-jackpot">Jackpot: £{jackpot.amount}</span>
        )}
      </div>
      <div className="game-hover-state">
        <h3>{game.name}</h3>
        <button>Play</button>
      </div>
    </GameWrapper>
  );
};

export default Game
