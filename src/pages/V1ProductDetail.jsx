import { Typography } from 'antd'
import { useV1ProductDetail } from '../api/useV1Products.js'

export const V1ProductDetail = () => {
  const { data } = useV1ProductDetail()

  return (
    <div>
      <div className="images">
        {data?.images?.map((img, index) => (
          <img key={index} src={img} alt="" />
        ))}
      </div>
      <div className="news-detail">
        <Typography.Title level={2}>{data?.title}</Typography.Title>
        <Typography.Text className="description">
          {data?.description}
        </Typography.Text>
      </div>
    </div>
  )
}
