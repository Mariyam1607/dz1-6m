import { Typography } from 'antd'
import { useNewDetail } from '../api/useNews.js'

export const NewsDetail = () => {
  const { data } = useNewDetail()

  return (
    <div>
      <div className="news-detail">
        <Typography.Title level={2}>{data?.title}</Typography.Title>
        <Typography.Paragraph className="body">
          {data?.body}
        </Typography.Paragraph>
        <Typography.Text className="tags">
          Tags: {data?.tags.join(', ')}
        </Typography.Text>
        <Typography.Text className="views">
          Views: {data?.views}
        </Typography.Text>
      </div>
    </div>
  )
}
