function filter(arr,callback) {
    // 定义一个结果数组,filter 返回值为一个数组
    let result = []
    // 遍历当前传入数组
    for (let i = 0; i < arr.length;i++ ) {
        // 使用传入回调函数对数组进行操作判断 规定传入的callback函数必须有一个返回值
        let res = callback(arr[i],i)
        // 当返回值为true时,则说明当前项符合callback的过滤条件,则将当前项推入结果数组中
        if(res) {
            result.push(arr[i])
        }
    }
    return result
}