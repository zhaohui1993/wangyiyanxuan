/*
包含n个接口请求函数的对象模块
函数返回promise对象
 */
import ajax from './ajax'

const BASE = '/api'

//模拟发送mock请求请求home
export const reqHomeShowNav = () => ajax('/home')

//模拟发送mock请求请求catagorys
export const reqCatagorys = () => ajax('/catagory')

//发送请求获取nav
export const reqNavList = () => ajax(`${BASE}/topic/v1/find/getTabs.json`)
