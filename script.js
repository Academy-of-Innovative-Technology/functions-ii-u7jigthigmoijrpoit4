function operation1(num1, num2){
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    let resultInteger = num1 += num2;
    let result = document.querySelector("#basicResult");
    result.innerHTML = resultInteger;
}

document.querySelector("#button1").addEventListener("click", operation1);

function operation2(num1, num2){
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    let resultInteger = num1 -= num2;
    let result = document.querySelector("#basicResult");
    result.innerHTML = resultInteger;
}

document.querySelector("#button2").addEventListener("click", operation2);

function operation3(num1, num2){
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    let resultInteger = num1 *= num2;
    let result = document.querySelector("#basicResult");
    result.innerHTML = resultInteger;
}

document.querySelector("#button3").addEventListener("click", operation3);

function operation4(num1, num2){
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    let resultInteger = num1 /= num2;
    let result = document.querySelector("#basicResult");
    result.innerHTML = resultInteger;
}

document.querySelector("#button4").addEventListener("click", operation4);

function operation5(num1, num2){
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    let resultInteger = num1 %= num2;
    let result = document.querySelector("#basicResult");
    result.innerHTML = resultInteger;
}

document.querySelector("#button5").addEventListener("click", operation5);

// MATH FORMULAS!@U@#UH# 

function area(l, w){
    l = parseFloat(document.getElementById("rectLength").value);
    w = parseFloat(document.getElementById("rectWidth").value);
    let areaResult = l *= w;
    let result = document.querySelector("#rectResult");
    result.innerHTML = areaResult;
}

document.querySelector("#rectButton").addEventListener("click", area);

function areaCircle(r){
    r = parseFloat(document.getElementById("circleRadius").value);
    let areaResult = Math.PI * (r ** 2);
    let result = document.querySelector("#circleResult");
    result.innerHTML = areaResult;
}

document.querySelector("#circleButton").addEventListener("click", areaCircle);

function pythagorean(a, b){
    a = parseFloat(document.getElementById("sideA").value);
    b = parseFloat(document.getElementById("sideB").value);
    
}