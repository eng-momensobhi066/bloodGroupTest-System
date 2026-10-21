
document.getElementById("btn").onclick = function () {
    let AY = document.getElementById('AAY').checked;
    let BY = document.getElementById('BBY').checked;
    let DY = document.getElementById('DDY').checked;

    let AN = document.getElementById('AAN').checked;
    let BN = document.getElementById('BBN').checked;
    let DN = document.getElementById('DDN').checked;
    let time = 5;
    if (AY == true && BY == true && DY == true) {
        document.querySelector("#time").style.display = "block";
        document.getElementById("timer").innerHTML = time;


        let timer22 = setInterval(function () {
            time--;
            document.getElementById("timer").innerHTML = time;
            if (time == 0) {
                clearInterval(timer22);
                window.location.href = "pageAB+.html";

            }
        }, 1000)

    }
    else if (AY == true && BY == true && DN == true) {
        document.querySelector("#time").style.display = "block";
        document.getElementById("timer").innerHTML = time;


        let timer22 = setInterval(function () {
            time--;
            document.getElementById("timer").innerHTML = time;
            if (time == 0) {
                clearInterval(timer22);
                window.location.href = "pageAB-.html";
            }
        }, 1000)
    } else if (AY == true && BN == true && DN == true) {
        document.querySelector("#time").style.display = "block";
        document.getElementById("timer").innerHTML = time;


        let timer22 = setInterval(function () {
            time--;
            document.getElementById("timer").innerHTML = time;
            if (time == 0) {
                clearInterval(timer22);
                window.location.href = "pageA-.html";
            }
        }, 1000)
    } else if (AY == true && BN == true && DY == true) {
        document.querySelector("#time").style.display = "block";
        document.getElementById("timer").innerHTML = time;


        let timer22 = setInterval(function () {
            time--;
            document.getElementById("timer").innerHTML = time;
            if (time == 0) {
                clearInterval(timer22);
                window.location.href = "pageA+.html";
            }
        }, 1000)
    } else if (AN == true && BY == true && DN == true) {
        document.querySelector("#time").style.display = "block";
        document.getElementById("timer").innerHTML = time;


        let timer22 = setInterval(function () {
            time--;
            document.getElementById("timer").innerHTML = time;
            if (time == 0) {
                clearInterval(timer22);
                window.location.href = "pageB-.html";
            }
        }, 1000)
    } else if (AN == true && BY == true && DY == true) {
        document.querySelector("#time").style.display = "block";
        document.getElementById("timer").innerHTML = time;


        let timer22 = setInterval(function () {
            time--;
            document.getElementById("timer").innerHTML = time;
            if (time == 0) {
                clearInterval(timer22);
                window.location.href = "pageB+.html";
            }
        }, 1000)
    } else if (AN == true && BN == true && DN == true) {
        document.querySelector("#time").style.display = "block";
        document.getElementById("timer").innerHTML = time;


        let timer22 = setInterval(function () {
            time--;
            document.getElementById("timer").innerHTML = time;
            if (time == 0) {
                clearInterval(timer22);
                window.location.href = "pageO-.html";
            }
        }, 1000)
    } else if (AN == true && BN == true && DY == true) {
        document.querySelector("#time").style.display = "block";
        document.getElementById("timer").innerHTML = time;


        let timer22 = setInterval(function () {
            time--;
            document.getElementById("timer").innerHTML = time;
            if (time == 0) {
                clearInterval(timer22);
                window.location.href = "pageO+.html";
            }
        }, 1000)
    } else {
        alert(" خطأ❗: تاكد من اختيار الاجابات بشكل كامل  ")
    }
}



