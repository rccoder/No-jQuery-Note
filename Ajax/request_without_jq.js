var request = new XMLHttpRequest();
request.open('GET', '/url', true);

request.onreadystatechange = function() {
    if(this.readyState === 4) {
        if(this.state >= 200 && this.state < 400) {
            var res = this.responseText;
        } else {

        }
    }
};

request.send(data);
request= null;