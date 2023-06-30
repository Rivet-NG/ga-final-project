let movingShelf = document.getElementById("moving-shelf");
let bookRow = document.querySelectorAll(".book-row");
let bookButtons = document.querySelectorAll("#book-selector input");
let rowNumber = 1;

function checkOutBooks(n) {
    let currentLeftMargin = -0.5;
    for (let i = 0; i < bookButtons.length; i++) {
        bookButtons[i].checked = false;
    }
    bookButtons[n - 1].checked = true;
    if (window.matchMedia("(min-width: 1025px)").matches) {
        for (let i = 0; i < n; i++) {
            let imageWidthTotal = bookRow[i].childElementCount * 6;
            let whiteSpaceCount = bookRow[i].childNodes.length - bookRow[i].childElementCount;
            let gapCount = whiteSpaceCount - 2;
            currentLeftMargin -= imageWidthTotal;
            currentLeftMargin -= gapCount;
            currentLeftMargin -= 1; 
        }
    }
    else {
        for (let i = 0; i < n; i++) {
            currentLeftMargin -= 84;
        }
    }
    movingShelf.style.marginLeft = String(currentLeftMargin + 84) + "vw";
    rowNumber = n;    
}

function checkOnLeft(n) {
    rowNumber -= n;
    if (rowNumber < 1) {
        checkOutBooks(bookButtons.length);
    }
    else {
        checkOutBooks(rowNumber);
    }
}

function checkOnRight(n) {
    rowNumber += n;
    if (rowNumber > bookButtons.length) {
        checkOutBooks(1);
    }
    else {
        checkOutBooks(rowNumber);
    }
}