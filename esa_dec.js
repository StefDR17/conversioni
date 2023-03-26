let numB;

function converti(){
    let numB = document.getElementById("numero").value;
    let numD = parseInt(numB, 16);
    document.getElementById("risultato").innerHTML = numD;
}
