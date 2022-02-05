import React from 'react'
import styled, { keyframes } from 'styled-components'

import Box from '~/components/Box'
import Text from '~/components/Text'
import ioasys from '~/assets/svgs/ioasys.svg'

const Splash = () => {
  return (
    <Box
      backgroundColor='#E00F63'
      width='100vw'
      height='100vh'
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <StyledBox>
        <img src={ioasys} width='287px' alt='white ioasys logo' />
        <Text color='white' fontSize={40} fontWeight={700} lineHeight={0.5}>
          Desafio Front
        </Text>
      </StyledBox>
    </Box>
  )
}

const floating = keyframes`
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-24px);
  }

  100% {
    transform: translateY(0px);
  }
`

const StyledBox = styled(Box)`
  transition: all 0.3s ease;
  animation: ${floating} 1s cubic-bezier(0.49, 0.09, 0.36, 1.01) infinite forwards;
`

export default Splash
