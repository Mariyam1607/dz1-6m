import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { toast } from 'react-toastify'

export const useDeleteHomeProduct = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id) => {
      await axios.delete(`https://api.escuelajs.co/api/v1/products/${id}`)
    },

    onSuccess: () => {
      toast.success('Товар удален')

      queryClient.invalidateQueries({
        queryKey: ['products'],
      })
    },
    onError: () => {
      toast.error('Ошибка удаления')
    },
  })
}
