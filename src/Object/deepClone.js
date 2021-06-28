/*
* 对象的深拷贝
* */

/*
方法一 JSON转字符串版
*/
function JSOMDeepClone(target) {
  // 使用目标对象生成JSON 字符串
  // 然后讲生成的JSON 字符串解析 生成一个新的对象
  // 弊端: ① 无法拷贝函数方法
  //      ② 对于循环引用的数据 拷贝时会报错 无法解析
  return JSON.parse(JSON.stringify(target))
}
/*
* 方法二 递归遍历对象 重新添加新的对象或者数组 拷贝其中的基本数据类型的值
* 方法无法解决循环引用的问题 也无法
* */
function deepClone(target) {
  // 判断参数是否为引用数据类型 但是注意 用typeof 判断时会将null 误判为object 所以要将null 给排除掉
  if (typeof target === 'object' && target !== null) {
    // 使用Array.isArray()判断当前的target 为数组还是对象 根据此来创建一个容器
      const result = Array.isArray(target) ? [] : {}
    // 使用for-in 循环的原因是 for循环无法循环没有迭代器入口的数据 无法循环对象 for-in可以循环对象和数组
      for (const key in target) {
          // 判断当前属性是否为对象本身的属性(不能拷贝原型上的属性)
        if (target.hasOwnProperty(key)) {
          // 调用递归 把值返回  若是基本数据类型时 则会走else 直接将值返回
          // 如果是引用数据类型时 会递归再次遍历
          result[key] = deepClone(target[key])
        }
      }
      return result
  }else {
    return target
  }
}

/*
* 方法三 利用map解决互相引用的问题
* 问题 for-in 会遍历原型上的属性 耗费性能
* */
function deepClone1(target,map = new Map()) {
  if (typeof target === 'object' && target !== null) {
    // 利用map的特性 键名可以是一个对象 将递归遍历过的值存入map中做缓存
    let cache = map.get(target)
    // 判断如果缓存中有的话  则不用继续递归 直接将值返回即可
    if (cache) {
      return cache
    }
    const result = Array.isArray(target) ? [] : {}
    // 做缓存
    map.set(target,result)
    for (const key in target) {
      if (target.hasOwnProperty(key)) {
        result[key] = deepClone1(target[key],map)
      }
    }
    return result
  }else {
    return target
  }
}
/**
 * 方法四 forEach替换for-in
 * */
function deepClone2(target,map = new Map()) {
  if (typeof target === 'object' && target !== null) {
    // 利用map的特性 键名可以是一个对象 将递归遍历过的值存入map中做缓存
    let cache = map.get(target)
    // 判断如果缓存中有的话  则不用继续递归 直接将值返回即可
    if (cache) {
      return cache
    }
    const result = Array.isArray(target) ? [] : {}
    // 做缓存
    map.set(target,result)
    if (Array.isArray(target)) {
      target.forEach((item,index)=>{
        result[index] = deepClone2(item,map)
      })
    }else {
      Object.keys(target).forEach(key=>{
          result[key] = deepClone2(target[key],map)
      })
    }
    return result
  }else {
    return target
  }
}