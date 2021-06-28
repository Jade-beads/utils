/**
 *  chuck方法可以将数组分块
 *  传入两个参数 第一个为需要分块的数组
 *             第二个size为分块的数量
 *  技巧点在于先将临时数组放入再推入 结果数组  这样可以保证最后不够分一块的数组也可以单独成为一块
 */
function chuck(arr,size) {
  // 定义一个空数组接收结果
  let result = []
  // 临时数组来存放需要分块的数组
  let temp = []
  // 遍历数组
  arr.forEach(item=>{
    // 需要先把temp放入到结果数组中 先把临时数组推入结果数组再向其中推入每一项
    if (temp.length === 0) {
      result.push(temp)
    }
    // 将每一项放入temp中
    temp.push(item)
    // 如果临时数组的长度等于传入的size的话 则证明当前数组已经分好 将临时数组置空即可
    if(temp.length === size) {
      temp = []
    }

  })
  return result
}