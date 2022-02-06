import PropType from 'prop-types'
import styled from 'styled-components'

import Box from '~/components/Box'
import Text from '~/components/Text'

const Book = ({ title, imageUrl, authors, pageCount, publisher, published, ...props }) => {
  return (
    <StyledBox height={160} display='flex' padding='19px 16px' {...props}>
      <StyledImg src={imageUrl} alt={`Capa do livro ${title}`} width='110px' />
      <Box display='flex' flexDirection='column' justifyContent='space-between' ml={16} overflow='auto'>
        <Box>
          <Text variant='small' fontWeight={500}>
            {title}
          </Text>

          {authors.map(author => (
            <Text
              style={{ whiteSpace: 'nowrap', overflow: 'auto', textOverflow: 'ellipsis' }}
              key={author.replace(/ /g, '')}
              variant='tiny'
              fontWeight={400}
              color='#AB2680'
            >
              {author}
            </Text>
          ))}
        </Box>

        <Box>
          <Text
            style={{ whiteSpace: 'nowrap', overflow: 'auto', textOverflow: 'ellipsis' }}
            variant='tiny'
            fontWeight={400}
            color='#999999'
          >
            {pageCount} páginas
          </Text>
          <Text
            style={{ whiteSpace: 'nowrap', overflow: 'auto', textOverflow: 'ellipsis' }}
            variant='tiny'
            fontWeight={400}
            color='#999999'
          >
            {publisher}
          </Text>
          <Text
            style={{ whiteSpace: 'nowrap', overflow: 'auto', textOverflow: 'ellipsis' }}
            variant='tiny'
            fontWeight={400}
            color='#999999'
          >
            Publicado em {published}
          </Text>
        </Box>
      </Box>
    </StyledBox>
  )
}

const StyledBox = styled(Box)`
  background: #ffffff;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  border-radius: 4px;
`

const StyledImg = styled.img`
  filter: drop-shadow(0px 6px 9px rgba(0, 0, 0, 0.15));
`

Book.propTypes = {
  title: PropType.string,
  authors: PropType.arrayOf(PropType.string),
  pageCount: PropType.number,
  publisher: PropType.string,
  published: PropType.number,
  imageUrl: PropType.string,
  isLoading: PropType.bool
}

export default Book
