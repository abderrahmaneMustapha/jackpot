import React from 'react';
import Game from '../Game';
import GameListContainer from './gameList.style';

const GameList = ({ games, jackpots }) => {

  const getJackpot = (game) => {
    return jackpots.find(jackpot => jackpot.game === game.id)
  }

  return (
    <GameListContainer>
      {games?.map((game) => (
        <Game key={game.id} game={game} jackpot={getJackpot(game)}/>
      ))}
    </GameListContainer>
  );
};

export default GameList;