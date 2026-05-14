import { Pagination, Spin } from 'antd'
import { useV1Products } from '../app/modules/Products/hooks/useV1Products.js'
import { V1ProductCard } from '../app/modules/Products/ui/V1ProductCard.jsx'
import { Link, useSearchParams } from 'react-router-dom'
import { FilterForm } from '../shared/components/FilterForm.jsx'
import { toast } from 'react-toastify'

export const V1Products = () => {
  const { data, isLoading, isError, isSuccess, error } = useV1Products()

  const [query, setQuery] = useSearchParams()

  const handleChangePage = (page) => {
    console.log(page, 'page')
    const search = new URLSearchParams()
    search.set('page', page)
    setQuery(search)
  }

  if (isLoading) return <Spin />
  if (isError) {
    toast.error('Ошибка загрузки')
    return <h2>Ошибка: {error?.message}</h2>
  }
  if (isSuccess) {
    toast.success('Данные загружены')
  }

  return (
    <div>
      <FilterForm />
      <div className="grid">
        {/*{data?.map((product) => (*/}
        {/*  <V1ProductCard key={product.id} product={product} />*/}
        {/*))}*/}
        {data?.map((product) => (
          <Link key={product.id} to={`/v1products/${product.id}`}>
            <V1ProductCard product={product} />
          </Link>
        ))}
      </div>
      <Pagination
        total={100}
        current={query.get('page') || 1}
        onChange={handleChangePage}
        pageSize={12}
        defultCurrent={1}
        align="center"
        showSizeChanger={false}
      />
    </div>
  )
}
