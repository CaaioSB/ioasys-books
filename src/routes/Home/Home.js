import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import ContentLoader from 'react-content-loader'
import { FiLogOut, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import Box from '~/components/Box'
import Book from '~/components/Book'
import Text from '~/components/Text'
import Grid from '~/components/Grid'
import IconButton from '~/components/IconButton'
import BookDetails from '~/components/BookDetails'

import { useAuth } from '~/context/auth-context'
import { useUser } from '~/context/user-context'

import { requestListFromBooks, requestObjectFromBooks } from '~/services/books'

import shadow from '~/assets/images/shadow.jpeg'
import ioasys from '~/assets/svgs/ioasys-black.svg'

const Home = () => {
  const [books, setBooks] = useState([])
  const [selectedBook, setSelectedBook] = useState({})
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [isBookDetailsOpen, setIsBookDetailsOpen] = useState(false)

  const { logout } = useAuth()
  const {
    user: { name }
  } = useUser()

  const isMobile = useMediaQuery({ query: '(max-width: 600px)' })

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setIsLoading(true)
        const {
          data: { data, totalPages }
        } = await requestListFromBooks(currentPage)

        setBooks(data)
        setTotalPages(totalPages)
      } catch {
        toast.error('Ocorreu um erro ao buscar os livros. Tente novamente mais tarde.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchBooks()
  }, [currentPage])

  const fetchBook = async bookId => {
    try {
      const { data } = await requestObjectFromBooks(bookId)

      setSelectedBook(data)
      setIsBookDetailsOpen(true)
    } catch {
      setSelectedBook({})
      setIsBookDetailsOpen(false)
      toast.error('Não foi possível obter os detalhes do livro. Tente novamente mais tarde.')
    }
  }

  const handleNextPage = () => setCurrentPage(curr => curr + 1)

  const handlePreviousPage = () => setCurrentPage(curr => curr - 1)

  return (
    <Box
      minHeight='100vh'
      backgroundSize='cover'
      backgroundPosition='center'
      backgroundImage={`url(${shadow})`}
      padding={isMobile ? '40px 16px 88px 16px' : '40px 115px 88px 115px'}
    >
      <Box>
        <Box mb={40} display='flex' justifyContent='space-between' alignItems='center'>
          <Box display='flex'>
            <img color='black' src={ioasys} alt='black ioasys logo' />
            <Text variant='big' fontWeight={300} lineHeight='40px' pl={16}>
              Books
            </Text>
          </Box>
          <Box display='flex' alignItems='center'>
            {!isMobile && (
              <Text variant='tiny'>
                Bem vindo, <b>{name.split(' ')[0]}!</b>
              </Text>
            )}
            <IconButton ml={16} onClick={() => logout()}>
              <FiLogOut />
            </IconButton>
          </Box>
        </Box>

        <Grid
          smGridTemplateColumns='repeat(1, 1fr)'
          mdGridTemplateColumns='repeat(1, 1fr)'
          lgGridTemplateColumns='repeat(2, 1fr)'
          gridTemplateColumns='repeat(4, minmax(230px, 1fr))'
          gridGap={3}
        >
          {isLoading &&
            Array.from(Array(10).keys()).map(index => (
              <ContentLoader key={`loading_skeleton${index}`} width='100%' height='198px'>
                <rect x='0' y='0' width='100%' height='100%' />
              </ContentLoader>
            ))}

          {!isLoading && books.map(book => <Book key={book.id} onClick={() => fetchBook(book.id)} {...book} />)}
        </Grid>
        <Box mt={16} display='flex' alignItems='center' justifyContent={isMobile ? 'center' : 'end'}>
          {isMobile && (
            <IconButton mr={16} disabled={currentPage === 1 || isLoading} onClick={() => handlePreviousPage()}>
              <FiChevronLeft />
            </IconButton>
          )}
          <Text>
            Página <b>{currentPage}</b> de <b>{totalPages}</b>
          </Text>
          {!isMobile && (
            <IconButton ml={16} disabled={currentPage === 1 || isLoading} onClick={() => handlePreviousPage()}>
              <FiChevronLeft />
            </IconButton>
          )}
          <IconButton ml={16} disabled={currentPage === totalPages || isLoading} onClick={() => handleNextPage()}>
            <FiChevronRight />
          </IconButton>
        </Box>
      </Box>

      <BookDetails isOpen={isBookDetailsOpen} onClose={() => setIsBookDetailsOpen(false)} {...selectedBook} />
    </Box>
  )
}

export default Home
