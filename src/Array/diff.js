/**
 * 数组取差
 * 传入两个数组 可以返回数组1与数组2的不同项组成的数组
 */
function diff(arr1,arr2) {
  // 上面都是条件判断
  if (arr1.length === 0) return  []
  if (Array.isArray(arr2) && arr2.length === 0) return arr1.slice()
  if (!Array.isArray(arr2)) throw new Error('第二个参数必填')
  // 直接用过滤过滤当前项是否在arr2中
  return arr1.filter(item => !arr2.includes(item))
}