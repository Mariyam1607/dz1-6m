import {useMutation, useQueryClient} from '@tanstack/react-query'
import axios from 'axios'
import {toast} from 'react-toastify'

export const useHomeProductMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (values) => {
      const response = axios.post(
        'https://api.escuelajs.co/api/v1/products/',
        values,
      )
      return response
    },
    onSuccess: () => {
      toast.success('Продукт добавлен')
      queryClient.invalidateQueries(['products'])
    },
    onError: () => {
      toast.error('Ошибка')
    },
  })
}
