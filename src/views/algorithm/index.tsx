/*
 * @Author: 方庆辉
 * @Date: 2022-12-25 13:45:03
 * @LastEditors: 方庆辉
 * @LastEditTime: 2022-12-25 16:32:48
 * @Description: 算法知识
 */

import React from 'react'
import { Card, Col, Row } from 'antd';
import AlgorithmConfig from './config';
import { useNavigate } from 'react-router-dom';

const Algorithm = () => {

  const navigate = useNavigate()

  const handleClick = (item: any) => {
  }

  return (
    <div>
      <Row gutter={[20, 20]}>
        {
          AlgorithmConfig.map((item, index) => {
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

export default Algorithm
