// question and money amount variables
let allQuestions = [
    'm100', 'm200', 'm300', 'm400', 'm500', 'k100', 'k200', 'k300', 'k400', 'k500', 'g100', 'g200', 'g300', 'g400', 'g500', 'r100', 'r200', 'r300', 'r400', 'r500', 'f100', 'f200', 'f300', 'f400', 'f500'
]

// other variables nessacary for functionality
let container1 = document.querySelector(".container");
let container2 = document.querySelector(".container2");
let question = document.querySelector("#questionBox");
let answer = document.querySelector("#answerBox");
let moneyType = document.querySelector("#moneyType");
let superQuestion = document.querySelector("#superQuestion");

// function for all questions
function jeopardy (title, questions, answers, selector) {
    moneyType.textContent = title;
    container1.style.display = "none";
    container2.style.display = "block";
    question.innerText = questions;
    answer.innerText = answers;
    selector.remove();

    const reveal = document.createElement('button');
    reveal.innerHTML = `Reveal Answer`;
    reveal.classList.add("answer");
    container2.appendChild(reveal);

    reveal.addEventListener("click", function(e) {
        answer.style.display = "block";
        e.target.remove();
    })
}

// all event listeneres for user interactivity
answer.addEventListener("click", () => {
    container2.style.display = "none";
    container1.style.display = "flex";
    answer.style.display = "none";
})

function m100() {
    jeopardy('MOVIES $100', 'What is the Telegu counterpart to Bollywood?', 'Tollywood', document.getElementById(allQuestions[0]));
}

function m200() {
    jeopardy('MOVIES $200', "Who is Abishek Bachchan's father?", 'Amitabh Bachchan', document.getElementById(allQuestions[1]));
}

function m300() {
    jeopardy('MOVIES $300', "What was the first feature-length animated movie ever released?", 'Snow White and the Seven Dwarfs', document.getElementById(allQuestions[2]));
}

function m400() {
    jeopardy('MOVIES $400', "What was the highest grossing Hollywood film of 2023?", 'Barbie', document.getElementById(allQuestions[3]));
}

function m500() {
    jeopardy('MOVIES $500', "Which Bollywood actor has won the most number of Filmfare Awards for Best Actor?", 'Shah Rukh Khan', document.getElementById(allQuestions[4]));
}

function k100() {
    jeopardy('General Knowledge $100', "What is the fastest land animal?", 'Cheetah', document.getElementById(allQuestions[5]));
}

function k200() {
    jeopardy('General Knowledge $200', "What is the largest planet in the Solar System?", 'Jupiter', document.getElementById(allQuestions[6]));
}

function k300() {
    jeopardy('General Knowledge $300', "In what year was the first Iphone released?", 2007, document.getElementById(allQuestions[7]));
}

function k400() {
    jeopardy('General Knowledge $400', "What was the most common color for an Iphone 14 Pro/Max?", 'Deep Purple', document.getElementById(allQuestions[8]));
}

function k500() {
    jeopardy('General Knowledge $500', "What does NASA stand for?", 'National Aeronautics and Space Administration', document.getElementById(allQuestions[9]));
}

function g100() {
    jeopardy('Geography $100', `What is the capital of Italy?

    Bonus: $100 for the country situated within this capital`, `Rome

    Vatican City`, document.getElementById(allQuestions[10]));
}

function g200() {
    jeopardy('Geography $200', "What is the second largest country by land area?", 'Canada', document.getElementById(allQuestions[11]));
}

function g300() {
    jeopardy('Geography $300', "What is the capital of the US state Alabama?", 'Montgomery', document.getElementById(allQuestions[12]));
}

function g400() {
    jeopardy('Geography $400', "What is the Southernmost country in the world?", 'Chile', document.getElementById(allQuestions[13]));
}

function g500() {
    jeopardy('Geography $500', `Name all the -stan countries
    
    All or Nothing`, "Kazakhstan, Uzbekistan, Kyrgyzstan, Tajikistan, Turkmenistan, Afghanistan, Pakistan", document.getElementById(allQuestions[14]));
}

function r100() {
    jeopardy('Riddles $100', "What starts with a P, ends with an E, and has thousands of letters?", 'Post Office', document.getElementById(allQuestions[15]));
}

function r200() {
    jeopardy('Riddles $200', "2 people were playing chess but they both win. How?", 'They were playing seperate games against different opponents.', document.getElementById(allQuestions[16]));
}

function r300() {
    jeopardy('Riddles $300', "Name three consecutive days without naming any of the seven days of the week.", 'Yesterday, today and tomorrow.', document.getElementById(allQuestions[17]));
}

function r400() {
    jeopardy('Riddles $400', "Wednesday, Bill and Jim went to a restaurant. They ordered and ate their food. Then they paid the bill, but neither Bill nor Jim paid. Who did?", 'Wednesday did', document.getElementById(allQuestions[18]));
}

function r500() {
    jeopardy('Riddles $500', "One breaks but never falls. And the other falls but never breaks. What are they?", 'Day and Night', document.getElementById(allQuestions[19]));
}

function f100() {
    jeopardy('Food $100', "What fast-food company's logo consists of 2 golden arcs?", 'McDonalds', document.getElementById(allQuestions[20]));
}

function f200() {
    jeopardy('Food $100', "Which American city is most famous for their deep-dish pizza?", 'Chicago', document.getElementById(allQuestions[21]));
}

function f300() {
    jeopardy('Food $300', "What scale is used to measure spiciness of peppers?", 'The Scoville Heat Scale', document.getElementById(allQuestions[22]));
}

function f400() {
    jeopardy('Food $400', `Which 2 countries are the biggest exporters of coffee beans worldwide?
    
    All or Nothing`, 'Brazil and Vietnam', document.getElementById(allQuestions[23]));
}

function f500() {
    jeopardy('Food $500', "Which chocolate bar is the most popular globally?", "Snickers' Bar", document.getElementById(allQuestions[24]));
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

    let knowledge = document.createElement('button');
    let movies = document.createElement('button');
    supQuestion(knowledge, `🧠`);
    supQuestion(movies, `🎞️`);

    knowledge.addEventListener("click", (e) => {
        knowledge.style.margin = "auto";
        question.style.display = "block";
        jeopardy('Super Question', `Question 1: Which president is featured on the $2 bill?
        
        Question 2: Which planet in our solar system has the most moons?`, 
        `Question 1: Thomas Jefferson
        
        Question 2: Saturn`, knowledge);
        movies.remove();
    })

    movies.addEventListener("click", (e) => {
        movies.style.margin = "auto";
        question.style.display = "block";
        jeopardy('Super Question', `Question 1: Which Pixar movie is the highest lifetime grossing film as of 2024?
        
        Question 2: In which year did Amitabh Bachchan start his acting career in Hindi cinema?`, 
        `Question 1: Inside Out 2
        
        Question 2: 1972`, movies);
        knowledge.remove();
    })
})