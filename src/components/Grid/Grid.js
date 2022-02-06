import React from 'react'
import PropTypes from 'prop-types'
import { grid } from 'styled-system'
import styled from 'styled-components'

import Box from '~/components/Box'

const Grid = ({
  children,
  gridTemplateColumns,
  smGridTemplateColumns,
  mdGridTemplateColumns,
  lgGridTemplateColumns,
  ...props
}) => {
  return (
    <GridContainer
      gridTemplateColumns={gridTemplateColumns}
      lgGridTemplateColumns={lgGridTemplateColumns}
      mdGridTemplateColumns={mdGridTemplateColumns}
      smGridTemplateColumns={smGridTemplateColumns}
      {...props}
    >
      {children}
    </GridContainer>
  )
}

const GridContainer = styled(Box)`
  display: grid;
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
  transition: all 0.5s ease;

  // lg
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-columns: ${({ lgGridTemplateColumns }) => lgGridTemplateColumns};
  }

  // md
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-columns: ${({ mdGridTemplateColumns }) => mdGridTemplateColumns};
  }

  // sm
  @media (max-width: 600px) {
    grid-template-columns: ${({ smGridTemplateColumns }) => smGridTemplateColumns};
  }

  ${grid}
`

Grid.propTypes = {
  children: PropTypes.node,
  gridTemplateColumns: PropTypes.string,
  smGridTemplateColumns: PropTypes.string,
  mdGridTemplateColumns: PropTypes.string,
  lgGridTemplateColumns: PropTypes.string
}

export default Grid
