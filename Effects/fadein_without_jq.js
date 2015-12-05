var fadeIn = function(ele) {
    var opacity = 0;

    ele.style.opacity = 0;
    //http://www.w3schools.com/jsref/prop_style_filter.asp
    ele.style.filter = '';

    var last = +new Date();
    var tick = function() {
        opacity += (new Date() - last) / 400;
        ele.style.opacity = opacity;
        ele.style.filter = 'alpha(opacity=' + (100 * opacity) | 0 + ')';

        last = +new Date();

        if(opacity < 1) {
            window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 16);
        }
    }
    tick();
};

fideIn(ele);