import React from 'react'
import PropTypes from 'prop-types'
import { FiX } from 'react-icons/fi'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'

import Box from '~/components/Box'
import Text from '~/components/Text'
import IconButton from '~/components/IconButton'

const BookDetails = ({
  isOpen,
  onClose,
  title,
  imageUrl,
  authors,
  pageCount,
  publisher,
  published,
  language,
  category,
  isbn10,
  isbn13,
  description
}) => {
  const isMobile = useMediaQuery({ query: '(max-width: 800px)' })

  return (
    <Box
      display={isOpen ? 'flex' : 'none'}
      alignItems='center'
      justifyContent='center'
      position='fixed'
      top={0}
      left={0}
      width='100vw'
      height='100%'
      backgroundColor='rgb(0, 0, 0, 0.7)'
    >
      <Box position='fixed' right={15} top={15}>
        <IconButton backgroundColor='white' onClick={onClose}>
          <FiX />
        </IconButton>
      </Box>

      <Box
        display='flex'
        maxHeight='80vh'
        flexDirection={isMobile ? 'column' : 'row'}
        py={48}
        px={48}
        maxWidth={800}
        position={isMobile && 'fixed'}
        overflow={isMobile && 'auto'}
        margin={isMobile ? '50px 210px 16px 210px' : '80px 300px'}
        backgroundColor='white'
      >
        <StyledImg width={isMobile && 280} src={imageUrl} alt='capa de um livro' />
        <Box ml={!isMobile && 48} mt={isMobile && '24px'}>
          <Text
            width={280}
            maxHeight={80}
            variant='big'
            fontWeight={500}
            lineHeight='40px'
            overflow='hidden'
            textOverflow='ellipsis'
            whiteSpace='initial'
            display='-webkit-box'
            style={{ WebkitLineClamp: '2', WebkitBoxOrient: 'vertical' }}
          >
            {title}
          </Text>
          <Text variant='tiny' lineHeight='20px' fontWeight={400} color='#AB2680'>
            {authors?.join(', ')}
          </Text>

          <Text mt={32} mb={2} variant='tiny' lineHeight='20px' fontWeight={500}>
            INFORMAÇÕES
          </Text>
          <Box display='flex' justifyContent='space-between'>
            <Text variant='tiny' lineHeight='20px' fontWeight={400}>
              Páginas
            </Text>
            <Text variant='tiny' lineHeight='20px' fontWeight={400} opacity={0.5}>
              {pageCount} páginas
            </Text>
          </Box>
          <Box display='flex' justifyContent='space-between'>
            <Text variant='tiny' lineHeight='20px' fontWeight={400}>
              Editora
            </Text>
            <Text variant='tiny' lineHeight='20px' fontWeight={400} opacity={0.5}>
              {publisher}
            </Text>
          </Box>
          <Box display='flex' justifyContent='space-between'>
            <Text variant='tiny' lineHeight='20px' fontWeight={400}>
              Publicação
            </Text>
            <Text variant='tiny' lineHeight='20px' fontWeight={400} opacity={0.5}>
              {published}
            </Text>
          </Box>
          <Box display='flex' justifyContent='space-between'>
            <Text variant='tiny' lineHeight='20px' fontWeight={400}>
              Idioma
            </Text>
            <Text variant='tiny' lineHeight='20px' fontWeight={400} opacity={0.5}>
              {language}
            </Text>
          </Box>
          <Box display='flex' justifyContent='space-between'>
            <Text variant='tiny' lineHeight='20px' fontWeight={400}>
              Título Original
            </Text>
            <Text variant='tiny' lineHeight='20px' fontWeight={400} opacity={0.5}>
              {category}
            </Text>
          </Box>
          <Box display='flex' justifyContent='space-between'>
            <Text variant='tiny' lineHeight='20px' fontWeight={400}>
              ISBN-10
            </Text>
            <Text variant='tiny' lineHeight='20px' fontWeight={400} opacity={0.5}>
              {isbn10}
            </Text>
          </Box>
          <Box display='flex' justifyContent='space-between'>
            <Text variant='tiny' lineHeight='20px' fontWeight={400}>
              ISBN-13
            </Text>
            <Text variant='tiny' lineHeight='20px' fontWeight={400} opacity={0.5}>
              {isbn13}
            </Text>
          </Box>

          <Text mt={32} mb={2} variant='tiny' lineHeight='20px' fontWeight={500}>
            RESENHA DA EDITORA
          </Text>
          <Text textAlign='justify' variant='tiny' lineHeight='20px' fontWeight={400} opacity={0.5}>
            {description}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

const StyledImg = styled.img`
  filter: drop-shadow(0px 6px 9px rgba(0, 0, 0, 0.15));
`

BookDetails.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  authors: PropTypes.arrayOf(PropTypes.string),
  pageCount: PropTypes.number,
  publisher: PropTypes.string,
  published: PropTypes.number,
  isbn10: PropTypes.string,
  isbn13: PropTypes.string,
  category: PropTypes.string,
  language: PropTypes.string,
  imageUrl: PropTypes.string,
  description: PropTypes.string
}

export default BookDetails
