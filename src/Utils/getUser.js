import decode from 'jwt-decode';

const getUserFromToken = () => {
  const token = localStorage.getItem('x-token');
  try {
    const { user } = decode(token)

    return user
  } catch (err) {
    return undefined
  }
}

export { getUserFromToken }
