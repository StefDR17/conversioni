let numD;

function converti(){
    let numD = document.getElementById("numero").value;
    let numB = "";
    while(numD>0){
            if(numD%2==0){
                numB='0'+ numB;
            }
            else{
                numB='1'+ numB;
            }
            numD = Math.floor(numD / 2);
        }
    document.getElementById("risultato").innerHTML = numB;
}