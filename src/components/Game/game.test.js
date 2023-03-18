import React from 'react';
import { render, screen, waitFor} from '@testing-library/react';
import Game from './Game';
import { act } from 'react-dom/test-utils';

describe('Game', () => {

  const mockGame = {
    categories: ['top', 'slots', 'new'],
    name: 'The Wish Master',
    image: '//stage.whgstage.com/scontent/images/games/NETHEWISHMASTER.jpg',
    id: 'NETHEWISHMASTER',
  };

  it('should render game details with jackpot amount', async () => {
    const mockJackpot = {
      game: 'NETHEWISHMASTER',
      amount: 63931,
    };
    render(<Game game={mockGame} jackpot={mockJackpot} />);

    const gameNames = screen.getAllByText(mockGame.name);
    const jackpotAmount = screen.getByText(`Jackpot: £${mockJackpot.amount}`);

    expect(gameNames[0]).toBeInTheDocument();
    expect(jackpotAmount).toBeInTheDocument();
  });

  it('should render game details but with no jackpot amount', async () => {
    const mockJackpot = undefined
    const { baseElement } = render(<Game game={mockGame} jackpot={mockJackpot} />);

    const gameNames = screen.getAllByText(mockGame.name);

    expect(gameNames[0]).toBeInTheDocument();
    expect(baseElement).not.toHaveClass("game-jackpot")
  });

  it('displays a "new" ribbon if the game has the "new" category', () => {
    const game = {
      categories: ['new'],
      name: 'Test Game',
      image: 'test-image.jpg',
      id: 'test-game'
    };
    const { baseElement } = render(<Game game={game} />);
    expect(baseElement).toContainHTML('color="red"')
  });

  it('displays a "top" ribbon if the game has the "top" category', () => {
    const game = {
      categories: ['top'],
      name: 'Test Game',
      image: 'test-image.jpg',
      id: 'test-game'
    };
    const { baseElement } = render(<Game game={game} />);
    expect(baseElement).toContainHTML('color="green"')
  });

  it('Should refresh the jackpot amount', async () => {
    jest.useFakeTimers()
    const game = {
      "categories": [
        "top",
        "slots",
        "new"
      ],
      "name": "The Wish Master",
      "image": "//stage.whgstage.com/scontent/images/games/NETHEWISHMASTER.jpg",
      "id": "NETHEWISHMASTER"
    }

    const jackpot = {
      "game": "NETHEWISHMASTER",
      "amount": 333
    }
    render(<Game game={game} jackpot={jackpot} refreshTime={3000} />);

    const gameNames = screen.getAllByText(game.name);
    const jackpotAmount = screen.getByText(`Jackpot: £${jackpot.amount}`);

    expect(gameNames[0]).toBeInTheDocument();
    expect(jackpotAmount).toBeInTheDocument();


    setTimeout(() => {
      const jackpotAmountUpdated = screen.getByText(`Jackpot: £${63931}`);
      expect(jackpotAmountUpdated).toBeInTheDocument()
    }, 3000)

  });
});