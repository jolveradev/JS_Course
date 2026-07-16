let width;
let length;

function groceryTracker(grocery1,grocery2,grocery3) {
    return grocery1 + grocery2 + grocery3;
}

function calculoTotal () {
    let grocery1 = parseFloat(document.getElementById("grocery1").value);
    let grocery2 = parseFloat(document.getElementById("grocery2").value);
    let grocery3 = parseFloat(document.getElementById("grocery3").value);
    let total = groceryTracker(grocery1,grocery2,grocery3);

    document.getElementById("result2").innerText = `El total gastado es: ${total}`;
}

function calculateArea () {
    length = parseFloat(document.getElementById("length").value);
    width = parseFloat(document.getElementById("width").value);

    let area = length * width;

    document.getElementById("result").innerText = `El area del rectángulo es: ${area}`;
}
