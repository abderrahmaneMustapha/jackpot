// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import { backendUrl } from "./config"

const server = setupServer(
  rest.get(`${backendUrl}/games.php`, (req, res, ctx) => {
    return res(ctx.json([{
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
    },
    {
      "categories": [
        "top",
        "slots",
        "new"
      ],
      "name": "Jack Hammer 2",
      "image": "//stage.whgstage.com/scontent/images/games/NEJACKHAMMER2.jpg",
      "id": "NEJACKHAMMER2"
    },
    {
      "categories": [
        "top",
        "slots",
        "new"
      ],
      "name": "Blood Suckers",
      "image": "//stage.whgstage.com/scontent/images/games/NEBLOODSUCKERS.jpg",
      "id": "NEBLOODSUCKERS"
    },
    {
      "categories": [
        "top",
        "slots"
      ],
      "name": "Zombie Rush",
      "image": "//stage.whgstage.com/scontent/images/games/LEZOMBIERUSH.jpg",
      "id": "LEZOMBIERUSH"
    },
    {
      "categories": [
        "top",
        "slots"
      ],
      "name": "Dragon Drop",
      "image": "//stage.whgstage.com/scontent/images/games/NYXDRAGONDROP.jpg",
      "id": "NYXDRAGONDROP"
    },
    {
      "categories": [
        "top",
        "slots"
      ],
      "name": "Foxin Wins",
      "image": "//stage.whgstage.com/scontent/images/games/NYXFOXINWINS.jpg",
      "id": "NYXFOXINWINS"
    },
    {
      "categories": [
        "top",
        "slots",
        "new"
      ],
      "name": "Beowulf",
      "image": "//stage.whgstage.com/scontent/images/games/LEBEOWULF.jpg",
      "id": "LEBEOWULF"
    },
    {
      "categories": [
        "top",
        "slots"
      ],
      "name": "Rook's Revenge",
      "image": "//stage.whgstage.com/scontent/images/games/BSROCKSREVENGE.jpg",
      "id": "BSROCKSREVENGE"
    },  
    {
      "categories": [
          "fun",
          "virtual"
      ],
      "name": "Virtual Racing",
      "image": "//stage.whgstage.com/scontent/images/games/XGVHR.jpg",
      "id": "XGVHR"
    }]))
  }),

  rest.get(`${backendUrl}/jackpots.php`, (req, res, ctx) => {
    return res(ctx.json( [
      {
        "game": "NEJACKANDTHEBEANSTALK",
        "amount": 127862
      },
      {
        "game": "LEPABLOPICASSOSLOT",
        "amount": 61374
      },
      {
        "game": "NEFLOWERS",
        "amount": 38359
      },
      {
        "game": "NESTARBURST",
        "amount": 191793
      },
      {
        "game": "NEALIENS",
        "amount": 109596
      },
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
      },
      {
        "game": "NYXSUPERMAN",
        "amount": 17841
      },
      {
        "game": "NYXTHEFLASH",
        "amount": 153434
      },
      {
        "game": "NYXWONDERWOMAN",
        "amount": 63931
      }
    ]))
  }),

)

beforeAll(() => server.listen())
afterEach(() => {
  server.resetHandlers()
})
afterAll(() => server.close())
