/**
 * Created by Administrator on 2019/3/9.
 */
import Mock from 'mockjs'
import home from './home.json'
import catagory from './catagory.json'
// 提供home的接口
Mock.mock('/home', {code: 0, data: home})

//提供分类接口
Mock.mock('/catagory', {code: 0, data: catagory})
