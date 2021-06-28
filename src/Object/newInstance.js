/**
 * 模仿new 关键字实现构造函数创建对象
 */
function newInstance(Fn,...args) {
  // 创建一个结果对象
  const obj = {}
  // 通过构造函数给结果对象添加属性 需要用call将构造函数中的this改变为当前obj
  const result = Fn.call(obj,...args)
  // 通过这种方式创建的对象 其原型会出问题
  obj.__proto__ = Fn.prototype
  // 返回这个对象
  return result instanceof  Object ? result : obj
}
