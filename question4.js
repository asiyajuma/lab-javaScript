// Big Bird Yellow
document.addEventListener("DOMContentLoaded", function() {
    var cookieHeader = document.getElementById("cookie-header");
    cookieHeader.style.color = "#f7f16d";
});

// Count Chocula
window.onload = function() {
    var cookieItems = document.querySelectorAll("#cookie-jar .cookie");
    var cookieCount = document.getElementById("cookie-count");
    cookieCount.style.color = "#f7f16d";
    cookieCount.textContent = cookieItems.length;
};

// Cookie Monster hungry
document.addEventListener("DOMContentLoaded", function() {
    setInterval(function() {
        var cookieJar = document.getElementById("cookie-jar");
        var lastCookie = cookieJar.lastElementChild;
        if (lastCookie) {
            cookieJar.removeChild(lastCookie);
            var cookieCount = document.getElementById("cookie-count");
            var remainingCookies = document.querySelectorAll("#cookie-jar .cookie").length;
            cookieCount.textContent = remainingCookies;
        }
    }, 30000);
});