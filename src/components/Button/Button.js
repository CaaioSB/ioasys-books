import styled from 'styled-components'
import PropTypes from 'prop-types'
import { color, layout, size, space, typography } from 'styled-system'
import { PulseLoader } from 'react-spinners'

const Button = ({ children, isLoading, color, ...props }) => {
  return (
    <StyledButton color={color} {...props}>
      {isLoading ? <PulseLoader color={color} size={5} /> : children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  min-width: 85px;
  min-height: 36px;
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
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  isLoading: PropTypes.bool
}

Button.defaultProps = {
  color: '#B22E6F',
  maxHeight: 36,
  fontWeight: 600,
  fontSize: 16
}

export default Button
