/*
 * @Author: 方庆辉
 * @Date: 2022-12-25 13:59:49
 * @LastEditors: 方庆辉
 * @LastEditTime: 2022-12-25 16:04:39
 * @Description: 基本布局
 */

import React from 'react'
import routes from '../../routes'
import { useRoutes } from "react-router-dom"
import { Layout, Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
import viewsRoutes from '../../routes/viewsRoutes'
const { Header, Sider, Content } = Layout;

const BasicLayout = () => {

  const items = viewsRoutes.map(item => {
    return {
      label: item.name,
      icon: item.icon,
      key: item.path,
    }
  })

  const element = useRoutes(routes)
  const navigate = useNavigate()

  const onClick = (e: any) => {
    navigate(e.key, {
      replace: false
    })
  };

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider>
        <Menu style={{ height: '100vh' }} onClick={onClick} mode="vertical" items={items} />
      </Sider>
      <Layout>
        <Content style={{ padding: '20px', minWidth: '1000px' }}>
          {element}
        </Content>
      </Layout>
    </Layout>

  )
}

export default BasicLayout
