import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Fade from 'react-reveal/Fade'

export const CardsSection = styled.section`
  width: 100%;
`

export const CardsWrapper = styled.div`
  flex-direction: row;
  display: flex;
  width: 100%;
  justify-content: center;
`

export const CardLink = styled(NavLink)`
  width: 100%;
  margin: 1% 0;
`

export const AnimationWrapper = styled(Fade)`
  & .react-reveal {
    width: 100% !important;
  }
`
