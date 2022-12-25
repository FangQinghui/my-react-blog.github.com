/*
 * @Author: 方庆辉
 * @Date: 2022-12-25 15:44:08
 * @LastEditors: 方庆辉
 * @LastEditTime: 2022-12-25 16:26:46
 * @Description: 请填写简介
 */

import Drag from "./Drag"
import Lunbo from "./Lunbo"

const EffectConfig = [
  {
    title: '拖拽效果',
    content: 'React实现一个拖拽的效果',
    path: '/effect/drag',
    element: <Drag></Drag>
  },
  {
    title: '轮播图效果',
    content: '纯JS实现一个轮播图效果',
    path: '/effect/lunbo',
    element: <Lunbo></Lunbo>
  }
]

export default EffectConfig