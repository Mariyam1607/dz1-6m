import { Button, Form, Input, Modal } from 'antd'
import { useState } from 'react'
import { useForm } from 'antd/es/form/Form.d.ts'
import { useHomeProductMutation } from '../../app/modules/Products/hooks/useHomeProductMutation.jsx'

export const AddHomeProduct = () => {
  const [open, setOpen] = useState(false)
  const [form] = useForm()
  const { mutate: createProduct } = useHomeProductMutation()

  const toggleModal = () => {
    setOpen((prev) => !prev)
  }

  const handleSubmit = (values) => {
    createProduct(
      {
        ...values,
        price: Number(values.price),
        categoryId: 1,
        images: ['https://placehold.co/600x400'],
      },
      {
        // onSuccess: () => {
        //   toggleModal()
        // },
        onSuccess: () => {
          form.resetFields()
          toggleModal()
        },
      },
    )
  }

  return (
    <>
      <Button type="primary" onClick={toggleModal}>
        Добавить продукт
      </Button>
      <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={open}
        onOk={() => form.submit()}
        onCancel={toggleModal}
      >
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            label="Название товара"
            name="title"
            required
            rules={[{ required: true, message: 'This field required' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Описание"
            name="description"
            required
            rules={[{ required: true, message: 'This field required' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Цена"
            name="price"
            required
            rules={[{ required: true, message: 'This field required' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="CategoryId" name="categoryId">
            <Input />
          </Form.Item>
          <Form.Item label="Изображение" name="images">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}
