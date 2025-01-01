// question and money amount variables
let allQuestions = [
    'm100', 'm200', 'm300', 'm400', 'm500', 'k100', 'k200', 'k300', 'k400', 'k500', 'g100', 'g200', 'g300', 'g400', 'g500', 'r100', 'r200', 'r300', 'r400', 'r500', 'f100', 'f200', 'f300', 'f400', 'f500', 'y', 'random2'
]

// other variables nessacary for functionality
let container1 = document.querySelector(".container");
let container2 = document.querySelector(".container2");
let question = document.querySelector("#questionBox");
let answer = document.querySelector("#answerBox");
let moneyType = document.querySelector("#moneyType");
let superQuestion = document.querySelector("#superQuestion");

// function for all questions
function jeopardy (title, questions, answers, index) {
    moneyType.textContent = title;
    container1.style.display = "none";
    container2.style.display = "block";
    question.innerText = questions;
    answer.innerText = answers;

    const reveal = document.createElement('button');
    reveal.innerHTML = `Reveal Answer`;
    reveal.classList.add("answer");
    container2.appendChild(reveal);

    reveal.addEventListener("click", function(e) {
        answer.style.display = "block";
        e.target.remove();
    })

    if (index === 25) {
        return ''
    } else {
        document.getElementById(allQuestions[index]).remove();
    }
}

// all event listeneres for user interactivity
answer.addEventListener("click", () => {
    container2.style.display = "none";
    container1.style.display = "flex";
    answer.style.display = "none";
})

function m100() {
    jeopardy('MOVIES $100', 'Which company is known for Mickey Mouse?', 'Disney', 0);
}

function m200() {
    jeopardy('MOVIES $200', "Who is Sanjay Dutt's father?", 'Sunil Dutt', 1);
}

function m300() {
    jeopardy('MOVIES $300', "What was the first major movie to feature Carol of the Bells?", 'Home Alone', 2);
}

function m400() {
    jeopardy('MOVIES $400', "What was the highest grossing Marvel film of 2024?", 'Deadpool and Wolverine', 3);
}

function m500() {
    jeopardy('MOVIES $500', "What initial career did Amitabh Bachchan take up in 1969?", 'Voice Acting/Narrating', 4);
}

function k100() {
    jeopardy('General Knowledge $100', "What is the largest animal?", 'Blue Whale', 5);
}

function k200() {
    jeopardy('General Knowledge $200', "What does 'www' stand for in a url?", 'World Wide Web', 6);
}

function k300() {
    jeopardy('General Knowledge $300', `What 2 planets in the solar system have abnormal rotations?
        
        All or Nothing`, 'Venus and Uranus', 7);
}

function k400() {
    jeopardy('General Knowledge $400', `What year was the United Nations founded in?`, '1945', 8);
}

function k500() {
    jeopardy('General Knowledge $500', "After Chicago, what is the most populous U.S. city in the Central Time Zone?", 'Houston', 9);
}

function g100() {
    jeopardy('Geography $100', `Which country is home to the Eiffel Tower?`, `France`, 10);
}

function g200() {
    jeopardy('Geography $200', "What is the biggest desert in the world?", 'Antarctica Desert', 11);
}

function g300() {
    jeopardy('Geography $300', "What is the capital of the country Colombia?", 'Bogota', 12);
}

function g400() {
    jeopardy('Geography $400', `What are the 2 double-landlocked countries?
        
        All or Nothing`, 'Uzbekistan and Liechtenstein', 13);
}

function g500() {
    jeopardy('Geography $500', `How many countries contain the word 'guinea' within their name?
        
        Bonus: $100 for each correct 'guinea' country named`, `4
        
        Papua New Guinea, Guinea, Guinea-Bissau, Equatorial Guinea`, 14);
}

function r100() {
    jeopardy('Riddles $100', "How many letters are in the alphabet?", '11', 15);
}

function r200() {
    jeopardy('Riddles $200', "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?", 'Map', 16);
}

function r300() {
    jeopardy('Riddles $300', "A woman shoots her husband, then holds him underwater for five minutes. Next, she hangs him. Right after, they enjoy a lovely dinner. How?", 'She took a picture of him and developed it.', 17);
}

function r400() {
    jeopardy('Riddles $400', "First you eat me, then you get eaten. What am I?", 'Fishook', 18);
}

function r500() {
    jeopardy('Riddles $500', "Every night I'm told what to do, and each morning I do what I'm told. But I still don't escape your scold. What am I?", 'Alarm Clock', 19);
}

function f100() {
    jeopardy('Food $100', "What fast-food company's mascots are cows?", 'Chick-Fil-A', 20);
}

function f200() {
    jeopardy('Food $100', "What is the most popular pizza topping in the United States?", 'Pepperoni', 21);
}

function f300() {
    jeopardy('Food $300', "What is the spiciest, natural pepper in the world?", 'Trinidad Morgua Scorpion Pepper', 22);
}

function f400() {
    jeopardy('Food $400', `Name the top 3 United States food consumption days.
        
        All or Nothing`, 'Christmas, Thanksgiving, Super Bowl Sunday', 23);
}

function f500() {
    jeopardy('Food $500', "Which country consumes the most turkey per person?", "Israel", 24);
}

// Function to create Super Questions links
function supQuestion (topic, emoji) {
    topic.innerHTML = emoji;
    topic.classList.add('options');
    container2.appendChild(topic);
}

superQuestion.addEventListener("click", () => {
    moneyType.textContent = "SUPER QUESTION";
    container1.style.display = "none";
    container2.style.display = "block";
    question.style.display = "none";

    let geography = document.createElement('button');
    let food = document.createElement('button');
    supQuestion(geography, `🌏`);
    supQuestion(food, `🍔`);

    geography.addEventListener("click", () => {
        geography.style.margin = "auto";
        question.style.display = "block";
        jeopardy('Super Question', `Question 1: What is the world's deepest lake?
        
        Question 2: What country has the most time zones?`, 
        `Question 1: Lake Baikal
        
        Question 2: France`, 25);
        geography.remove()
        food.remove();
    })

    food.addEventListener("click", () => {
        food.style.margin = "auto";
        question.style.display = "block";
        jeopardy('Super Question', `Question 1: Which state has pumpkin pie listed as its official state pie?
        
        Question 2: What fast-food chain first introduced the drive-thru window?`, 
        `Question 1: Illinois
        
        Question 2: Wendy's`, 25);
        food.remove()
        geography.remove();
    })
})