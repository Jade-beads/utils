let p1 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log('1s') //1s后输出
    reject(1)
  },1000)
})
let p10 = new Promise((resolve)=>{
  setTimeout(()=>{
    console.log('10s') //10s后输出
    resolve(10) //不传递
  },10000)
})
let p5 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log('5s') //5s后输出
    resolve(5) //不传递
  },5000)
})
Promise.race([p1, p10, p5]).then((res)=>{
  console.log(res); // 最后输出
},(reason)=>{
  console.log(reason)
})