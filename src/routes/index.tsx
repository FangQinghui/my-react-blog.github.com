/*
 * @Author: 方庆辉
 * @Date: 2022-12-25 13:39:23
 * @LastEditors: 方庆辉
 * @LastEditTime: 2022-12-25 18:50:08
 * @Description: 路由文件
 */
import { Navigate } from 'react-router-dom'
import viewsRoutes from './viewsRoutes'
import EffectConfig from '../views/effection/config'
import AlgorithmConfig from '../views/algorithm/config'
import NoteConfig from '../views/webNote/config'
import Error404 from '../views/exception/404'

const routes = [
  ...viewsRoutes,
  ...EffectConfig,
  ...AlgorithmConfig,
  ...NoteConfig,
  {
    path: '/',
    element: <Navigate to='/effect' />
  },
  {
    path: '/*',
    element: <Error404 />
  }
]


export default routes
