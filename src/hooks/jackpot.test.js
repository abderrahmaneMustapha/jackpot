import { renderHook, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { useGetJackpot, useGetJackpots } from './jackpot.hook'
import { othersList } from "../config"

const jackPotAllData =  [
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
]

describe('useGetJackpots', () => {

  it('should fetch jackpots and return data', async () => {
    const { result } = renderHook(() => useGetJackpots());

    await waitFor(() => expect(result.current.loading).toBe(false))
    await waitFor(() =>  expect(result.current.data).toEqual(jackPotAllData))
    await waitFor(() => expect(result.current.error).toBeNull())
  });
});

describe('useGetJackpot', () => {

  it('should fetch jackpot by game id and return data', async () => {
    const { result } = renderHook(() => useGetJackpot());
    
    await waitFor(() =>result.current.getData("NETHEWISHMASTER"))

    await waitFor(() => expect(result.current.loading).toBe(false))
    await waitFor(() =>  expect(result.current.data).toEqual( {
      "game": "NETHEWISHMASTER",
      "amount": 63931
    }))
  });

  it('should return undefined when the game id does not exists', async () => {
    const { result } = renderHook(() => useGetJackpot());
    
    await waitFor(() =>result.current.getData("AAAA"))

    await waitFor(() => expect(result.current.loading).toBe(false))
    await waitFor(() =>  expect(result.current.data).toEqual(undefined))
  });
});