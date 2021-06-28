function mergeObject(...args) {
  // 定义一个结果对象
  let result = {}
  args.forEach(obj => {
    Object.keys(obj).forEach(key => {
      if(result.hasOwnProperty(key)) {
        // 如果有重复项的话 则需要将其之前的参数合并为一个数组
        result[key] = [].concat(result[key],obj[key])
      }else {
        // 如果没有重复 则直接添加进去即可
        result[key] = obj[key]
      }
    })
  })
  return result
}