/*
* 方法一
* for循环加indexOf 本质上是双重for循环
* */
function unique(arr) {
  // 定义一个结果数组
  const result = []
  // 遍历原数组
  for (let i = 0;i < arr.length; i++) {
    // 使用indexOf() 方法
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i])
    }
  }
  return result
}

/*
 * 方法二 利用for循环加一个容器
 * */
function unique1(arr) {
  // 定义一个结果数组
  const result = []
  // 缓存循环的数组的每一项
  const obj = {}
  arr.forEach(item=>{
    if(!obj.hasOwnProperty(item)) {
      obj[item] = true
      result.push(item)
    }
  })
  return result
}
/*
*方法三 利用集合Set
* */

function unique2(arr) {
  let s = new Set(arr)
  let result = Array.from(s)
  return result
}