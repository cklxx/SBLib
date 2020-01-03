Function.prototyoe.myCall = function(context){
    context = context||window;
    context.fn = this;
    const args = [...arguments].slice(1);
    results = context.fn(...args);
    delete context.fn;
    return results;
}

Function.prototype.myApply = function(context){
    if(typeof this !== 'function'){
        throw new TypeError('Error');
    }
    context = context||window;
    context.fn = this;
    let result;
    if(arguments[1]){
        result = context.fn(...arguments[1]);
    }else{
        result = context.fn()
    }
    delete context.fn;
    return result;
}

Function.prototype.myBind = function(context){
    if (typeof this !== 'function'){
        throw new TypeError('Error');
    }
    const _this = this;
    const args = [...arguments].slice(1);

    return function fn(){
        if (this instanceof fn){
            return new _this(...args,...arguments);
        }
        return _this.apply(context,args.concat(...arguments));
    }
}