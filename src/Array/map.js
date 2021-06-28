function map(arr,callback) {
    // 声明一个空数组 以保存函数处理过后的数组中的每一项
    let result = []
    // 遍历原数组
    for (let i =0;i<arr.length;i++) {
        // 调用callback函数处理每一项 并把当前的index传出去
        result.push(callback(arr[i],i))
    }
    // 将处理后的数据传出
    return result
}