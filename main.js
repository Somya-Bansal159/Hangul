var type = 2 // vowel = 0; cons = 1; both = 2
var ans;

var display = document.getElementsByClassName("answer")[0];

vowels = ['ㅏ', 'ㅑ', 'ㅓ', 'ㅕ', 'ㅗ', 'ㅛ', 'ㅜ', 'ㅠ', 'ㅡ', 'ㅣ'];
consonants = ['ㄱ','ㄴ','ㄷ','ㄹ','ㅁ','ㅂ','ㅅ','ㅇ','ㅈ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];

vowelPron = ['A', 'YA', 'AW', 'YAW', 'O', 'YO', 'OO', 'YOO', 'EU or U', 'I or EE'];
consonantPron = ['K or G', 'N', 'D or T', 'R or L', 'M', 'B or P', 'S', 'NG', 'J', 'CH', 'KH', 'TH', 'PH', 'H'];

var vowelCol = document.getElementsByClassName("vowels")[0];
vowelCol.innerHTML = "";
vowelPron.forEach(element => {
    vowelCol.innerHTML += `<button onclick="displayCorrectAns(this)">` + element + `</button>`
});

var consonantsCol = document.getElementsByClassName("consonants")[0];
consonantsCol.innerHTML = "";
consonantPron.forEach(element => {
    consonantsCol.innerHTML += `<button onclick="displayCorrectAns(this)">` + element + `</button>`
});

newLetter();

function changeType(button) {
    if(button.innerHTML == "Vowels") {
        type = 0;
        consonantsCol.setAttribute("style", "display: none");
        vowelCol.setAttribute("style", "display: flex");
    }
    else if(button.innerHTML == "Consonants") {
        type = 1;
        consonantsCol.setAttribute("style", "display: flex");
        vowelCol.setAttribute("style", "display: none");
    }
    else if(button.innerHTML == "All") {
        type = 2;
        consonantsCol.setAttribute("style", "display: flex");
        vowelCol.setAttribute("style", "display: flex");
    }

    const buttons = document.getElementsByClassName("top")[0].getElementsByTagName("button");
    for(let button of buttons) {
        button.classList.remove("active");
    }
    button.classList.add("active");
    newLetter();
}

function displayCorrectAns(button) {
    if(button.innerHTML == ans) {
        display.innerHTML = "Hurray! " + ans + " is the right answer.";
    }
    else {
        display.innerHTML = "OOPS! The right answer is " + ans;
    }
    setTimeout(() => {
        newLetter();
    }, 1500);
}

function newLetter() {
    if(type == 0) {
        var randomIndex = Math.floor(Math.random() * vowels.length)
        document.getElementsByClassName("letter")[0].innerHTML = vowels[randomIndex];
        ans = vowelPron[randomIndex];
    } else if(type == 1) {
        var randomIndex = Math.floor(Math.random() * consonants.length)
        document.getElementsByClassName("letter")[0].innerHTML = consonants[randomIndex];
        ans = consonantPron[randomIndex];
    } else {
        type = Math.floor(Math.random() * 2);
        newLetter();
        type = 2;
    }
    display.innerHTML = "Guess the pronounciation";
}