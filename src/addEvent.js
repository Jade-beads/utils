function addEventListener(el,type,fn,selector) {
  // 获取父元素
  if (typeof el === 'string') {
    el = document.querySelector(el)
  }
  // 判断是否传入子元素
  if(!selector) {
    // 若未传入子元素 则直接给父元素绑定事件 让其所有子元素都委托事件
    el.addEventListener(type,fn)
  }else {
    // 若传入子元素
    el.addEventListener(type,function (e) {
      // 获取到目标事件源
      const target = e.target
      // 判断当前目标事件源是否为传入的子元素
      // element.matches(css选择器) 方法可以判断元素是否为当前传入的选择器的元素
      if(target.matches(selector)) {
        // 将this指向当前事件源
        fn.call(target,e)
      }
    })
  }

}