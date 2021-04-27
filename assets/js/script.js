let cookies = 0;
let autoClicker = 0;
let cookieAmount = 1;

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var userCookies = getCookie("cookies");
    if (userCookies != "") {
        document.getElementById("cookieAmount").innerHTML = userCookies;
        cookies += parseInt(userCookies);
    } else {
        userCookies = cookies;
        if (userCookies != "" && userCookies != null) {
            setCookie("cookies", userCookies, 30);
        }
    }
}

function cookieClick() {
    cookies += cookieAmount;

    setCookie("cookies", cookies, 30);
    document.getElementById("cookieAmount").innerHTML = cookies;
}