var allQuestions = [{
    "question": "Who was Luke's wingman in the battle at Hoth?",
    "choices": ["Dak", "Biggs", "Wedge", "fx-7"],
    "correctAnswer": 0
}, {
    "question": "What is the name of Darth Vader's flag ship?",
    "choices": ["The Avenger", "Devastator ", "Conquest", "The Executor"],
    "correctAnswer": 3
}, {
    "question": "What is the registry of the Starship Reliant?",
    "choices": ["NX-01", "NCC-1864", "NCC-1701", "NCC-2000"],
    "correctAnswer": 1
}, {
    "question": "What are the time traveling denizens in the Fringe universe called?",
    "choices": ["The Observers", "The Watchers ", "The Sentinels", "The Oa"],
    "correctAnswer": 0
}, {
    "question": "Who owned the Millennium Falcon before Han Solo?",
    "choices": ["Dengar", "Lobot ", "Max Rebo", "Lando Calrissian"],
    "correctAnswer": 3
}, {
    "question": "What Marvel character is bascially a tribute to Superman?",
    "choices": ["Thor", "Hyperion", "Gladiator", "Pip the Troll"],
    "correctAnswer": 2
}, {
    "question": "Who was the first Captain of the Starship Enterprise?",
    "choices": ["Khan Noonien Singh", "James T. Kirk", "S'chn T'gai Spock", "Johnathan Archer"],
    "correctAnswer": 3
}, {
    "question": "What super-hero team did Wolverine first belong to?",
    "choices": ["Alpha Flight", "X-Men", "Power Pack", "X-Factor"],
    "correctAnswer": 0
}, {
    "question": "What year does the Planet of the Apes take place?",
    "choices": ["3978", "1972", "2001", "5050"],
    "correctAnswer": 0
}, {
    "question": "What was the Flight number of Oceaniac Airlines from Lost",
    "choices": ["33", "815", "627", "370"],
    "correctAnswer": 3
}];


var questionOutput = ""; // creates a variable containing an empty string
var item = allQuestions[0]; // assigns the allQuestions array to the variable item, highlighting its first item 

questionOutput += "<h4>" + item.question + "</h4> <br/>"; // reaches into the array, grabbing the question property from the collection of objects it houses and encapsulates it in a <h4> tag
var update = document.getElementById("question"); // assigns the ID of question to the variable update

update.innerHTML = questionOutput; // this pushes all the content in the question div, via 'innerHTML'

function createRadioButtonFromArray(array) {
    var len = array.length; // when we pass the 'array', we apply the length property and assign that value to the var len 
    var responses = document.getElementById("responses"); // <- reach the responses div instead of the form
    responses.innerHTML = ''; // assigning the innerHTML to an empty string
    for (var i = 0; i < len; i++) {
        radio = document.createElement("input"); // assigns/creates the 'input' element to the variable radio
        radio.type = "radio"; // creates a radio button
        radio.name = "choices"; // attaches a name property/var to the radio element this case the choices in the array
        radio.className = "radioButtons"; // add radioButtons class to the radio button element 
        radio.value = i; // add the value "i" to the radio element; probably enabling "i" to be an iterator through the values
        radio.id = "choice" + i; // add the value "i" to the choice ID we create here
        var radioText = document.createElement("div"); // assigns/creates the 'div' element to the variable radioText
        radioText.id = "c" + i; // creates a 'ID' ('c' in this case) on the radioText div and attaching 'i' to act as an interator
        radioText.className = "choiceText"; //adding the "choiceText" class to the 
        radioText.innerHTML = array[i]; // this passes the array right into the div, via innerHTML


        responses.appendChild(radio); //adds the the radio element to the page via the 'div' with the ID name responses
        responses.appendChild(radioText); //adds the the radio element to the page via the 'div' with the ID name responses
    }
}

createRadioButtonFromArray(item.choices);

var navForward = document.querySelector('.navForward');
var currentQuestion = 0;
var currentAnswer = 0;
// var playersScore = 0;

function questionFwd() {
    var questionOutput = " ";
    var item = allQuestions;

    if (currentQuestion <= item.length) {
        currentQuestion++;
        if (currentQuestion >= 9) {
            navForward.parentNode.removeChild(navForward);
        }
    };
    questionOutput += "<h4>" + item[currentQuestion].question + "</h4> <br/>";
    var update = document.getElementById("question");

    update.innerHTML = questionOutput;
}

function answerFwd() {
    var answerOutput = " ";
    var itemAnswers = allQuestions;
    var playerTally = 0;
    var playerFeedback = " ";
    var playerMessage = document.getElementById("playerMessage");


    if (currentAnswer <= itemAnswers.length) {
        currentAnswer++;
    }

    createRadioButtonFromArray(itemAnswers[currentQuestion].choices); // <- Why don't you use the function you created earlier ????

    if (itemAnswers.correctAnswer === radio.id) {
        playerTally ++;
        playerFeedback += "<h5>" + playerTally + "</h5> <br/>";
        playerMessage.innerHTML = playerFeedback;
    }
 }


navForward.addEventListener('click', function() {
    questionFwd();
    answerFwd();

}, false);

function questionBkwd() {
    var questionOutput = " ";
    var item = allQuestions;

    if (currentQuestion > 0) {
        currentQuestion--;
        if (currentQuestion <= 9) {
            navBackward.parentNode.appendChild(navForward);
        }

    };
    questionOutput += "<h4>" + item[currentQuestion].question + "</h4> <br/>";
    update = document.getElementById("question");

    update.innerHTML = questionOutput;
}

function answerBkwd() {
    var answerOutput = " ";
    var itemAnswers = allQuestions;

    if (currentAnswer <= itemAnswers.length) {
        currentAnswer++;
    }

    createRadioButtonFromArray(itemAnswers[currentQuestion].choices); 
}

var navBackward = document.querySelector('.navBackward');

navBackward.addEventListener('click', function() {
    questionBkwd();
    answerBkwd();

}, false);






