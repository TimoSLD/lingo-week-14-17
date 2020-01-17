var vakjes;


const row1 = document.getElementById("row1");
var poging = 0

for(rij = 0; rij < 5; rij++){
    for(kolom = 0; kolom < 5; kolom++){
    var newDiv = document.createElement("input");
    row1.appendChild(newDiv);
    newDiv.style.background = "white";
    newDiv.style.verticalAlign = top;
    newDiv.style.marginTop = 4;
    newDiv.style.display = "inline-block";
    newDiv.style.height = '1.25em';
    newDiv.style.width = '1.25em';
    newDiv.style.textAlign = 'center';
    newDiv.style.fontSize = '3.5em';
    newDiv.style.fontFamily = 'Lato', 'sans-serif';
    newDiv.id += 'vakje'+ rij + '-' + kolom;
    }
}  

var randomWord = words[Math.floor(Math.random() * words.length)];

var textArray = randomWord.split('');
document.getElementById('vakje0-0').value = textArray[0];
console.log(textArray);


function check(){ 
  var antwoord = document.getElementById('antwoord');
  var antwoord = antwoord.value.split('');
   
    if (antwoord.length == 5) {
        for(i = 0; i < antwoord.length; i++){
            if(antwoord[i] == textArray[i]) {
                document.getElementById("vakje" + poging + "-" + i).value = antwoord[i];
                document.getElementById("vakje" + poging + "-" + i).style.backgroundColor = "green";
                textArray[i] = '*';
            }   else if (textArray.indexOf(antwoord[i])>-1) {
                    document.getElementById("vakje" + poging + "-" + i).value = antwoord[i];
                    document.getElementById("vakje" + poging + "-" + i).style.backgroundColor = "yellow";
                } else {
                    document.getElementById("vakje" + poging + "-" + i).value = antwoord[i];
                    document.getElementById("vakje" + poging + "-"+ i).style.backgroundColor = "red";
                }
        }
    }
    poging++
    }

    




