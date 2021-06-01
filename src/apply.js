function apply(Fn, obj, args) {
  if (obj === undefined || obj === null) {
    obj = globalThis
  }
  // 与call 相同
  obj.temp = Fn
  // 与call唯一不同的地方就是传入进来的参数args 为数组
  // 在这里需要将数组使用扩展运算符给展开
  let result = obj.temp(...args)
  delete obj.temp
  return result
}
