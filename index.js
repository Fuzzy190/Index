//variables
var btn1 = document.getElementById('button1')
var txt1 = document.getElementById('text1').value
let i,j, bI, bC;
//Input
//In means input
var b2i = document.getElementById('base2In')
var b4i = document.getElementById('base4In')
var b8i = document.getElementById('base8In')
var b10i = document.getElementById('base10In')
var b16i = document.getElementById('base16In')

//Convertion
//Con means convertion
var b2c = document.getElementById('base2Con')
var b4c = document.getElementById('base4Con')
var b8c = document.getElementById('base8Con')
var b10c = document.getElementById('base10Con')
var b16c = document.getElementById('base16Con')

function isValidDigit(digit, base){

    if (base <= 10) {
      return digit >= '0' && digit <= String.fromCharCode('0'.charCodeAt(0) + base - 1);
    } else {
      return (digit >= '0' && digit <= '9') || (digit >= 'A' && digit <= 'F');
    }

}
  
function convertDigitToValue(digit){

    if (digit >= '0' && digit <= '9') {
      return digit.charCodeAt(0) - '0'.charCodeAt(0);
    } else {
      return digit.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
    }

}

function main(){
    var txt1 = document.getElementById('text1').value
    var tArea1 = document.getElementById('textArea1')

    var redo = tArea1.value

    if(txt1 == ""){
        alert("Please enter a value")
    }
    else{
        tArea1.value = ""
        //Input
    if(document.getElementById('base2In').selected == true){
        b2i = 2
        bI = b2i
        //alert(bI)
    }
    else if(document.getElementById('base4In').selected == true){
        b4i = 4
        bI = b4i
        //alert(bI)
    }
    else if(document.getElementById('base8In').selected == true){
        b8i = 8
        bI = b8i
        //alert(bI)
    }
    else if(document.getElementById('base10In').selected == true){
        b10i = 10
        bI = b10i
        //alert(bI)
    }
    else if(document.getElementById('base16In').selected == true){
        b16i = 16
        bI = b16i
        //alert(bI)
    }

    //Convert
    if(document.getElementById('base2Con').selected == true){
        b2c = 2
        bC = b2c
        //alert(bC)
    }
    else if(document.getElementById('base4Con').selected == true){
        b2c = 4
        bC = b2c
        //alert(bC)
    }
    else if(document.getElementById('base8Con').selected == true){
        b2i = 8
        bC = b2i
        //alert(bC)
    }
    else if(document.getElementById('base10Con').selected == true){
        b2i = 10
        bC = b2i
        //alert(bC)
    }
    else if(document.getElementById('base16Con').selected == true){
        b2i = 16
        bC = b2i
        //alert(bC)
    }

    let len = txt1.length
    let decimalValue = 0

    for(i = 0; i < len; i++){
        if (!isValidDigit(txt1[i], bI)) {
            tArea1.value = redo
            alert("\nInvalid input value. The value contains digits not compatible with the input base.\n")
            exit(1);
        }
        decimalValue = decimalValue * bI + convertDigitToValue(txt1[i])
    }

    tArea1.value += "-----------------------------------------\n";
    tArea1.value += "|             Conversion Steps          |\n";
    tArea1.value += "-----------------------------------------\n";

    // Step 1: Convert input to decimal
    tArea1.value += "Step 1: Convert input '"+txt1+"' from base "+bI+" to decimal\n\n"
     
    for(i = 0; i < len; i++){
        tArea1.value += "("+convertDigitToValue(txt1[i])+" * "+bI+ "^"+(len - i - 1)+") + "
    }
    tArea1.value += "0\n"
    tArea1.value += " = "+decimalValue+"\n\n"
    tArea1.value += "Step 2: Convert decimal value "+decimalValue+" to base "+bC+".\n\n"

    var quotient, remainder;
    var baseConversion = [];

    quotient = decimalValue;
    var i = 0;
    while (quotient > 0) {
        remainder = quotient % bC;
        quotient = Math.floor(quotient / bC);
        baseConversion[i] = remainder;
        i++;
        tArea1.value += quotient * bC + remainder + " / " + bC + " = " + quotient + ", Remainder = " + remainder + "\n";
    }

    tArea1.value += "\n-----------------------------------------\n"
    tArea1.value += "|           Converted Number             |\n"
    tArea1.value += "-----------------------------------------\n"

    switch (bC) {
        case 2:
            tArea1.value += "Binary: "
            break;
        case 4:
            tArea1.value += "Base4: "
            break;
        case 8:
            tArea1.value += "Base8: "
            break;
        case 16:
            tArea1.value += "Hexadecimal: "
            break;
        default:
            tArea1.value += "Invalid output base. Please enter a valid base.\n"
            exit(1);
    }

    if (i == 0) {
        tArea1.value += "0"
    } else {
        for (j = i - 1; j >= 0; j--) {
            tArea1.value += baseConversion[j]
        }
    }
    tArea1.value += "\n"
    }
}