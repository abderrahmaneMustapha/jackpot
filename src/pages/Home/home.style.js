import styled from "styled-components";

const HomeContentContainer = styled.div`
  background-color: #fcfcfc;
  /* margin: 2em */
`
const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  @media (max-width: 768px) {
    grid-template-columns: 30% 70%;
    }
  /* margin: 2em */
`


export { HomeContentContainer  , HomeContainer} 

export default Object.freeze({
  HomeContentContainer , HomeContainer
})