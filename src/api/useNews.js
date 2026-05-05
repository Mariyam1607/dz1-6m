import { useQuery } from '@tanstack/react-query'
import { fetchNews } from './fetchNews.js'
import { fetchNew } from './fetchNew.js'
import { useParams } from 'react-router-dom'

export const useNews = (page) => {
  const query = useQuery({
    queryKey: ['news', page],
    queryFn: () => fetchNews(page),
  })
  return query
}
export const useNewDetail = () => {
  const { id } = useParams()

  const query = useQuery({
    queryKey: ['news', id],
    queryFn: () => fetchNew(id),
  })
  return query
}
