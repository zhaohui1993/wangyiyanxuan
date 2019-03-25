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

//实物
//发送请求获取nav
export const reqNavList = () => ajax(`${BASE}/topic/v1/find/getTabs.json`)
//获取推荐页面
export const reqComment = () => ajax(`${BASE}/topic/v1/find/recManual.json`)
//获取刷新页面
export const reqUpdataPage = ({page, size,exceptIds='8166,4035,3583,7852,8250,8686,6965,6410,8303,8331,5867,3438,4037,4024,3463,2876,2747,3413,2081,2082,1487,7318,1004,5821,7696,7710,7949,6696' }) => ajax(`${BASE}/topic/v1/find/recAuto.json`, {page, size,exceptIds})
// 晒单获取show组件买家秀数据
export const reqList = ({page, size, type}) => ajax(`${BASE}/topic/v1/look/getList.json`, {page, size, type})





//搜索页面
//placeholder显示每次刷新
export const reqPlaceHolder = () => ajax(`${BASE}/xhr/search/init.json?csrf_token=326c4f41808c6a38b108b1428b80a2ad`,{}, 'POST')

//模糊匹配
export const reqMatching = (searchName) => ajax(`${BASE}/xhr/search/searchAutoComplete.json`,{keywordPrefix: searchName})

