function debounce(callback, time) {
  // 定义一个定时器存储变量
  let timeId = null
  // 返回值必定为一个函数
  return function (e) {
    // 如果timeId不为null 则说明之前一次已经有了一个定时器正在执行 则此次需要将其清空
    if (timeId !== null) {
      // 清空定时器
      clearTimeout(timeId)
    }
    // 开启定时器并将其存入定时器变量中
    timeId = setTimeout(() => {
      // 调用函数 并将this指向事件源
      callback.call(this, e)
      // 调用完成清空此次定时器变量
      timeId = null
    }, time)
  }
}
