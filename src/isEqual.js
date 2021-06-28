// 简化代码 使用函数的方式判断是否为对象 且不为null
function isObject(obj) {
  return typeof obj === 'object' && obj !== null
}
function isEqual(obj1, obj2) {
  // 判断如果传入的不是对象类型的话 就直接返回两个值的比较
  if (!isObject(obj1) || !isObject(obj2)) {
    return obj1 === obj2
  }
  // 判断是否传入同一个对象
  if (obj1 === obj2) return true
  // 判断两个对象的键是否一致
  const K1 = Object.keys(obj1)
  const K2 = Object.keys(obj2)
  if (K1.length !== K2.length) return false

  // 递归遍历所有的键值对是否相等
  for (let key in obj1) {
    // 判断当前的key是否为其本身的属性 而不是原型上的属性 for-in循环是会将原型上所有的属性都遍历一遍
    if (obj1.hasOwnProperty(key)) {
      // 递归调用 看res的结果
      const res = isEqual(obj1[key], obj2[key])
      if (!res) {
        return false
      }
    }
  }
  return true
}
const obj1 = {
  a: 100,
  b: {
    c: 100,
    d: 200,
  },
  e: 300,
}
const obj2 = {
  a: 100,
  b: {
    c: 100,
    d: 200,
  },
  e: 300,
}
console.log(isEqual(obj1, obj2))
