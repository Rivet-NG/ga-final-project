let slideButtons = document.querySelectorAll("#slide-selector input");
let slideRow = document.getElementById("slide-row");
let slidePosition = 1;
let autoSlider = setInterval(function() {slideForward(1)}, 4000);

function chooseSlide(n) {
    let currentLeftMargin = 0;
    for (let i = 0; i < slideButtons.length; i++) {
        slideButtons[i].checked = false;
    }
    slideButtons[n - 1].checked = true;
    for (let i = 0; i < n; i++) {
        currentLeftMargin -= 90;    
    }
    slideRow.style.marginLeft = String(currentLeftMargin + 90) + "vw";
    slidePosition = n;
}

function slideBack(n) {
    clearInterval(autoSlider);
    slidePosition -= n;
    if (slidePosition < 1) {
        chooseSlide(slideButtons.length);
    } 
    else {
        chooseSlide(slidePosition);
    }     
    autoSlider = setInterval(function() {slideForward(1)}, 4000);
}

function slideForward(n) {
    clearInterval(autoSlider);
    slidePosition += n;
    if (slidePosition > slideButtons.length) {
        chooseSlide(1);
    } 
    else {
        chooseSlide(slidePosition);
    }
    autoSlider = setInterval(function() {slideForward(1)}, 4000);
}

function chooseQuickly(n) {
    clearInterval(autoSlider);
    chooseSlide(n);
    autoSlider = setInterval(function() {slideForward(1)}, 4000);
}