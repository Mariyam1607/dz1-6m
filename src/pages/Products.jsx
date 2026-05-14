// import React from "react";
import { useLoaderData, useNavigation } from 'react-router-dom'
import { ProductCard } from '../app/modules/Products/ui/ProductCard.jsx'

export const Products = () => {
  const data = useLoaderData()
  const navigation = useNavigation()

  if (navigation.state === 'loading') {
    return <p className="load">Loading</p>
  }

  return (
    <div className="products">
      {data.map((_, index) => {
        return <ProductCard key={index} index={index} />
      })}
    </div>
  )
}
