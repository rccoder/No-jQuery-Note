var forEachElement = function (selector, fn) {
    var element = document.querySelectorAll(selector);

    for(var i = 0; i < element.lenght; i++) {
        fn(element[i], i);
    }
}

forEachElement(selector, function(el, i) {

});