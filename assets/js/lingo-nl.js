var vakjes;

const row1 = document.getElementById("row1");

for(vakjes = 0; vakjes < 24; vakjes++){
    var newDiv = document.createElement("input");
    newDiv.type = "text";
    newDiv.readOnly;
    row1.appendChild(newDiv);
    newDiv.style.background = "red";
    newDiv.style.verticalAlign = 'top';
    newDiv.style.marginTop = '4px';
    newDiv.style.display = "inline-block";
    newDiv.style.height = '1.25em';
    newDiv.style.width = '1.25em';
    newDiv.style.textAlign = 'center';
    newDiv.style.fontSize = '3.5em';
    newDiv.style.fontFamily = 'Lato', 'sans-serif'
}  

var randomWord = words[Math.floor(Math.random() * words.length)];

var textArray = randomWord.split('');
document.getElementById('vakje1').value = textArray[0];

const guess = document.getElementById('guess');
    let addGuess = document.createElement('input');
        addGuess.placeholder = 'typ hier.';
        addGuess.style.display = 'inline-block';
        guess.appendChild(addGuess);

const check = document.getElementById('buttoncheck');
    let addCheck = document.createElement('button');
        addCheck.textContent = 'check';
        addCheck.style.display = 'inline-block';
        check.appendChild(addCheck);







