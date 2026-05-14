import { Link, useSearchParams } from 'react-router-dom'
import { Button } from 'antd'
import { useNews } from '../app/modules/Products/hooks/useNews.js'

export const NewsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const page = Number(searchParams.get('page')) || 0

  const { data } = useNews(page)

  return (
    <div className="news">
      {data?.map((item) => (
        <div key={item.id}>
          <Link to={`/news/${item.id}`}>
            <h3
              style={{ color: 'black', fontWeight: 'bold', fontSize: '17px' }}
            >
              {item.title}
            </h3>
          </Link>
          <p style={{ color: 'grey', fontSize: '15px' }}>
            Автор: User {item.userId}
          </p>
          <p style={{ color: 'grey', fontSize: '15px' }}>Дата: 2026</p>
        </div>
      ))}
      <div className="btn">
        <Button
          disabled={page === 0}
          onClick={() => setSearchParams({ page: page - 1 })}
        >
          Назад
        </Button>

        <span className="page">Страница: {page}</span>

        <Button onClick={() => setSearchParams({ page: page + 1 })}>
          Вперёд
        </Button>
      </div>
    </div>
  )
}
