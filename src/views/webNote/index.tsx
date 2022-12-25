/*
 * @Author: 方庆辉
 * @Date: 2022-12-25 13:44:17
 * @LastEditors: 方庆辉
 * @LastEditTime: 2022-12-25 16:34:07
 * @Description: 学习笔记
 */

import React from 'react'
import { Card, Col, Row } from 'antd';
import NoteConfig from './config';
import { useNavigate } from 'react-router-dom';

const Note = () => {

  const navigate = useNavigate()

  const handleClick = (item: any) => {
  }

  return (
    <div>
      <Row gutter={[20, 20]}>
        {
          NoteConfig.map((item, index) => {
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

export default Note
