import { Button, Form, Input } from 'antd'
import { useFilter } from '../stores/filter.store.js'
import FormItem from 'antd/es/form/FormItem/index.js'
import { useEffect } from 'react'
import { useForm } from 'antd/es/form/Form.js'

export const FilterForm = () => {
  const { price_min, price_max, title, categoryId, reset, setFilter } =
    useFilter()
  const [form] = useForm()

  useEffect(() => {
    form.setFieldsValue({
      from: price_min,
      to: price_max,
      title: title,
      category: categoryId,
    })
  }, [price_min, price_max, title, categoryId, form])

  return (
    <Form
      form={form}
      className="form"
      onFinish={(values) => {
        setFilter(values)
      }}
    >
      <FormItem name="title">
        <Input placeholder="Поиск по названию" />
      </FormItem>
      <FormItem name="category">
        <Input placeholder="Поиск по категории" />
      </FormItem>
      <FormItem name="from">
        <Input type={'number'} placeholder="Цена от" />
      </FormItem>
      <FormItem name="to">
        <Input type={'number'} placeholder="Цена до" />
      </FormItem>

      <FormItem>
        <Button htmlType="submit">Применить</Button>
        <Button type="primary" onClick={reset}>
          Сбросить
        </Button>
      </FormItem>
    </Form>
  )
}
