// question and money amount variables
let movies100 = document.querySelector("#m100");
let movies200 = document.querySelector("#m200");
let movies300 = document.querySelector("#m300");
let movies400 = document.querySelector("#m400");
let movies500 = document.querySelector("#m500");
let knowledge100 = document.querySelector("#k100");
let knowledge200 = document.querySelector("#k200");
let knowledge300 = document.querySelector("#k300");
let knowledge400 = document.querySelector("#k400");
let knowledge500 = document.querySelector("#k500");
let geography100 = document.querySelector("#g100");
let geography200 = document.querySelector("#g200");
let geography300 = document.querySelector("#g300");
let geography400 = document.querySelector("#g400");
let geography500 = document.querySelector("#g500");
let riddles100 = document.querySelector("#r100");
let riddles200 = document.querySelector("#r200");
let riddles300 = document.querySelector("#r300");
let riddles400 = document.querySelector("#r400");
let riddles500 = document.querySelector("#r500");
let food100 = document.querySelector("#f100");
let food200 = document.querySelector("#f200");
let food300 = document.querySelector("#f300");
let food400 = document.querySelector("#f400");
let food500 = document.querySelector("#f500");

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
    selector.target.remove();

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

movies100.addEventListener("click", (e) => {
    jeopardy('MOVIES $100', 'What is the Telegu counterpart to Bollywood?', 'Tollywood', e);
})

movies200.addEventListener("click", (e) => {
    jeopardy('MOVIES $200', "Who is Abishek Bachchan's father?", 'Amitabh Bachchan', e);
})

movies300.addEventListener("click", (e) => {
    jeopardy('MOVIES $300', "What was the first feature-length animated movie ever released?", 'Snow White and the Seven Dwarfs', e);
})

movies400.addEventListener("click", (e) => {
    jeopardy('MOVIES $400', "What was the highest grossing Hollywood film of 2023?", 'Barbie', e);
})

movies500.addEventListener("click", (e) => {
    jeopardy('MOVIES $500', "Which Bollywood actor has won the most number of Filmfare Awards for Best Actor?", 'Shah Rukh Khan', e);
})

knowledge100.addEventListener("click", (e) => {
    jeopardy('General Knowledge $100', "What is the fastest land animal?", 'Cheetah', e);
})

knowledge200.addEventListener("click", (e) => {
    jeopardy('General Knowledge $200', "What is the largest planet in the Solar System?", 'Jupiter', e);
})

knowledge300.addEventListener("click", (e) => {
    jeopardy('General Knowledge $300', "In what year was the first Iphone released?", 2007, e);
})

knowledge400.addEventListener("click", (e) => {
    jeopardy('General Knowledge $400', "What was the most common color for an Iphone 14 Pro/Max.", 'Deep Purple', e);
})

knowledge500.addEventListener("click", (e) => {
    jeopardy('General Knowledge $500', "What does NASA stand for?", 'National Aeronautics and Space Administration', e);
})

geography100.addEventListener("click", (e) => {
    jeopardy('Geography $100', `What is the capital of Italy?
    
    Bonus: $100 for the country situated within this capital`, `Rome
    
    Vatican City`, e);
})

geography200.addEventListener("click", (e) => {
    jeopardy('Geography $200', "What is the second largest country by land area?", 'Canada', e);
})

geography300.addEventListener("click", (e) => {
    jeopardy('Geography $300', "What is the capital of the US state Alabama?", 'Montgomery', e);
})

geography400.addEventListener("click", (e) => {
    jeopardy('Geography $400', "What is the Southernmost country in the world?", 'Chile', e);
})

geography500.addEventListener("click", (e) => {
    jeopardy('Geography $500', `Name all the -stan countries
    
    All or Nothing`, "Kazakhstan, Uzbekistan, Kyrgyzstan, Tajikistan, Turkmenistan, Afghanistan, Pakistan", e);
})

riddles100.addEventListener("click", (e) => {
    jeopardy('Riddles $100', "What starts with a P, ends with an E, and has thousands of letters?", 'Post Office', e);
})

riddles200.addEventListener("click", (e) => {
    jeopardy('Riddles $200', "2 people were playing chess but they both win. How?", 'They were playing seperate games against different opponents.', e);
})

riddles300.addEventListener("click", (e) => {
    jeopardy('Riddles $300', "Name three consecutive days without naming any of the seven days of the week.", 'Yesterday, today and tomorrow.', e);
})

riddles400.addEventListener("click", (e) => {
    jeopardy('Riddles $400', "Wednesday, Bill and Jim went to a restaurant. They ordered and ate their food. Then they paid the bill, but neither Bill nor Jim paid. Who did?", 'Wednesday did', e);
})

riddles500.addEventListener("click", (e) => {
    jeopardy('Riddles $500', "One breaks but never falls. And the other falls but never breaks. What are they?", 'Day and Night', e);
})

food100.addEventListener("click", (e) => {
    jeopardy('Food $100', "What fast-food company's logo consists of 2 golden arcs?", 'McDonalds', e);
})

food200.addEventListener("click", (e) => {
    jeopardy('Food $100', "Which American city is most famous for their deep-dish pizza?", 'Chicago', e);
})

food300.addEventListener("click", (e) => {
    jeopardy('Food $300', "What scale is used to measure spiciness of peppers?", 'The Scoville Heat Scale', e);
})

food400.addEventListener("click", (e) => {
    jeopardy('Food $400', `Which 2 countries are the biggest exporters of coffee beans worldwide?
    
    All or Nothing`, 'Brazil and Vietnam', e);
})

food500.addEventListener("click", (e) => {
    jeopardy('Food $500', "Which chocolate bar is the most popular globally?", "Snickers' Bar", e);
})

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
        
        Question 2: Saturn`, e);
        movies.remove();
    })

    movies.addEventListener("click", (e) => {
        movies.style.margin = "auto";
        question.style.display = "block";
        jeopardy('Super Question', `Question 1: Which Pixar movie is the highest lifetime grossing film as of 2024?
        
        Question 2: In which year did Amitabh Bachchan start his acting career in Hindi cinema?`, 
        `Question 1: Inside Out 2
        
        Question 2: 1972`, e);
        knowledge.remove();
    })
})