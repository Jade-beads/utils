function throttle(callback,wait) {
    // 定义开始时间 当函数第一次执行时不用记录时间
    let start = 0;
    // 当前值的返回值一定是一个函数
    return function (e) {
        // 获取当前时间戳
        let now  = new Date()
        // 若当前时间减去开始时间大于定义的等待时长时才执行函数
        if(now - start >= wait) {
            // 调用函数 并将this指向事件源
            callback.call(this,e)
            // 更改开始时间戳
            start = now
        }
    }
}