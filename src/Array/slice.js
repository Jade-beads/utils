function slice(arr,begin,end) {
  // 判断数组是否为空数组
  if (arr.length===0) {
    return  []
  }
  // 判断begin的参数 如果begin未传的话 则默认begin为0
  begin = begin || 0
  // 判断begin 如果大于数组的长度的话
  if (begin>=arr.length) return []
  // 判断end参数 如果end参数未传的话 默认end为数组的长度 让其截取到最后一项
  end = end || arr.length
  if(end<=begin) {
    end = arr.length
  }
  // 定义一个结果返回数组
  let result = []
  // 遍历数组
  arr.forEach((item,index) =>{
    // 判断下标是否在传入范围之内
    if(index >= begin && index < end) {
      result.push(item)
    }
  })
  // 将数组返回
  return result
}