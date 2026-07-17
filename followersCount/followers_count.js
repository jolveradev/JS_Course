let count=0;

function increaseCount() {
    count++; // se incrementa el contador de seguidores
    displayCount(); //muestra el conteo
    checkCountValue(); // Verificar el valor del count y mostrar mensajes
}

function displayCount() {
    document.getElementById("countDisplay").innerHTML = count;//mostrar el conteo en el HTML
}

function checkCountValue() {
    if(count === 10) {
        alert("¡Tu publicación de Instagram ganó 10 seguidores! ¡Felicidades!")
    } else if (count === 20) {
        alert("¡Tu publicación de Instagram ganó 20 seguidores! ¡Sigue así!");
    }    
}

function resetCount() {
    count=0; // se incrementa el contador de seguidores
    displayCount(); //muestra el conteo
    alert("Se ha restablecido el conteo de seguidores");
}