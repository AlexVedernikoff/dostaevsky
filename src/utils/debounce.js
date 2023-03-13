function debounce(callback, delay) {
    let timer;
    return function (...args) {
        // console.log(args)
        clearTimeout(timer);
        timer = setTimeout((() => {
            callback.apply(this, args)
        }), delay)
    }
}

export default debounce;
