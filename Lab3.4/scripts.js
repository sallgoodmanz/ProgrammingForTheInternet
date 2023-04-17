

function startAnimation() {
    var circle = document.getElementById('circle');
    circle.style.display = '';
    var moveToRightTimer = setInterval(moveToRight, 10);
    circle.style.width = 50 + 'px';
    circle.style.left = 0 + 'px';
    circle.style.top = 0;
    var offsetTop = 0;
    var offsetLeft = 0;
    var isOnRectangleX = false;
    var isOnRectangleY = false;

    function moveToRight() {

        if (!(isOnRectangleX && isOnRectangleY)) {
            if (circle.offsetLeft < document.getElementById('rectangle').offsetLeft - 50) {
                circle.style.left = (offsetLeft += 4) + 'px';
            } else
                isOnRectangleX = true;
            if (circle.offsetTop > document.getElementById('rectangle').offsetTop + 25) {
                circle.style.top = (offsetTop -= 2) + 'px';
            } else
                isOnRectangleY = true;
        }

        if ((isOnRectangleX && isOnRectangleY)) {
            if (parseInt(circle.style.left.replace('px', '')) + 50 < parseInt(document.getElementById('shapesAnimatiom').style.width.replace('px', ''))) {
                circle.style.left = (offsetLeft += 3) + 'px';
            }
            if (parseInt(circle.style.top.replace('px', '')) < 50) {
                circle.style.top = (offsetTop += 1) + 'px';
            }
        }

        if (isOnRectangleX && isOnRectangleY &&
            parseInt(circle.style.left.replace('px', '')) + 50 >= parseInt(document.getElementById('shapesAnimatiom').style.width.replace('px', ''))
            && circle.style.top.replace('px', '') >= 50) {
            clearInterval(moveToRightTimer);
        }
    }
}

///////////////////////////////////////////////////
///////////////////////////////////////////////////

function sortRandomArrayAndStartGif() {
    gifArray.sort(function () {
        return 0.5 - Math.random();
    });
}

var gifTimer;
var currentimage = 0;

function startGif(time) {
    for (var i = 0; i < 30; i++)
        sortRandomArrayAndStartGif();
    if (gifTimer != null) {
        clearInterval(gifTimer);
    }

    gifTimer = setInterval(function () {
        if (currentimage >= gifArray.length)
            currentimage = 0;
        document.getElementById('slide').setAttribute('src', gifArray[currentimage]);
        currentimage++;
    }, time);
}

///////////////////////////////////////////////////
///////////////////////////////////////////////////

function runningLine2() {
    moveElement = document.getElementById('move-me-2');
    moveElement.style.scale = 1.2;

    var phx = 1;
    var rho = 0;
    var rwo = 0;
    var rhooffset = 200;
    var rwooffset = 4;
    var moveElement;

    setInterval(function () {
        if (moveElement.offsetLeft + (moveElement.innerHTML.length) >= 25) {
            phx -= rwooffset;
        } else if (moveElement.offsetLeft < -500) {
            phx += rwooffset;
        }

        rwo += phx * rwooffset;
        rho = yFunc(rwo / 130) * rhooffset;

        moveElement.style.top = rho + 'px';
        moveElement.style.left = rwo + 'px';
    }, 50);
    setInterval(blink, 500);

    function yFunc(x) {//y=exp(x)+cos(x^2 ).
        return Math.exp(x) + Math.cos(Math.pow(x, 2));
    }

    function blink() {
        if (moveElement.style.color == 'darkorange' || moveElement.style.color == '') {
            moveElement.style.color = 'black';
            moveElement.style.backgroundColor = '#FF8C00';
        } else if (moveElement.style.color == 'black') {
            moveElement.style.color = 'lightskyblue';
            moveElement.style.backgroundColor = 'black';
        } else if (moveElement.style.color == 'lightskyblue') {
            moveElement.style.color = 'lawngreen';
            moveElement.style.backgroundColor = '#00008B';
        } else if (moveElement.style.color == 'lawngreen') {
            moveElement.style.color = 'darkorange';
            moveElement.style.backgroundColor = '#4B0082';
        }
    }
}

///////////////////////////////////////////////////
///////////////////////////////////////////////////


function runningLine() {
    moveElement = document.getElementById('move-me-1');

    var phx = Math.PI / 6;
    var phy = Math.PI / 6;
    var rho = 0;
    var rwo = 0;
    var rhooffset = 2;
    var rwooffset = 2;
    var moveElement;

    setInterval(function () {
        if (moveElement.offsetTop >= document.body.clientHeight) {
            phy = Math.PI - Math.PI / 6;
        } else if (moveElement.offsetTop < 0) {
            phy = Math.PI / 6;
        }

        if (moveElement.offsetLeft + (moveElement.innerHTML.length * 7) >= document.body.clientWidth) {
            phx = Math.PI - Math.PI / 6;
        } else if (moveElement.offsetLeft < 0) {
            phx = Math.PI / 6;
        }

        rho += Math.cos(phy) * rhooffset;
        rwo += Math.cos(phx) * rwooffset;

        moveElement.style.top = rho + 'px';
        moveElement.style.left = rwo + 'px';
    }, 1);
}


///////////////////////////////////////////////////
///////////////////////////////////////////////////

var isLeftMargin = true;
function startRunning(element = new HTMLElement) {
    if (element.style.marginLeft == '') {
        element.style.marginLeft = "0px";
        element.style.marginRight = "0px";
    }

    if (parseInt(element.style.marginLeft.replace("px")) >= document.body.clientWidth - (element.innerHTML.length * 8)) {
        isLeftMargin = false;
    } else if (parseInt(element.style.marginLeft.replace("px")) < 0) {
        isLeftMargin = true;
    }

    var marginLeft = parseInt(element.style.marginLeft.replace("px"));
    var marginRight = parseInt(element.style.marginRight.replace("px"));
    if (isLeftMargin) {
        element.style.marginLeft = marginLeft + 5 + "px";
        element.style.marginRight = marginRight - 5 + "px";
    } else {
        element.style.marginRight = marginRight + 5 + "px";
        element.style.marginLeft = marginLeft - 5 + "px";
    }

}