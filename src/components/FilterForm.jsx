import { Button, Input, InputNumber } from 'antd'
import { useFilter } from '../stores/filter.store.js'

export const FilterForm = () => {
  const {
    setPriceMin,
    setPriceMax,
    price_min,
    price_max,
    title,
    categoryId,
    setTitle,
    setCategoryId,
    reset,
  } = useFilter()

  return (
    <div className="form">
      <div>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Поиск по названию"
        />
      </div>
      <div>
        <Input
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          placeholder="Поиск по категории"
        />
      </div>
      <div>
        <InputNumber
          value={price_min}
          onChange={setPriceMin}
          placeholder="Цена от"
        />
      </div>
      <div>
        <InputNumber
          value={price_max}
          onChange={setPriceMax}
          placeholder="Цена до"
        />
      </div>

      <Button type="primary" onClick={reset}>
        Сброс
      </Button>
    </div>
  )
}
