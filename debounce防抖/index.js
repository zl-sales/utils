//所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。


/**
 * 
 * @param {*} fn 执行函数
 * @param {*} delay 延时时间
 */



function debounce(fn, delay = 1000) {
    let timer;
    return function () {
        let context = this;
        let arg = arguments;
        
        if(timer) clearTimeout(timer);

        timer = setTimeout(() => {
            /**
             * @param  context 保存this指向
             * @param  arg  伪数组参数
             */
            fn.apply(context,arg) 
        }, delay);
    }
}