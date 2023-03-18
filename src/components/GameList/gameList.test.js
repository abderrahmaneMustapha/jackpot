import React from 'react';
import { render, screen } from '@testing-library/react';
import GameList from '../GameList';

const games = [{
  "categories": [
    "top",
    "slots",
    "new"
  ],
  "name": "The Wish Master",
  "image": "//stage.whgstage.com/scontent/images/games/NETHEWISHMASTER.jpg",
  "id": "NETHEWISHMASTER"
},
{
  "categories": [
    "top",
    "slots",
    "new"
  ],
  "name": "Aliens",
  "image": "//stage.whgstage.com/scontent/images/games/NEALIENS.jpg",
  "id": "NEALIENS"
},
{
  "categories": [
    "top",
    "slots",
    "new"
  ],
  "name": "Starburst",
  "image": "//stage.whgstage.com/scontent/images/games/NESTARBURST.jpg",
  "id": "NESTARBURST"
}]

const jackpots = [
  {
    "game": "NETHEWISHMASTER",
    "amount": 63931
  },
  {
    "game": "XGMONEYSPINNER",
    "amount": 38359
  },
  {
    "game": "BSTHEEXTERMINATOR",
    "amount": 54798
  }
]

describe('GameList', () => {
  test('renders a list of games', () => {
   render(
      <GameList games={games} jackpots={jackpots} />
    );

    const firstElement = screen.getAllByAltText("Aliens");
    const secondElement = screen.getAllByAltText("Starburst");
    const thirdElement = screen.getAllByAltText("The Wish Master")
    expect(firstElement).toBeTruthy();
    expect(secondElement).toBeTruthy();
    expect(thirdElement).toBeTruthy();
  });

});