import styled from 'styled-components'
import { Button } from '@material-ui/core'

export const CardButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

export const CardButton = styled(Button)`
  padding: 3px 10px 4px !important;
  border-radius: 5px !important;

  &:hover {
    box-shadow: 0px 0px 6px 0px ${({ theme }) => theme.accent};
  }
`
