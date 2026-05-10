import {create} from 'zustand'
import {persist} from 'zustand/middleware'

export const useFilter = create(
  persist(
    (set) => ({
      title: '',
      categoryId: '',
      price_min: null,
      price_max: null,

      setFilter: (formData) => {
        set({
          price_min: formData.from,
          price_max: formData.to,
          title: formData.title,
          categoryId: formData.category,
        })
      },

      reset: () =>
        set({
          title: '',
          categoryId: '',
          price_min: null,
          price_max: null,
        }),
    }),
    { name: 'filter' },
  ),
)
