/*
 * @Author: 方庆辉
 * @Date: 2022-12-25 18:42:36
 * @LastEditors: 方庆辉
 * @LastEditTime: 2022-12-25 18:46:42
 * @Description: 请填写简介
 */

import React from 'react'
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const Error404 = () => {

  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary" onClick={goBack}>Back Home</Button>}
    />
  )
}

export default Error404
