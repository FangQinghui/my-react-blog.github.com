/*
 * @Author: 方庆辉
 * @Date: 2022-12-25 15:12:45
 * @LastEditors: 方庆辉
 * @LastEditTime: 2022-12-25 18:49:16
 * @Description: 请填写简介
 */
import Algorithm from "../views/algorithm"
import Effection from "../views/effection"
import Note from "../views/webNote"
import { AppstoreOutlined, MailOutlined, ApartmentOutlined } from '@ant-design/icons';

const viewsRoutes = [{
  name: '效果',
  path: '/effect',
  icon: <AppstoreOutlined />,
  element: <Effection />,
},
{
  name: '算法',
  path: '/algorithm',
  icon: <ApartmentOutlined />,
  element: <Algorithm />
},
{
  name: '笔记',
  path: '/note',
  icon: <MailOutlined />,
  element: <Note />
}
]

export default viewsRoutes
