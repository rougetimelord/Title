function getCookie(cname) {
    //thx w3schools for cookie code
    cname += "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
}
function setCookie() {
    var a;
    if (!isMobile()) {
        a = confirm('Do you want to have a scrolling title on this page?');
        var d = new Date();
        //Add 3 days to today
        d.setTime(d.getTime() + (3 * 24 * 60 * 60 * 1000));
        d = "expires=" + d.toUTCString();
        document.cookie = "roBool" + "=" + a + "; " + d;
        if (!a) {
            //If client says no tell them how long it'll be gone and make the cookie false
            alert('Scrolling title disabled for three days');
        }
    }
    else
        a = false;
    //Return whatever
    return a;
}
var isMobile = {
        return: navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|Mobi|BB10; Touch/i)
}
function checkCookie() {
    var en = getCookie("roBool");
    //Get the cookie
    if (en == "true") {
        en = Boolean(true);
    }
    if (en == "false") {
        en = Boolean(false);
    }
    var r = typeof (en) == "boolean" ? en : setCookie();
    //If the cookie is set pass the value else bake the cookie
    return r;
}
function titleChange(a, b) {
    var title = document.getElementsByTagName("title")[0], titleStr = typeof (a) != "undefined" ? a.toString() + " " : "Rouge's title script" + " ", count = titleStr.length - 1;
    var ms = typeof (b) != "undefined" ? b : 300, i = 0, go = checkCookie(), func = function () {
        var titleTemp = "";
        for (var r = i; r <= i + count - 1; r++) {
            titleTemp += (titleStr[r] == " ") ? "&nbsp" : titleStr[r];
        }
        title.innerHTML = titleTemp;
        i = (i + count >= titleStr.length) ? 0 : i + 1;
    };
    /*title gets the title element,
	titleStr is the text that gets played through,
	count is the amount of characters in the title at once,
	ms is ms delay for the next character,
	i is the current index of the text,
  func is a variable function (Whoa) that does the actual stuffwhoo*/
    for (var r = 0; r < count; r++) {
        titleStr += titleStr[r];
        /*lazy way to make the text loop prettily, last number should be count - 1*/
    }
    func();
    if (!go) {
        console.log("You disabled this script at some point");
        throw '';
    }
    var loop = setInterval(function () { func() }, ms);
    //var stop = function(){clearInterval(loop); loop = 0};
    //setTimeout(stop(), 10000);
    //window.onfocus = loop();
    //window.onblur = stop();
}