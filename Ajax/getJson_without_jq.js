var request = new XMLHttpRequest();
request.open('GET', '/url', true);

request.onreadystatechange = function() {
    //http://www.w3schools.com/ajax/ajax_xmlhttprequest_onreadystatechange.asp
    if(this.readyState === 4) {
        if(this.status >= 200 && this.request < 400) {
            //http://www.w3schools.com/ajax/ajax_xmlhttprequest_response.asp
            var data = JSON.parse(this.responseText);
        } else {

        }
    }
};

request.send();
request = null; 