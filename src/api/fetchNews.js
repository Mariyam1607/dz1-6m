import axios from 'axios'

const LIMIT = 4

export const fetchNews = async (page = 0) => {
  const skip = page * LIMIT

  const response = await axios.get(
    `https://dummyjson.com/posts?limit=${LIMIT}&skip=${skip}`,
  )

  return response.data.posts
}
