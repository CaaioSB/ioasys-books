import styled from 'styled-components'
import PropTypes from 'prop-types'

import Box from '~/components/Box'
import Text from '~/components/Text'
import { layout } from 'styled-system'

const TextField = ({ label, type, value, render, ...props }) => {
  if (!label) {
    return new Error('TextField expects label prop.')
  }

  return (
    <StyledBox
      p='8px 16px'
      position='relative'
      maxHeight='60px'
      background='rgba(0, 0, 0, 0.32)'
      borderRadius={4}
      {...props}
    >
      <Text variant='tiny' lineHeight='16px' fontWeight={400} opacity={0.5}>
        {label}
      </Text>
      <StyledTextField type={type} value={value} width={render ? '70%' : '100%'} />
      <Box display='flex' maxWidth={85} alignItems='center' position='absolute' height='100%' top='0' right='16px'>
        {render}
      </Box>
    </StyledBox>
  )
}

const StyledBox = styled(Box)`
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`

const StyledTextField = styled.input`
  font-size: 16px;
  line-height: 24px;
  background: transparent;
  color: white;
  border: none;
  outline-offset: 0px;
  outline: none;

  ${layout}
`

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  render: PropTypes.node
}

export default TextField
