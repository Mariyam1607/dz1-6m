import { useQuery } from '@tanstack/react-query'
import { useParams, useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { useFilter } from '../stores/filter.store.js'

export const useV1Products = () => {
  const limit = 12
  const [search] = useSearchParams()

  const { price_min, price_max, title, categoryId } = useFilter()

  const page = search.get('page')

  const query = useQuery({
    queryKey: ['products', page, price_min, price_max, title, categoryId],
    queryFn: async () => {
      const response = await axios.get(
        'https://api.escuelajs.co/api/v1/products',
        {
          params: {
            offset: ((page || 1) - 1) * limit,
            limit,
            price_min,
            price_max,
            title,
            categoryId,
          },
        },
      )
      return response.data
    },
  })
  return query
}
export const useV1ProductDetail = () => {
  const { id } = useParams()

  const query = useQuery({
    queryKey: ['products', id],
    queryFn: async () => {
      const response = await axios.get(
        `https://api.escuelajs.co/api/v1/products/${id}`,
      )
      return response.data
    },
  })
  return query
}
