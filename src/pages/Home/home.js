import { useState } from "react"

import GameList from "../../components/GameList"
import Navigation from "../../components/Navigation"

import { navigationList } from "../../config"

import useGetGames from "../../hooks/game.hook"
import { useGetJackpots }  from "../../hooks/jackpot.hook"

import { ErrorContainer, ErrorMessage, LoadingContainer, LoadingMessage } from "../../style"
import { HomeContentContainer } from "./home.style"

const Home = () => {
  const { data: gamesData, loading: gamesLoading, error: gamesError, filterGames } = useGetGames(navigationList[0].key, undefined)
  const { data: jackpotsData, loading: jackpotsLoading, error: jackpotsError } = useGetJackpots()

  const [activeNavLink, setActiveNavLink] = useState(navigationList[0])

  const onNavLinkChange = (value) => {
    setActiveNavLink(value)

    if(value.key === "jackpots") {
      filterGames(undefined, jackpotsData)
      return
    }

    filterGames(value.key, undefined)
  }

  return (
    <div>
      <Navigation navLinks={navigationList} activeNavLink={activeNavLink} onNavLinkChange={onNavLinkChange} />
      <HomeContentContainer>
        <HomeContent gamesData={gamesData}  jackpotsData={jackpotsData} gamesLoading={gamesLoading} gamesError={gamesError} jackpotsError={jackpotsError} jackpotsLoading={jackpotsLoading} />
      </HomeContentContainer>
    </div>
  )
}

const HomeContent = ({ gamesData, jackpotsData, gamesLoading, jackpotsLoading, gamesError, jackpotsError }) => {
  if (gamesLoading || jackpotsLoading) {
    return (
      <LoadingContainer>
        <LoadingMessage>Loading...</LoadingMessage>
      </LoadingContainer>
    );
  }

  if (gamesError) {
    return (
      <ErrorContainer>
        <ErrorMessage>An error occurred: {gamesError.message}</ErrorMessage>
      </ErrorContainer>
    );
  }

  if (jackpotsError) {
    return (
      <ErrorContainer>
        <ErrorMessage>An error occurred: {jackpotsError.message}</ErrorMessage>
      </ErrorContainer>
    );
  }
  return (
    <GameList games={gamesData} jackpots={jackpotsData} />
  )
}

export default Home