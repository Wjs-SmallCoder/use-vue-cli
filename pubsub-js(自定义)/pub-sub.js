// es5 模块
(function(w) {
    // 定义PubSub 对象
    const PubSub = {}
    // 用来保存所有待处理的回调
    // eg 'add': {uid: function} 每个类型多个对应uid 以及回调
    const callbackContainer = {}
    const id = '1'

    PubSub.subscribe = function(msg,callback) {
        // 将类型(msgName)，uid 和callback 添加进callbackContainer
        let callbacks = callbackContainer[msg]
        if (!callbacks) {
            callbacks = {};
            callbackContainer[msg] = callbacks;
        }
        const token = 'uid_' + id++;
        callbacks[token] = callback;

        // 便于外部通过token 取消
        return token
    }

    // 异步 msg data
    PubSub.publish = function(msg,data) {
        const callbacks = callbackContainer[msg]
        // 拿到callbackContainer 里面对应msg的数据
        if (callbacks) {
            // callbacks 存在则遍历并执行里面的callback 
            Object.values(callbacks).forEach(callback => {
                setTimeout(() => {
                    // setTimeout 同来执行异步
                    callback()
                })
            })
        }
    }

    // 同步 msg data
    PubSub.publishSync = function(msg,data) {
        const callbacks = callbackContainer[msg]
        if (callbacks) {
            Object.values(callbacks).forEach(callback => {
                callback()
            })
        }
    }

    // 暴露模块
    w.PubSub = PubSub
})(window)