import { QueryProvider } from './app/providers/QueryProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.jsx'
import { QueryClient } from '@tanstack/react-query'

export const App = () => {
  const client = new QueryClient()
  return (
    <QueryProvider client={client}>
      <RouterProvider router={router} />
    </QueryProvider>
  )
}
