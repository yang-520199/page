function f() {
    var bar = document.getElementById("bar");
    if (bar.style.display == "none") {
        bar.style.display = "";
    } else {
        bar.style.display = "none"
    }

}

function s() {
    var bar = document.getElementById("showdata");
    if (bar.style.display == "none") {
        bar.style.display = "";
    } else {
        bar.style.display = "none";
    }

}

function pic() {
    var bar = document.getElementById("bar");
    if (bar.style.display == "none") {
        bar.style.display = "";
    } else {
        bar.style.display = "none";
    }
    var bar = document.getElementById("show");
    if (bar.style.display == "none") {
        bar.style.display = "";
    } else {
        bar.style.display = "none";
    }

}

function s1() {
    document.getElementById("showdata").style.display = "none";
}

function pic1() {
    document.getElementById("bar").style.display = "none";
    document.getElementById("show").style.display = "none";
}

function showdetection() {
    var bar = document.getElementById("showDetection");
    if (bar.style.display == "none") {
        bar.style.display = "";
    } else {
        bar.style.display = "none";
    }
    var bar = document.getElementById("detection");
    if (bar.style.display == "none") {
        bar.style.display = "";
    } else {
        bar.style.display = "none";
    }
}

function showdetection1() {
    document.getElementById("showDetection").style.display = "none";
    document.getElementById("detection").style.display = "none";
}