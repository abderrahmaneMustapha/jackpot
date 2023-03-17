import React, { useState, useEffect } from 'react';
import { useGetJackpot } from '../../hooks/jackpot.hook';
import GameContainer from './game.style';

const Game = ({ game, jackpot }) => {
  const { data, loading, getData} = useGetJackpot();

  useEffect(() => {
    let interval = undefined
    if (jackpot) {
      // jackpot data is fetched from the server each 10 seconds
      interval = setInterval(() => {
        getData(game.id)
      }, 10000);
    }

    return () => {
      if(interval) {
        clearInterval(interval);
      }
    }
  }, [data, game, getData, jackpot]);

  return (
    <GameContainer>
      <img src={game.image} alt={game.name} />
      <div className="game-details">
        <h3>{game.name}</h3>
        {(data && !loading) ?  (
          <span className="game-jackpot">Jackpot: £{data.amount}</span>
        ) : (jackpot) && <span className="game-jackpot">Jackpot: £{jackpot.amount}</span>}
      </div>
      <div className="game-hover-state">
        <h3>{game.name}</h3>
        <button>Play</button>
      </div>
    </GameContainer>
  );
};

export default Game
