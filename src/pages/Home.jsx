import {useHomeProducts} from '../app/modules/Products/hooks/useHomeProducts.jsx'
import {Button, Card, Popconfirm} from 'antd'
import {AddHomeProduct} from '../shared/components/AddHomeProduct.jsx'
import {useDeleteHomeProduct} from '../app/modules/Products/hooks/useDeleteHomeProduct.jsx'

const { Meta } = Card

export const Home = () => {
  const { data: products, isLoading, isError } = useHomeProducts()

  const { mutate: deleteProduct } = useDeleteHomeProduct()

  return (
    <>
      <div style={{ marginTop: '20px', marginLeft: '40px' }}>
        <AddHomeProduct />
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
          padding: '20px',
        }}
      >
        {products?.map((product) => {
          return (
            <Card
              hoverable
              style={{
                width: '240px',
                border: '2px solid black',
                backgroundColor: 'white',
                borderRadius: '14px',
                padding: '16px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                transition: '0.3s',
              }}
              cover={
                <img draggable={false} alt="example" src={product.images[0]} />
              }
            >
              <Meta title={product.title} description={`$${product.price}`} />

              <Popconfirm
                title="Удалить товар?"
                onConfirm={(e) => {
                  e?.stopPropagation()
                  deleteProduct(product.id)
                }}
              >
                <Button
                  danger
                  style={{ marginTop: '15px' }}
                  onClick={(e) => {
                    e.stopPropagation()
                  }}
                >
                  Удалить
                </Button>
              </Popconfirm>
            </Card>
          )
        })}
      </div>
    </>
  )
}
