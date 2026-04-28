import {useLoaderData} from 'react-router-dom'
import s from './ProductCard.module.scss'

export const ProductCard = ({ index }) => {
  const data = useLoaderData()
  const product = data[index]

  return (
    <div className={s.card}>
      <img className={s.imgage} src={product.images[0]} alt={product.title} />
      <div>
        <h2 className={s.title}>{product.title}</h2>
        <p className={s.brand}>{product.brand}</p>
        <p className={s.price}>{product.price} $</p>
      </div>
    </div>
  )
}
