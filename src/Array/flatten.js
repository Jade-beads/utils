/*
* 方法一  递归处理
* */
function flatten1(arr) {
  // 定义一个结果数组
  let result = []
  // 遍历整个数组
  arr.forEach(item=>{
    // 判断若当前项为数组的话 则需要递归处理
    if(Array.isArray(item)) {
      // 将结果保存到结果数组中
      result = result.concat(flatten(item))
    }else {
      // 若不是数组 则可以直接合并入新数组中
      result = result.concat(item)
    }
  })
  // 最后将结果数组返回
  return result
}
/*
* 方法二
* */
function flatten2(arr) {
  let result  = [...arr]
  while (result.some(item=>Array.isArray(item))) {
    result = [].concat(...result)
  }
  return result
}