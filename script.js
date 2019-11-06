var innerBg = document.querySelector(".bg");

function bgChange() {
    if(document.body.style.backgroundColor != "rgb(255, 109, 109)") {
        document.body.style.backgroundColor = "rgb(255, 109, 109)";
        innerBg.style.backgroundColor = "rgb(255, 80, 80)";
    } else {
        document.body.style.backgroundColor = "white";
        innerBg.style.backgroundColor = "rgb(215, 215, 215)";
    }
}