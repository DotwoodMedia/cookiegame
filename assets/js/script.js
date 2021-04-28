let cookies = 0;
let autoClicker = 0;
let cookieAmount = 1;

// Set a new cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Get a cookie from your browser
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

// Check the cookie
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

    var userClicks = getCookie("cookieAmount");
    if (userClicks != "") {
        cookieAmount = parseInt(userClicks);
        document.getElementById("cookieSecond").innerHTML = cookieAmount;
    } else {
        userClicks = cookieAmount;
        if (userClicks != "" && userClicks != null) {
            setCookie("cookieAmount", userClicks, 30);
        }
    }

    var autoClicks = getCookie("autoCookies");
    if (autoClicks != "") {
        autoClicker = parseInt(autoClicks);
    } else {
        autoClicks = autoClicker;
        if (autoClicks != "" && autoClicks != null) {
            setCookie("autoCookies", autoClicks, 30);
        }
    }
}

// Handlers
function cookieAdd(amount) {
    cookies += amount;
    setCookie("cookies", cookies, 30);
    document.getElementById("cookieAmount").innerHTML = cookies;
}

// Voeg die cookies toe
function cookieClick() {
    cookieAdd(cookieAmount);
}

// Per 1 seconde een aantal cookies toevoegen
function autoCookie() {
    setInterval(() => {
        cookieAdd(autoClicker);
    }, 1000)
}

// Verdubbel de tellers
function cookieDubbel() {
    if (cookies > 20) {
        // Remove the cookies
        cookies = cookies - 20;
        document.getElementById("cookieAmount").innerHTML = cookies;
        setCookie("cookies", cookies, 30);

        // Set the auto clicker
        autoClicker = autoClicker * 2;
        setCookie("autoCookies", autoClicker, 30);

        // Set cookie per click
        cookieAmount = cookieAmount * 2;
        document.getElementById("cookieSecond").innerHTML = cookieAmount;
        setCookie("cookieAmount", cookieAmount, 30);
    }
    else {
        alert("Je hebt geen 20 cookies!")
    }
}

// Stel de auto clicker in
function setAutoClicker() {
    if (cookies > 50) {
        // Remove the cookies
        cookies = cookies - 50;
        document.getElementById("cookieAmount").innerHTML = cookies;
        setCookie("cookies", cookies, 30);

        // Set the auto clicker
        autoClicker += 1;
        setCookie("autoCookies", autoClicker, 30);
    }
    else {
        alert("Je hebt geen 50 cookies!")
    }
}

// Bakkers boost (Alles x5)
function bakkersBoost() {
    if (cookies > 200) {
        // Remove the cookies
        cookies = cookies - 200;
        document.getElementById("cookieAmount").innerHTML = cookies;
        setCookie("cookies", cookies, 30);

        // Set the boost
        autoClicker = autoClicker * 5;
        setCookie("autoCookies", autoClicker, 30);

        cookieAmount = cookieAmount * 5;
        setCookie("cookieAmount", cookieAmount, 30);

        setTimeout(() => {
            autoClicker = autoClicker / 5;
            setCookie("autoCookies", autoClicker, 30);

            cookieAmount = cookieAmount / 5;
            setCookie("cookieAmount", cookieAmount, 30);
        }, 10000)
    }
    else {
        alert("Je hebt geen 200 cookies!")
    }
}

// Reset function
function resetCookies() {
    cookies = 0;
    document.getElementById("cookieAmount").innerHTML = cookies;
    setCookie("cookies", cookies, 30);

    autoClicker = 0;
    setCookie("autoCookies", autoClicker, 30);

    cookieAmount = 1;
    document.getElementById("cookieSecond").innerHTML = cookieAmount;
    setCookie("cookieAmount", cookieAmount, 30);
}