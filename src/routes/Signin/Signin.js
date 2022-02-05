import { useState } from 'react'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import Box from '~/components/Box'
import Text from '~/components/Text'
import Tooltip from '~/components/Tooltip'
import TextField from '~/components/TextField'
import Button from '~/components/Button/Button'

import { SigninSchema } from '~/helpers'
import { useDeviceDetect } from '~/hooks'
import { useAuth } from '~/context/auth-context'

import ioasys from '~/assets/svgs/ioasys.svg'
import background from '~/assets/images/background.jpeg'

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({ resolver: yupResolver(SigninSchema) })
  const { authenticate } = useAuth()
  const { isMobile } = useDeviceDetect()
  const [tooltipLabel, setTooltipLabel] = useState('')

  const onSubmit = async data => {
    try {
      const response = await authenticate(data)

      setTooltipLabel(response?.data?.errors?.message || null)
    } catch (ex) {
      toast.error('Ocorreu um erro desconhecido. Tente novamente mais tarde.')
    }
  }

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box display='flex' flexDirection='row' mb={48}>
            <img src={ioasys} alt='white ioasys logo' />
            <Text variant='big' fontWeight={300} lineHeight='40px' pl={16}>
              Books
            </Text>
          </Box>

          <Tooltip label={tooltipLabel}>
            <TextField
              register={register}
              error={!!errors?.email?.message}
              label='Email'
              name='email'
              type='text'
              defaultValue='books@ioasys.com.br'
            />
            <TextField
              register={register}
              error={!!errors?.password?.message}
              label='Senha'
              name='password'
              type='password'
              defaultValue='books@ioasys.com.br'
              render={
                <Button type='submit' isLoading={isSubmitting}>
                  Entrar
                </Button>
              }
            />
          </Tooltip>
        </form>
      </Box>
    </Box>
  )
}

export default Signin
