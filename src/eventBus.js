
const eventBus = {
  callbacks:{}
}

eventBus.on = function (type,callback) {
  if(this.callbacks[type]) {
    this.callbacks[type].push(callback)
  }else {
    this.callbacks[type] = [callback]
  }
}

eventBus.emit = function (type,data) {
  if (this.callbacks[type] && this.callbacks[type].length > 0) {
    this.callbacks[type].forEach(callback=>{
      callback(data)
    })
  }
}

eventBus.off= function (type) {
  if(type) {
    delete this.callbacks[type]
  }else {
    this.callbacks = {}
  }
}

