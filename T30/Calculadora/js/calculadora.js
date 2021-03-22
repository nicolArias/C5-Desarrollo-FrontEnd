var num = "";
var num1 = 0;
var num2 = "";
var op = "";
var isOperacion = false;

$(function() {

    $(".btn1").click(function() {
        if (isOperacion) {
            num = $(this).val();
            acc = 0;
            op = "";
            num2 = "";
            isOperacion = false;
            $("#operaciones").val(num);
            $(".op").prop("disabled", false);
            $("#resultText").val("0")
        } else {
            if (op == "") {
                num += $(this).val();
                $("#operaciones").val(num);
            } else {
                num += $(this).val();
                $("#operaciones").val(num);
                num2 += $(this).val();
            }

        }
    });

    $(".btn2").click(function() {

        let operacion = $(this).val();
        switch (operacion) {
            case "/":
                calcular("/");
                break;
            case "*":
                calcular("*");
                break;
            case "-":
                calcular("-");
                break;
            case "+":
                calcular("+");
                break;
            case "del":
                borrar();
                break;
            case "=":
                resultado(op);
                break;
        }
        if (op != "") {
            $(".op").prop("disabled", true);
        }
    });
});

function calcular(signo) {
    num1 = num;
    op = signo;
    num += signo;
    $("#operaciones").val(num);
}

function borrar() {
    if (op = num.substring(num.length - 1, num.length)) {
        op = "";
        $(".op").prop("disabled", false);
    }
    num = num.slice(0, -1);
    $("#operaciones").val(num);
}

function resultado(signo) {
    let result;
    switch (signo) {
        case "/":
            result = parseInt(num1) / parseInt(num2);
            $("#resultText").val(result);
            isOperacion = true;
            break;
        case "*":
            result = parseInt(num1) * parseInt(num2);
            $("#resultText").val(result);
            isOperacion = true;
            break;
        case "-":
            result = parseInt(num1) - parseInt(num2);
            $("#resultText").val(result);
            isOperacion = true;
            break;
        case "+":
            result = parseInt(num1) + parseInt(num2);
            $("#resultText").val(result);
            isOperacion = true;
            break;
    }
}