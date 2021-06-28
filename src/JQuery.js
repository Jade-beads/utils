/*
* 模仿JQuery
* */
class JQuery {
  constructor(selector) {
    // 获取dom
    const result = document.querySelectorAll(selector)
    const length = result.length
    for (let i = 0; i<length;i++) {
      this[i] = result[i]
    }
    this.length = length
    this.selector = selector
  }
  // 获取dom
  get(index) {
    return this[index]
  }
  // 遍历dom
  each(fn) {
    for (let i =0; i<this.length;i++) {
      const ele = this[i]
      fn(ele)
    }
  }
  // 绑定事件
  on(type,fn) {
    return this.each((ele)=>{
      ele.addEventListener(type,fn,false)
    })
  }
}