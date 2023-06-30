let adButtons = document.querySelectorAll("#ad-selector input");
let adRow = document.getElementById("ad-row");
let adWindow = document.getElementById("ad-window");
let adNumber = 1;

function scrollThruAds(n) {
    let currentLeftMargin = 0;
    for (let i = 0; i < n; i++) {
        currentLeftMargin -= 94.1;    
    }
    adRow.style.marginLeft = String(currentLeftMargin + 94.1) + "vw";
    adWindow.style.opacity = "1";
    adNumber = n;
}

function adFadeInAndOut(n) {
    setTimeout(function() {scrollThruAds(n)}, 750);
    for (let i = 0; i < adButtons.length; i++) {
        adButtons[i].checked = false;
    }
    adButtons[n - 1].checked = true;
    adWindow.style.opacity = "0";
}

function prevAd(n) {
    adNumber -= n;
    if (adNumber < 1) {
        adFadeInAndOut(adButtons.length);
    }
    else {
        adFadeInAndOut(adNumber);
    }
}

function nextAd(n) {
    adNumber += n;
    if (adNumber > adButtons.length) {
        adFadeInAndOut(1);
    }
    else {
        adFadeInAndOut(adNumber);
    }
}