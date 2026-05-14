import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { Products } from './pages/Products.jsx'
import { Cart } from './pages/Cart.jsx'
import { CustomLayout } from './app/providers/Layout.jsx'
import { fetchProducts } from './app/modules/Products/api/fetchProducts.js'
import NotFoundPage from './pages/NotFoundPage.jsx'
import { NewsDetail } from './pages/NewsDetail.jsx'
import { fetchNews } from './app/modules/Products/api/fetchNews.js'
import { NewsPage } from './pages/NewsPage.jsx'
import { fetchNew } from './app/modules/Products/api/fetchNew.js'
import { V1Products } from './pages/V1Products.jsx'
import { V1ProductDetail } from './pages/V1ProductDetail.jsx'

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
        path: '/news',
        element: <NewsPage />,
        loader: ({ request }) => {
          const url = new URL(request.url)

          const page = Number(url.searchParams.get('page')) || 0

          return fetchNews(page)
        },
      },
      {
        path: '/news/:id',
        element: <NewsDetail />,
        loader: ({ params }) => fetchNew(params.id),
      },
      {
        path: '/v1products',
        element: <V1Products />,
      },
      {
        path: '/v1products/:id',
        element: <V1ProductDetail />,
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

// `https://api.escuelajs.co/api/v1/products/${params.id}`,