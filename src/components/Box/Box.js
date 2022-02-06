import styled from 'styled-components'
import { flexbox, layout, position, space, border, color, background } from 'styled-system'

export const Box = styled.div`
  transition: all 0.5s ease;

  ${flexbox}
  ${layout}
  ${position}
  ${space}
  ${border}
  ${color}
  ${background}
`

Box.defaultProps = {
  transition: 'all 0.5s ease'
}

export default Box
