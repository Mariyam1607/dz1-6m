import {createBrowserRouter} from 'react-router-dom'
import {Home} from './pages/Home.jsx'
import {Products} from './pages/Products.jsx'
import {Cart} from './pages/Cart.jsx'
import {CustomLayout} from './providers/Layout.jsx'
import {fetchProducts} from './api/fetchProducts.js'
import NotFoundPage from './pages/NotFoundPage.jsx'
import {NewsDetail} from './pages/NewsDetail.jsx'
import {fetchNews} from './api/fetchNews.js'
import {NewsPage} from './pages/NewsPage.jsx'
import {fetchNew} from './api/fetchNew.js'

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
