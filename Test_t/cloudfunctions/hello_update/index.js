// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: 'hljsysbqxczqls-it4gn'
})
const db = cloud.database();
const helloDb = db.collection("test_db"); 

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    return helloDb.where({
      isDone:true
    }).update({
      data:{
        isDone:false
      }
    })
  } catch (error) {
    console.log(error);
  }
}