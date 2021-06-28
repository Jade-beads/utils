var  p1 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log('1s') //1s后输出
    resolve('失败')
  },500)
})
var  p2 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log('0.5s') //1s后输出
    resolve('成功1')
  },500)
})
var  p3 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log('0.3s') //1s后输出
    reject('成功2')
  },500)
})
Promise.all([p1, p2, p3]).then((results)=>{
  //then方法不会被执行
  console.log(results);
}).catch((err)=>{
  //catch方法将会被执行，输出结果为：2
  console.log(err);
});