import styled from 'styled-components'
import PropTypes from 'prop-types'
import { space, color } from 'styled-system'

const IconButton = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>
}

const StyledButton = styled.button`
  width: 32px;
  height: 32px;
  background-color: transparent;
  border: 1px solid rgba(51, 51, 51, 0.2);
  box-sizing: border-box;
  border-radius: 100%;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
  ${space}
  ${color}
`

IconButton.propTypes = {
  children: PropTypes.node
}

export default IconButton
