/*
 * @Author: 方庆辉
 * @Date: 2022-12-25 13:39:23
 * @LastEditors: 方庆辉
 * @LastEditTime: 2022-12-25 16:36:39
 * @Description: 路由文件
 */
import { Navigate } from 'react-router-dom'
import viewsRoutes from './viewsRoutes'
import EffectConfig from '../views/effect/config'
import AlgorithmConfig from '../views/algorithm/config'
import NoteConfig from '../views/note/config'

const routes = [
  ...viewsRoutes,
  ...EffectConfig,
  ...AlgorithmConfig,
  ...NoteConfig,
  {
    path: '/',
    element: <Navigate to='/effect' />
  },
]


export default routes
