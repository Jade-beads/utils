function reduce(arr,callback,initValue) {
    // 需要一个变量接收一下初始值,当未传入初始值时,默认值为0
    let result = initValue || 0
    // 遍历传入的数组
    for (let i = 0;i < arr.length;i++) {
        // 调用传入的是执行器函数
       result =  callback(result,arr[i])
    }
    return result
}