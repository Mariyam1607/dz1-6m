import { create } from 'zustand'

export const useFilter = create((set) => ({
  title: '',
  categoryId: '',
  price_min: null,
  price_max: null,

  setTitle: (value) => set({ title: value }),
  setCategoryId: (value) => set({ categoryId: value }),
  setPriceMin: (value) => set({ price_min: value }),
  setPriceMax: (value) => set({ price_max: value }),

  reset: () =>
    set({
      title: '',
      categoryId: '',
      price_min: null,
      price_max: null,
    }),
}))
