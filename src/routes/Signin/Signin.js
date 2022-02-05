import React from 'react'

import Box from '~/components/Box'
import Text from '~/components/Text'
import TextField from '~/components/TextField'
import Button from '~/components/Button/Button'
import Tooltip from '~/components/Tooltip'

import { useDeviceDetect } from '~/hooks'

import background from '~/assets/images/background.jpeg'
import ioasys from '~/assets/svgs/ioasys.svg'

const Signin = () => {
  const { isMobile } = useDeviceDetect()

  return (
    <Box
      width='100vw'
      height='100vh'
      px={isMobile ? 16 : 115}
      color='white'
      display='flex'
      alignItems='center'
      backgroundSize='cover'
      backgroundImage={`url(${background})`}
      backgroundPosition='center'
    >
      <Box data-tooltip='teste' width='100%' maxWidth={isMobile ? '100vw' : 368} maxHeight={224}>
        <Box display='flex' flexDirection='row' mb={48}>
          <img src={ioasys} alt='white ioasys logo' />
          <Text variant='big' fontWeight={300} lineHeight='40px' pl={16}>
            Books
          </Text>
        </Box>

        <Tooltip label='teste'>
          <TextField label='Email' type='text' defaultValue='books@ioasys.com.br' />
          <TextField
            label='Senha'
            type='password'
            defaultValue='books@ioasys.com.br'
            render={<Button>Entrar</Button>}
          />
        </Tooltip>
      </Box>
    </Box>
  )
}

export default Signin
