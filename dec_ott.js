let numD;

function converti(){
    let numD = document.getElementById("numero").value;
    let numB = "";
    while(numD>0){
        switch(numD%8){
            case 0:
            numB='0'+ numB;
            break;
            
            case 1:
            numB='1'+ numB;
            break;
            
            case 2:
            numB='2'+ numB;
            break;
            
            case 3:
            numB='3'+ numB;
            break;
            
            case 4:
            numB='4'+ numB;
            break;
            
            case 5:
            numB='5'+ numB;
            break;
            
            case 6:
            numB='6'+ numB;
            break;
            
            case 7:
            numB='7'+ numB;
            break;
        }
        numD = Math.floor(numD / 8);
    }
    document.getElementById("risultato").innerHTML = numB;
}