import styled from 'styled-components'
import PropTypes from 'prop-types'
import { color, layout, size, space, typography } from 'styled-system'

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>
}

const StyledButton = styled.button`
  min-width: 85px;
  border: none;
  border-radius: 44px;
  padding: 8px 20px;
  overflow: hidden;
  ${color};
  ${typography};
  ${space}
  ${size}
  ${layout}
`

Button.propTypes = {
  children: PropTypes.node.isRequired
}

Button.defaultProps = {
  color: '#B22E6F',
  maxHeight: 36,
  fontWeight: 600,
  fontSize: 16
}

export default Button
