import books from '~/providers/fetchBooks'

export const requestListFromBooks = (page = 1) => books.get('/v1/books', { params: { page } })
export const requestObjectFromBooks = bookId => books.get(`/v1/books/${bookId}`)
