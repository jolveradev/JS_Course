let width;
let length;

function calculateArea () {
    length = parseFloat(document.getElementById("length").value);
    width = parseFloat(document.getElementById("width").value);

    let area = length * width;

    document.getElementById("result").innerText = `El area del rectángulo es: ${area}`;
}