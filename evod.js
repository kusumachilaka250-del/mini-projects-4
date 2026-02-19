function checkNumber() {

    let num = Number(document.getElementById("number").value);

    if (num % 2 === 0) {
        document.getElementById("result").innerHTML =
            "The number is Even";
    } else {
        document.getElementById("result").innerHTML =
            "The number is Odd";
    }
}
