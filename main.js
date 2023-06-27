var rand = Math.floor(Math.random() * 5000) + 100;
var c = 0;
const time = document.getElementById("time");
var count = 0
function start(){
    document.getElementById("not-needed").innerHTML = ++c
    var count = count + 1
    document.getElementById("header").innerHTML = "Click on the light box as fast as you can when the last light turns green"
    if (c === 5) {
        window.clearInterval(myTimer);
        setTimeout(test, rand);
    }
     else if (c === 1) {
        document.getElementById("left").style.backgroundColor = "red"
    }
    else if (c === 2) {
        document.getElementById("mid").style.backgroundColor = "red"
    }
    else if (c === 3) {
        document.getElementById("mid1").style.backgroundColor = "red"
    }
    else if (c === 4) {
        document.getElementById("mid2").style.backgroundColor = "red";
    }
}
function test(){
    c = 0;
    tester = setInterval(timing, 10)
    document.getElementById("right").style.backgroundColor = "#66c437"
}
function timing(){
    document.getElementById("time").innerHTML = ++c/100 + " seconds"
}