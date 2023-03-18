import { renderHook, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import useGetGames from './game.hook'
import { othersList } from "../config"

describe('useGetGames', () => {

  it('should fetch games data on mount', async () => {
      const { result } = renderHook(() => useGetGames())

      await waitFor(() => expect(result.current.data).toBeTruthy())
      await waitFor(() => expect(result.current.loading).toBeFalsy())
      await waitFor(() => expect(result.current.error).toBeNull())
  })

  it('should filter games by category', async () => {
      const { result } = renderHook(() => useGetGames('top'))
      
      await waitFor(() => expect(result.current.data.length).toBeGreaterThan(0))
      await waitFor(() => expect(result.current.data.every(game => game.categories.includes('top'))).toBeTruthy())
      await waitFor(() => expect(result.current.loading).toBeFalsy())
      await waitFor(() => expect(result.current.error).toBeNull())
  })

  it('should filter games by jackpot id', async () => {
      const jackpotData = [{ game: "NESTARBURST" }, { game: "NEALIENS" }, { game: "NETHEWISHMASTER" }]
      const { result } = renderHook(() => useGetGames(null, jackpotData))

      await waitFor(() => expect(result.current.data.length).toBeGreaterThan(0))
      await waitFor(() => expect(result.current.data.every(game => jackpotData.some(jackpot => jackpot.game === game.id))).toBeTruthy())
      await waitFor(() => expect(result.current.loading).toBeFalsy())
      await waitFor(() => expect(result.current.error).toBeNull())
  })

  it('should filter games by others category', async () => {
      const { result } = renderHook(() => useGetGames('other'))
      
      await waitFor(() => expect(result.current.data.length).toBeGreaterThan(0))
      await waitFor(() => expect(result.current.data.every(game => othersList.some(other => game.categories.includes(other)))).toBeTruthy())
      await waitFor(() => expect(result.current.loading).toBeFalsy())
      await waitFor(() => expect(result.current.error).toBeNull())
  })
})