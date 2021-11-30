const PENDING = "pending"
const FULFILLED = "fulfilled"
const REJECTED = "rejected"




class newPromise {
    constructor(executor) {  //executor执行器
        executor(this.resolve, this.reject)
    }
    // 执行状态
    status = PENDING;
    // 保存成功后的值
    value = null;
    // 保存错误
    error = null;

    // 存储成功回调函数
    onFulfilledCallbacks = [];
    // 存储失败回调函数
    onRejectedCallbacks = [];

    // 成功的回调
    resolve = (value) => {
        if (this.status == PENDING) {
            this.status = FULFILLED
            this.value = value
            // 判断成功回调是否存在，如果存在就调用
            while (this.onFulfilledCallbacks.length) {
                this.onFulfilledCallbacks.shift()(value)
            }
        }
    }

    // 失败的回调
    reject = (error) => {
        if (this.status == PENDING) {
            this.status = REJECTED
            this.error = error
            // 判断失败回调是否存在，如果存在就调用
            while (this.onRejectedCallbacks.length) {
                this.onRejectedCallbacks.shift()(value)
            }
        }
    }

    then(onFulfilled, onRejected) {
        if (this.status == FULFILLED) {
            onFulfilled(this.value)
        } else if (this.status == REJECTED) {
            onRejected(this.error)
        } else if (this.status == PENDING) {
            this.onFulfilledCallbacks.push(onFulfilled)
            this.onRejectedCallbacks.push(onRejected)
        }
        return new newPromise(this.resolve)
    }
}

console.log(queueMicrotask);
// const promise = new newPromise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('success')
//     }, 2000);
// })

// promise.then(value => {
//     console.log(1)
//     console.log('resolve', value)
// }).then(value => {
//     console.log(2)
//     console.log('resolve', value)
// })

const p = new Promise((resolve, reject) => {
    resolve('123')
})
const p2 = p.then(res => console.log(res))
console.log(p2);