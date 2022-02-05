const setAuthorization = token => localStorage.setItem(`${process.env.REACT_APP_COMPANY_NAME}:authorization`, token)

const getAuthorization = () => localStorage.getItem(`${process.env.REACT_APP_COMPANY_NAME}:authorization`)

const setRefreshToken = refreshToken =>
  localStorage.setItem(`${process.env.REACT_APP_COMPANY_NAME}:refresh-token`, refreshToken)

const getRefreshToken = () => localStorage.getItem(`${process.env.REACT_APP_COMPANY_NAME}:refresh-token`)

const setUserData = user => localStorage.setItem(`${process.env.REACT_APP_COMPANY_NAME}:user`, JSON.stringify(user))

const getUserData = () => JSON.parse(localStorage.getItem(`${process.env.REACT_APP_COMPANY_NAME}:user`))

export { setAuthorization, getAuthorization, setRefreshToken, getRefreshToken, setUserData, getUserData }
