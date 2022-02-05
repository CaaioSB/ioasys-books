import books from '~/providers/fetchBooks'

export const login = data => books.post('/v1/auth/sign-in', data)
