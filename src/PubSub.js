const PubSub = {
  // 定义一个id
  id:1,
  callbacks:{

  }
}
PubSub.subscribe= function (type,callback) {
  // 定义一个订阅者的唯一id
  let token = 'token_' + this.id++
  // 将订阅回调存入this中
  if (this.callbacks[type]) {
    // 如果当前订阅者的话 讲订阅回调存入
    this.callbacks[type][token] = callback
  }else {
    // 如果没有订阅者的话 则创建一个容器 储存回调
    this.callbacks[type] = {
      token:callback
    }
  }
}

PubSub.publish = function (type,data) {
  // 对象中是否有人订阅此
          if (this.callbacks[type]) {
    // 调用期中所有回调
    Object.values(this.callbacks[type]).forEach(callback=>{
      callback(data)
    })

  }
}