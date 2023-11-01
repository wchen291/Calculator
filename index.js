function Add() {
    var x = document.getElementById("box1").value;
    var y = document.getElementById("box2").value;

    document.getElementById("answer").value = parseInt(x) + parseInt(y);
    document.form1.submit();
  }

function Subtract() {
    var x = document.getElementById("box1").value;
    var y = document.getElementById("box2").value;

    document.getElementById("answer").value = parseInt(x) - parseInt(y);
    document.form1.submit();
}

function Divide() {
    var x = document.getElementById("box1").value;
    var y = document.getElementById("box2").value;

    document.getElementById("answer").value = parseInt(x) / parseInt(y);
    document.form1.submit();
}

function Multiply() {
    var x = document.getElementById("box1").value;
    var y = document.getElementById("box2").value;

    document.getElementById("answer").value = parseInt(x) * parseInt(y);
    document.form1.submit();
}

function Power() {
    var x = document.getElementById("box1").value;
    var y = document.getElementById("box2").value;

    var total = 1;

    for (var i = 0; i < y; i++) {
      total *= x;
    }

    document.getElementById("answer").value = total;
    document.form1.submit();
}

function Clear() {
    document.getElementById("box1").value = "";
    document.getElementById("box2").value = "";
    document.getElementById("answer").value = "";

    document.form1.submit();
}