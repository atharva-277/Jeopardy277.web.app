//question/money amount variables
let movies100 = document.querySelector("#m100");
let movies200 = document.querySelector("#m200");
let movies300 = document.querySelector("#m300");
let movies400 = document.querySelector("#m400");
let movies500 = document.querySelector("#m500");
let gk100 = document.querySelector("#gk100");
let gk200 = document.querySelector("#gk200");
let gk300 = document.querySelector("#gk300");
let gk400 = document.querySelector("#gk400");
let gk500 = document.querySelector("#gk500");
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


//other variable nessacary for functionality
let container1 = document.querySelector(".container");
let container2 = document.querySelector(".container2");
let question = document.querySelector("#questionBox");
let answer = document.querySelector("#answerBox");
let moneyType = document.querySelector("#moneyType");
let superQuestion = document.querySelector("#superQuestion");


//all event listeneres for user interactivity
answer.addEventListener("click", function() {
    container2.style.display = "none";
    container1.style.display = "flex";
    answer.style.display = "none";
})

movies100.addEventListener("click", function(e) {
    moneyType.innerText = "BOLLYWOOD $100"
    container1.style.display = "none";
    container2.style.display = "block";
    question.innerText = "What is the American counterpart to Bollywood?";
    answer.innerText = "Hollywood";
    e.target.remove();

    let reveal = document.createElement('a');
    reveal.innerHTML = `<button>Reveal Answer</button>`
    reveal.classList.add("answer");
    container2.appendChild(reveal);

    reveal.addEventListener("click", function(e) {
        answer.style.display = "block"
        e.target.remove();
    })
})

movies200.addEventListener("click", function(e) {
    moneyType.innerText = "BOLLYWOOD $200"
    container1.style.display = "none";
    container2.style.display = "block";
    question.innerText = "What year does the Railway Men TV show take place in?";
    answer.innerText = 1984;
    e.target.remove();

    let reveal = document.createElement('a');
    reveal.innerHTML = `<button>Reveal Answer</button>`
    reveal.classList.add("answer");
    container2.appendChild(reveal);

    reveal.addEventListener("click", function(e) {
        answer.style.display = "block"
        e.target.remove();
    })
})

movies300.addEventListener("click", function(e) {
    moneyType.innerText = "BOLLYWOOD $300"
    container1.style.display = "none";
    container2.style.display = "block";
    question.innerText = "Which actor plays Khalid in the movie War?";
    answer.innerText = "Tiger Shroff";
    e.target.remove();

    let reveal = document.createElement('a');
    reveal.innerHTML = `<button>Reveal Answer</button>`
    reveal.classList.add("answer");
    container2.appendChild(reveal);

    reveal.addEventListener("click", function(e) {
        answer.style.display = "block"
        e.target.remove();
    })
})

movies400.addEventListener("click", function(e) {
    moneyType.innerText = "BOLLYWOOD $400"
    container1.style.display = "none";
    container2.style.display = "block";
    question.innerText = "What was the highest grossing Bollywood film of 2023?";
    answer.innerText = "Jawan";
    e.target.remove();

    let reveal = document.createElement('a');
    reveal.innerHTML = `<button>Reveal Answer</button>`
    reveal.classList.add("answer");
    container2.appendChild(reveal);

    reveal.addEventListener("click", function(e) {
        answer.style.display = "block"
        e.target.remove();
    })
})

movies500.addEventListener("click", function(e) {
    moneyType.innerText = "BOLLYWOOD $500"
    container1.style.display = "none";
    container2.style.display = "block";
    question.innerText = "In what year was Bollywood created?";
    answer.innerText = 1932;
    e.target.remove();

    let reveal = document.createElement('a');
    reveal.innerHTML = `<button>Reveal Answer</button>`
    reveal.classList.add("answer");
    container2.appendChild(reveal);

    reveal.addEventListener("click", function(e) {
        answer.style.display = "block"
        e.target.remove();
    })
})

gk100.addEventListener("click", function(e) {
    moneyType.innerText = "GENERAL KNOWLEDGE $100"
    container1.style.display = "none";
    container2.style.display = "block";
    question.innerText = "In what year did the Partition of India occur?";
    answer.innerText = "1947";
    e.target.remove();

    let reveal = document.createElement('a');
    reveal.innerHTML = `<button>Reveal Answer</button>`
    reveal.classList.add("answer");
    container2.appendChild(reveal);

    reveal.addEventListener("click", function(e) {
        answer.style.display = "block"
        e.target.remove();
    })
})

gk200.addEventListener("click", function(e) {
    moneyType.innerText = "GENERAL KNOWLEDGE $200"
    container1.style.display = "none";
    container2.style.display = "block";
    question.innerText = "What is it called when you knock down all 10 pins in bowling within 2 bowls?";
    answer.innerText = "Spare";
    e.target.remove();

    let reveal = document.createElement('a');
    reveal.innerHTML = `<button>Reveal Answer</button>`
    reveal.classList.add("answer");
    container2.appendChild(reveal);

    reveal.addEventListener("click", function(e) {
        answer.style.display = "block"
        e.target.remove();
    })
})

gk300.addEventListener("click", function(e) {
    moneyType.innerText = "GENERAL KNOWLEDGE $300"
    container1.style.display = "none";
    container2.style.display = "block";
    question.innerText = `How many ghosts chase Pac-Man when starting the game? 
    
    Bonus: $100 for each ghost color named.`
    answer.innerText = `4 
    
    Red, Cyan, Pink, Yellow`;
    e.target.remove();

    let reveal = document.createElement('a');
    reveal.innerHTML = `<button>Reveal Answer</button>`
    reveal.classList.add("answer");
    container2.appendChild(reveal);

    reveal.addEventListener("click", function(e) {
        answer.style.display = "block"
        e.target.remove();
    })
})

gk400.addEventListener("click", function(e) {
    moneyType.innerText = "GENERAL KNOWLEDGE $400"
    container1.style.display = "none";
    container2.style.display = "block";
    question.innerText = "Who was the 23rd president of the United States?";
    answer.innerText = "Benjamin Harrsion";
    e.target.remove();

    let reveal = document.createElement('a');
    reveal.innerHTML = `<button>Reveal Answer</button>`
    reveal.classList.add("answer");
    container2.appendChild(reveal);

    reveal.addEventListener("click", function(e) {
        answer.style.display = "block"
        e.target.remove();
    })
})

gk500.addEventListener("click", function(e) {
    moneyType.innerText = "GENERAL KNOWLEDGE $500"
    container1.style.display = "none";
    container2.style.display = "block";
    question.innerText = "How many letters are there in the Greek alphabet?";
    answer.innerText = 24;
    e.target.remove();

    let reveal = document.createElement('a');
    reveal.innerHTML = `<button>Reveal Answer</button>`
    reveal.classList.add("answer");
    container2.appendChild(reveal);

    reveal.addEventListener("click", function(e) {
        answer.style.display = "block"
        e.target.remove();
    })
})

geography100.addEventListener("click", function(e) {
    moneyType.innerText = "GEOGRAPHY $100"
    container1.style.display = "none";
    container2.style.display = "block";
    question.innerText = "What is the most populated nation on Earth?";
    answer.innerText = "India";
    e.target.remove();

    let reveal = document.createElement('a');
    reveal.innerHTML = `<button>Reveal Answer</button>`
    reveal.classList.add("answer");
    container2.appendChild(reveal);

    reveal.addEventListener("click", function(e) {
        answer.style.display = "block"
        e.target.remove();
    })
})

geography200.addEventListener("click", function(e) {
    moneyType.innerText = "GEOGRAPHY $200"
    container1.style.display = "none";
    container2.style.display = "block";
    question.innerText = "What is the capital of Germany?";
    answer.innerText = "Berlin";
    e.target.remove();

    let reveal = document.createElement('a');
    reveal.innerHTML = `<button>Reveal Answer</button>`
    reveal.classList.add("answer");
    container2.appendChild(reveal);

    reveal.addEventListener("click", function(e) {
        answer.style.display = "block"
        e.target.remove();
    })
})

geography300.addEventListener("click", function(e) {
    moneyType.innerText = "GEOGRAPHY $300"
    container1.style.display = "none";
    container2.style.display = "block";
    question.innerText = "Which US state is known as the land of 10 thousand lakes?";
    answer.innerText = "Minnesota";
    e.target.remove();

    let reveal = document.createElement('a');
    reveal.innerHTML = `<button>Reveal Answer</button>`
    reveal.classList.add("answer");
    container2.appendChild(reveal);

    reveal.addEventListener("click", function(e) {
        answer.style.display = "block"
        e.target.remove();
    })
})

geography400.addEventListener("click", function(e) {
    moneyType.innerText = "GEOGRAPHY $400"
    container1.style.display = "none";
    container2.style.display = "block";
    question.innerText = `Name all the Great Lakes

    All or Nothing`;
    answer.innerText = "Superior, Huron, Michigan, Erie, Ontario";
    e.target.remove();

    let reveal = document.createElement('a');
    reveal.innerHTML = `<button>Reveal Answer</button>`
    reveal.classList.add("answer");
    container2.appendChild(reveal);

    reveal.addEventListener("click", function(e) {
        answer.style.display = "block"
        e.target.remove();
    })
})

geography500.addEventListener("click", function(e) {
    moneyType.innerText = "GEOGRAPHY $500"
    container1.style.display = "none";
    container2.style.display = "block";
    question.innerText = "What is the Northernmost country in the world?";
    answer.innerText = "Denmark because it owns Greenland :)";
    e.target.remove();

    let reveal = document.createElement('a');
    reveal.innerHTML = `<button>Reveal Answer</button>`
    reveal.classList.add("answer");
    container2.appendChild(reveal);

    reveal.addEventListener("click", function(e) {
        answer.style.display = "block"
        e.target.remove();
    })
})

riddles100.addEventListener("click", function(e) {
    moneyType.innerText = "RIDDLES $100"
    container1.style.display = "none";
    container2.style.display = "block";
    question.innerText = "What starts with a t, ends with a t, and has t in it.";
    answer.innerText = "Teapot";
    e.target.remove();

    let reveal = document.createElement('a');
    reveal.innerHTML = `<button>Reveal Answer</button>`
    reveal.classList.add("answer");
    container2.appendChild(reveal);

    reveal.addEventListener("click", function(e) {
        answer.style.display = "block"
        e.target.remove();
    })
})

riddles200.addEventListener("click", function(e) {
    moneyType.innerText = "RIDDLES $200"
    container1.style.display = "none";
    container2.style.display = "block";
    question.innerText = "What is it that after you take the whole, some still remains?";
    answer.innerText = "Wholesome";
    e.target.remove();

    let reveal = document.createElement('a');
    reveal.innerHTML = `<button>Reveal Answer</button>`
    reveal.classList.add("answer");
    container2.appendChild(reveal);

    reveal.addEventListener("click", function(e) {
        answer.style.display = "block"
        e.target.remove();
    })
})

riddles300.addEventListener("click", function(e) {
    moneyType.innerText = "RIDDLES $300"
    container1.style.display = "none";
    container2.style.display = "block";
    question.innerText = "What has a heart but no other organs?";
    answer.innerText = "A deck of cards";
    e.target.remove();

    let reveal = document.createElement('a');
    reveal.innerHTML = `<button>Reveal Answer</button>`
    reveal.classList.add("answer");
    container2.appendChild(reveal);

    reveal.addEventListener("click", function(e) {
        answer.style.display = "block"
        e.target.remove();
    })
})

riddles400.addEventListener("click", function(e) {
    moneyType.innerText = "RIDDLES $400"
    container1.style.display = "none";
    container2.style.display = "block";
    question.innerText = "An English word has 6 letters. When you take one away, 12 remain. What is the word?";
    answer.innerText = "Dozens";
    e.target.remove();

    let reveal = document.createElement('a');
    reveal.innerHTML = `<button>Reveal Answer</button>`
    reveal.classList.add("answer");
    container2.appendChild(reveal);

    reveal.addEventListener("click", function(e) {
        answer.style.display = "block"
        e.target.remove();
    })
})

riddles500.addEventListener("click", function(e) {
    moneyType.innerText = "RIDDLES $500"
    container1.style.display = "none";
    container2.style.display = "block";
    question.innerText = "A group of 10 people are walking to a shop. Even though only 2 have umbrellas, all of them manage to get to the shop without getting wet. How?";
    answer.innerText = "It isn't raining outside.";
    e.target.remove();

    let reveal = document.createElement('a');
    reveal.innerHTML = `<button>Reveal Answer</button>`
    reveal.classList.add("answer");
    container2.appendChild(reveal);

    reveal.addEventListener("click", function(e) {
        answer.style.display = "block"
        e.target.remove();
    })
})

food100.addEventListener("click", function(e) {
    moneyType.innerText = "FOOD $100"
    container1.style.display = "none";
    container2.style.display = "block";
    question.innerText = `Which country was pizza made in?
    
    Bonus: Name the city it was made in for an extra $100.`;
    answer.innerText = `Italy
    
    Naples`;
    e.target.remove();

    let reveal = document.createElement('a');
    reveal.innerHTML = `<button>Reveal Answer</button>`
    reveal.classList.add("answer");
    container2.appendChild(reveal);

    reveal.addEventListener("click", function(e) {
        answer.style.display = "block"
        e.target.remove();
    })
})

food200.addEventListener("click", function(e) {
    moneyType.innerText = "FOOD $200"
    container1.style.display = "none";
    container2.style.display = "block";
    question.innerText = "What food never spoils?";
    answer.innerText = "Honey";
    e.target.remove();

    let reveal = document.createElement('a');
    reveal.innerHTML = `<button>Reveal Answer</button>`
    reveal.classList.add("answer");
    container2.appendChild(reveal);

    reveal.addEventListener("click", function(e) {
        answer.style.display = "block"
        e.target.remove();
    })
})

food300.addEventListener("click", function(e) {
    moneyType.innerText = "FOOD $300"
    container1.style.display = "none";
    container2.style.display = "block";
    question.innerText = "Which type of pasta is made from potatoes?";
    answer.innerText = "Gnocchi";
    e.target.remove();

    let reveal = document.createElement('a');
    reveal.innerHTML = `<button>Reveal Answer</button>`
    reveal.classList.add("answer");
    container2.appendChild(reveal);

    reveal.addEventListener("click", function(e) {
        answer.style.display = "block"
        e.target.remove();
    })
})

food400.addEventListener("click", function(e) {
    moneyType.innerText = "FOOD $400"
    container1.style.display = "none";
    container2.style.display = "block";
    question.innerText = `Which 2 spices are the most popular in the world
    
    All or Nothing`;
    answer.innerText = "Pepper and Mustard";
    e.target.remove();

    let reveal = document.createElement('a');
    reveal.innerHTML = `<button>Reveal Answer</button>`
    reveal.classList.add("answer");
    container2.appendChild(reveal);

    reveal.addEventListener("click", function(e) {
        answer.style.display = "block"
        e.target.remove();
    })
})

food500.addEventListener("click", function(e) {
    moneyType.innerText = "FOOD $500"
    container1.style.display = "none";
    container2.style.display = "block";
    question.innerText = "In what country was chicken tikka masala invented?";
    answer.innerText = "United Kingdom";
    e.target.remove();

    let reveal = document.createElement('a');
    reveal.innerHTML = `<button>Reveal Answer</button>`
    reveal.classList.add("answer");
    container2.appendChild(reveal);

    reveal.addEventListener("click", function(e) {
        answer.style.display = "block"
        e.target.remove();
    })
})

superQuestion.addEventListener("click", function(e) {
    moneyType.innerText = "SUPER QUESTION"
    container1.style.display = "none";
    container2.style.display = "block";
    question.style.display = "none";

    let geography = document.createElement('a');
    geography.innerHTML = `<button>Geography</button>`
    geography.style.marginLeft = "500px"
    container2.appendChild(geography);

    let food = document.createElement('a');
    food.innerHTML = `<button>Food</button>`
    food.style.marginLeft = "100px"
    container2.appendChild(food);

    
    geography.addEventListener("click", function(e) {
        geography.style.margin = "auto";
        question.style.display = "block";
        question.innerText = `Question 1: The world capital cities of Vienna, Bratislava, and Budapest all lie along what river in Europe?

        Question 2: A lion holding a sword appears on the logo of Ceylon Tea as well as the flag of what country in the Indian Ocean?`;
        answer.innerText = `Question 1: Danube
        Question 2: Sri Lanka`;
        e.target.remove();
        food.remove();

        let reveal = document.createElement('a');
        reveal.innerHTML = `<button>Reveal Answer</button>`
        reveal.classList.add("answer");
        container2.appendChild(reveal);

        reveal.addEventListener("click", function(e) {
            answer.style.display = "block"
            e.target.remove();
        })
    })

    food.addEventListener("click", function(e) {
        food.style.margin = "auto";
        question.style.display = "block";
        question.innerText = `Question 1: What brand of chips has inspired an internet community to search for an individual chip that looks most like the Pope's hat?

        Question 2: What candy, which is produced in Austria and Connecticut, has a name that is an abbreviation for the German word for peppermint?`;
        answer.innerText = `Question 1: Doritos
        Question 2: PEZ`;
        e.target.remove();
        geography.remove();

        let reveal = document.createElement('a');
        reveal.innerHTML = `<button>Reveal Answer</button>`
        reveal.classList.add("answer");
        container2.appendChild(reveal);

        reveal.addEventListener("click", function(e) {
            answer.style.display = "block"
            e.target.remove();
        })
    })
    
})