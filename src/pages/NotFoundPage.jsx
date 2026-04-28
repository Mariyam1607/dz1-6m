import React from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h2 style={{ color: 'red', fontSize: '30px' }}>Ошибка</h2>
      <h2 style={{ color: 'black', fontSize: '80px' }}>404</h2>
      <Button type="primary" onClick={() => navigate(-1)}>
        Back
      </Button>
    </div>
  )
}

export default NotFoundPage
