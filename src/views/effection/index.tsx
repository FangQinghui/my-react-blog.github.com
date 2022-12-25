/*
 * @Author: 方庆辉
 * @Date: 2022-12-25 13:44:41
 * @LastEditors: 方庆辉
 * @LastEditTime: 2022-12-25 16:33:09
 * @Description: 页面效果
 */

import React from 'react'
import { Card, Col, Row } from 'antd';
import config from './config';
import { useNavigate } from 'react-router-dom';


const Effect = () => {

  const navigate = useNavigate()

  const handleClick = (item: any) => {
    navigate(item.path)
  }

  return (
    <div>
      <Row gutter={[20, 20]}>
        {
          config.map((item, index) => {
            return <Col span={6} key={index}>
              <Card title={item.title} bordered={false} hoverable onClick={() => handleClick(item)}>
                {item.content}
              </Card>
            </Col>
          })
        }
      </Row>
    </div>
  )
}

export default Effect
