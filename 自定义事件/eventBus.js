(function(window) {
    // 创建$eventBus 对象
    const eventBus = {}
    // 保存所有回调
    // eg 'add': {uid: function} 每个类型多个对应uid 以及回调
    let callbackFunction = {}
    let id = 0

    // on 
    // this.$eventBus.$on('name',callback)
    eventBus.on = function(name,callback) {
        // console.log(name,callback)
        let callbacks = callbackFunction[name] // 取出name
        if (!callbacks) {
            // 判断callbackFunction 里面是否存在
            callbacks = {}
            // console.log(callbackFunction,callbacks)

            // callbackFunction 里面不存在
            // 将传递过来的name 变为callbackFunction 的下标(子对象)
            callbackFunction[name] = callbacks
            // console.log(callbackFunction,callbacks)
        }

        const token = 'uid_' + (id++)

        // 这里添加token 却修改了上面的console 值
        // 是因为callbackFunction 指向内存的数据被我们修改了，指针指向的数据变化，导致console 的值变化 
        callbacks[token] = callback

        // 能外部能够通过$off 和 token 来取消绑定
        return token
    }

    // emit
    eventBus.emit = function(name,value) {
        // console.log(name,value)
        // name 函数名称
        // 找到calllbackFunction 里面保存与传递过来的name 相同的子对象
        let callbacks = callbackFunction[name]
        // console.log(callbacks)
        Object.values(callbacks).forEach((callback) => {
            // 遍历对象里面的值，values 变为数组 
            callback()
        })
        // console.log(callbackFunction,Object.values(callbackFunction),callbacks)
    }

    // off
    eventBus.off = function(token) {
        // 1. 没有传递值
        if (token === undefined) {
            callbackFunction = {}
        }
        // 2. 传递uid
        else if (typeof(token) === 'string' && token.indexOf('uid_') === 0) {
            // console.log(token)
            Object.values(callbackFunction).forEach((item) => {
                // delete 操作符用于删除对象的某个属性；如果没有指向这个属性的引用，那它最终会被释放
                // item {uid_0: f,uid_1: f}
                delete item[token]
            })
        }
        // 3. 传递值
        else {
            delete callbackFunction[token]
            console.log(callbackFunction)
        }
    }
    
    // 暴露
    window.eventBus = eventBus

})(window)