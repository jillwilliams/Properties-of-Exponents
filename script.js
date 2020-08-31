const myProblem = () => {
    var answ = document.getElementById("answ1").value;
    if (answ == "x^8y^6z^4") {
        return "Good Job!"
    }  else
        return "Try Again!"
};
const myCalc = () => {
    document.getElementById("demo").innerHTML = myProblem();
}

const myProblem2 = () => {
    var answ = document.getElementById("answ2").value;
    if (answ == "x^10y^20z^6") {
        return "Good Job!"
    }  else
        return "Try Again!"
};
const myCalc2 = () => {
    document.getElementById("demo2").innerHTML = myProblem2();
}

const myProblem3 = () => {
    var answ = document.getElementById("answ3").value;
    if (answ == "(x^15/y^10)z^12") {
        return "Good Job!"
    }  else
        return "(x^15/y^10)z^12";
};
const myCalc3 = () => {
    document.getElementById("demo3").innerHTML = myProblem3();
}