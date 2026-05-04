import axios from 'axios'

export const fetchNew = async (id) => {
  const response = await axios.get(`https://dummyjson.com/posts/${id}`)
  return response.data
}
