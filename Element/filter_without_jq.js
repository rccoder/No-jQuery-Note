var filter = function(selector, filterFn) {
    var elements = document.querySelectorAll(selector);

    var o = [];

    for(var i = 0; i < elements.length; i++) {
        if(filterFn(elements[i])) {
            o.unshift(elements[i]);
        }
    }

    return o;
}
filter(selector, filterFn);