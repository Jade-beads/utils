function myInstanceOf(obj,Type) {
  // 取出需要判断的Type的类型的显式原型
  let prototype = Type.prototype
  // 取出判断的obj的隐式原型
  let proto = obj.__proto__
  // 判断两个对象相等的话  需要判断其内存地址是否相等
  // 循环判断传入的Type的显式原型是否存在于obj的原型链上 层层向上寻找 一直找到null为止
  while (proto) {
    // 如果Type的显示原型的内存地址与obj的隐式原型的内存地址相同  则说明其指向同一个内存地址
    if(prototype === proto) {
      // 如果相等则直接返回true
      return true
    }
    // 让其等于其原型链上的隐式原型
    proto = proto.__proto__
  }
  return  false
}