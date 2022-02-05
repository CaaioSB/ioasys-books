import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Tooltip = ({ children, label, ...props }) => {
  return (
    <StyledToolTip>
      {children}
      <ToolTipText>{label}</ToolTipText>
    </StyledToolTip>
  )
}

const StyledToolTip = styled.div`
  width: inherit;
  position: relative;
  display: inline-block;
`

const ToolTipText = styled.span`
  visibility: visible;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(2px);
  border-radius: 4px;

  font-weight: 700;
  font-size: 16px;
  line-height: 16px;

  color: #fff;
  text-align: center;
  padding: 16px;
  border-radius: 6px;

  position: absolute;
  z-index: 1;

  opacity: 1;
  transition: opacity 0.3s;

  &:after {
    content: '';
    position: absolute;
    top: -10px;
    left: 20px;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent rgba(255, 255, 255, 0.4) transparent;
  }
`

Tooltip.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string.isRequired
}

export default Tooltip
