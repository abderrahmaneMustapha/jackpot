import styled from 'styled-components';

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  background-color: #fff;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
  }

  img {
    width: 100%;
    height: 150px;
    object-fit: contain;
    margin-bottom: 10px;
  }

  .game-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 10px;

    h3 {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 5px;
      color: #373737;
    }

    .game-category {
      font-size: 14px;
      font-weight: bold;
      color: #8dc63f;
      margin-right: 5px;
    }

    .game-jackpot {
      font-size: 14px;
      color: #373737;
      margin-top: 5px;
    }
  }

  .game-hover-state {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    h3 {
      font-size: 28px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    button {
      font-size: 18px;
      font-weight: bold;
      padding: 10px 20px;
      border: 2px solid #fff;
      border-radius: 5px;
      background-color: transparent;
      color: #fff;
      transition: all 0.2s ease-in-out;

      &:hover {
        background-color: #fff;
        color: #373737;
        cursor: pointer;
      }
    }
  }

  &:hover .game-hover-state {
    display: flex;
  }
`;

const Ribbon = styled.div`
  position: relative;
  width: fit-content;

  &::before {
    content: '${props => props.text}';
    color: white;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    padding: 4px 8px;
    background-color: ${props => props.color};
    position: absolute;
    top: -140px;
    left: 50px;
    bottom: auto;
    transform: rotate(-0deg);
    z-index: 1;
  }
`;

export { GameContainer, Ribbon }