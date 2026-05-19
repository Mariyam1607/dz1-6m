import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useHomeProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await axios.get(
        'https://api.escuelajs.co/api/v1/products',
      )
      return response.data
    },
    onSuccess: () => {},
    onError: () => {},
  })
}
