var vakjes;

const row1 = document.getElementById("row1");

for(vakjes = 0; vakjes < 25; vakjes++){
    var newDiv = document.createElement("input");
    row1.appendChild(newDiv);
    newDiv.style.background = "blue";
    newDiv.style.verticalAlign = top;
    newDiv.style.marginTop = 4;
    newDiv.style.display = "inline-block";
    newDiv.style.height = '1.25em';
    newDiv.style.width = '1.25em';
    newDiv.style.textAlign = 'center';
    newDiv.style.fontSize = '3.5em';
    newDiv.style.fontFamily = 'Lato', 'sans-serif';
    newDiv.id += 'vakje'+ vakjes;
}  


var randomWord = words[Math.floor(Math.random() * words.length)];

var textArray = randomWord.split('');
document.getElementById('vakje0').value = textArray[0];
console.log(textArray);

const guess = document.getElementById('guess');
    let addGuess = document.createElement('input');
        addGuess.placeholder = 'typ hier.';
        guess.appendChild(addGuess);


const check = document.getElementById('buttoncheck');
    let addCheck = document.createElement('button');
        addCheck.textContent = 'check';
        check.appendChild(addCheck);
    




