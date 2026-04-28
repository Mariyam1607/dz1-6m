import {createBrowserRouter} from 'react-router-dom'
import {Home} from './pages/Home.jsx'
import {Products} from './pages/Products.jsx'
import {Cart} from './pages/Cart.jsx'
import {CustomLayout} from './providers/Layout.jsx'
import {fetchProducts} from './api/fetchProducts.js'
import NotFoundPage from './pages/NotFoundPage.jsx'

export const router = createBrowserRouter([
  {
    element: <CustomLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/products',
        element: <Products />,
        loader: () => fetchProducts(),
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])
