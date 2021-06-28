function concat(arr,...args) {
  // 定义一个结果数组
  let result = []
  // 利用剩余参数的特性 遍历他
  args.forEach(item=>{
    // 判断如果是一个数组的话 就利用展开运算符给push进去
    if(Array.isArray(item)) {
      result.push(...item)
    }else {
      // 若不是数组 则直接push
      result.push(item)
    }
  })
  return result
}