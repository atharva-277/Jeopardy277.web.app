// question and money amount variables
let jeopardyData = [
  {
    id: "m100",
    title: "MOVIES $100",
    question: "Who created Mickey Mouse?",
    answer: "Walt Disney",
  },
  {
    id: "m200",
    title: "MOVIES $200",
    question: "What award is given for excellence in film?",
    answer: "Oscar",
  },
  {
    id: "m300",
    title: "MOVIES $300",
    question:
      "What awards are necessary to achieve 'EGOT' status?\n\nAll or Nothing",
    answer: "Emmy, Grammy, Oscar, Tony",
  },
  {
    id: "m400",
    title: "MOVIES $400",
    question: "What was the highest grossing Marvel film of 2025?",
    answer: "Fantastic Four: First Steps",
  },
  {
    id: "m500",
    title: "MOVIES $500",
    question:
      "Which actor won consecutive Oscars for Best Actor in 1994 and 1995?\n\nBonus: $100 for each movie they won it for.",
    answer: "Tom Hanks\n\nPhiladelphia(1994) and Forrest Gump(1995)",
  },
  {
    id: "k100",
    title: "GENERAL KNOWLEDGE $100",
    question:
      "What is the slowest moving land mammal?\n\nBonus: $100 for the specific species of animal.",
    answer: "(Three Toed) Sloth",
  },
  {
    id: "k200",
    title: "GENERAL KNOWLEDGE $200",
    question: "What does 'www' stand for in a URL?",
    answer: "World Wide Web",
  },
  {
    id: "k300",
    title: "GENERAL KNOWLEDGE $300",
    question:
      "What 2 planets in the solar system have abnormal rotations?\n\nAll or Nothing",
    answer: "Venus and Uranus",
  },
  {
    id: "k400",
    title: "GENERAL KNOWLEDGE $400",
    question: "What year was the United Nations founded in?",
    answer: "1945",
  },
  {
    id: "k500",
    title: "GENERAL KNOWLEDGE $500",
    question:
      "After Denver, what is the most populous US city in the Mountain Time Zone?",
    answer: "Alberquerque, New Mexico",
  },
  {
    id: "g100",
    title: "GEOGRAPHY $100",
    question: "Which country is home to Big Ben?",
    answer: "United Kingdom",
  },
  {
    id: "g200",
    title: "GEOGRAPHY $200",
    question: "What is the largest dry desert in the world?",
    answer: "Sahara",
  },
  {
    id: "g300",
    title: "GEOGRAPHY $300",
    question: "What is the capital of the country Colombia?",
    answer: "Bogota",
  },
  {
    id: "g400",
    title: "GEOGRAPHY $400",
    question: "What are the 2 double-landlocked countries?\n\nAll or Nothing",
    answer: "Uzbekistan and Liechtenstein",
  },
  {
    id: "g500",
    title: "GEOGRAPHY $500",
    question:
      "How many countries contain the word 'guinea' within their name?\n\nBonus: $100 for each correct 'guinea' country named",
    answer: "4\n\nPapua New Guinea, Equatorial Guinea, Guinea, Guinea-Bissau",
  },
  {
    id: "r100",
    title: "RIDDLES $100",
    question: "How many letters are in the alphabet?",
    answer: "11",
  },
  {
    id: "r200",
    title: "RIDDLES $200",
    question:
      "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?",
    answer: "Map",
  },
  {
    id: "r300",
    title: "RIDDLES $300",
    question:
      " It’s shorter than the rest, but when you’re satisfied, you bring it up. What is it?",
    answer: "A thumb",
  },
  {
    id: "r400",
    title: "RIDDLES $400",
    question: "What can go through glass without breaking it?",
    answer: "Light",
  },
  {
    id: "r500",
    title: "RIDDLES $500",
    question: "What has ten letters and starts with gas?",
    answer: "Automobile",
  },
  {
    id: "f100",
    title: "FOOD $100",
    question: "What fast-food company's mascots are cows?",
    answer: "Chick-Fil-A",
  },
  {
    id: "f200",
    title: "FOOD $200",
    question: "What is the most popular pizza topping in the United States?",
    answer: "Pepperoni",
  },
  {
    id: "f300",
    title: "FOOD $300",
    question: "What is the spiciest, natural pepper in the world?",
    answer: "Trinidad Morgua Scorpion Pepper",
  },
  {
    id: "f400",
    title: "FOOD $400",
    question: "What condiment was once sold as a medicine?",
    answer: "Ketchup",
  },
  {
    id: "f500",
    title: "FOOD $500",
    question:
      "Name the top 3 United States food consumption days.\n\n\nAll or Nothing",
    answer: "Thanksgiving, Christmas, Super Bowl Sunday",
  },
  {
    id: "superGeo",
    title: "SUPER QUESTION",
    question:
      "Question 1: What is the world's deepest lake?\n\nQuestion 2: What country has the most time zones?",
    answer: "Question 1: Lake Baikal\n\nQuestion 2: France",
  },
  {
    id: "superFood",
    title: "SUPER QUESTION",
    question:
      "Question 1: Which state has pumpkin pie listed as its official state pie?\n\nQuestion 2: What fast-food chain first introduced the drive-thru window?",
    answer: "Question 1: Illinois\n\nQuestion 2: Wendy's",
  },
];

const buttonsInit = new Set();

// other variables nessacary for functionality
let container1 = document.querySelector(".container");
let container2 = document.querySelector(".container2");
let question = document.querySelector("#questionBox");
let answer = document.querySelector("#answerBox");
let moneyType = document.querySelector("#moneyType");
let superQuestion = document.querySelector("#superQuestion");

// function for all questions
function jeopardy(item) {
  moneyType.textContent = item.title;
  container1.style.display = "none";
  container2.style.display = "block";
  question.style.display = "block";
  answer.style.display = "none";
  question.innerText = item.question;
  answer.innerText = item.answer;

  const reveal = document.createElement("button");
  reveal.innerHTML = `Reveal Answer`;
  reveal.classList.add("answer");
  container2.appendChild(reveal);

  reveal.addEventListener("click", function (e) {
    answer.style.display = "block";
    e.target.remove();
  });
  document.getElementById(item.id).remove();
}

answer.addEventListener("click", () => {
  container2.style.display = "none";
  container1.style.display = "flex";
  answer.style.display = "none";
});

function setupJeopardyBoard(supQ, supQ2) {
  for (let i = 0; i < jeopardyData.length; i++) {
    let item = jeopardyData[i];
    let button = document.getElementById(item.id);
    if (!buttonsInit.has(item.id)) {
      button.addEventListener("click", function () {
        if (supQ && supQ2) {
          supQ.remove();
          supQ2.remove();
          buttonsInit.delete(supQ.id);
          buttonsInit.delete(supQ2.id);
        }
        jeopardy(item);
      });

      buttonsInit.add(item.id);
    }
  }
}

// Function to create Super Questions links
function supQuestion(topic, emoji, idType) {
  topic.id = idType;
  topic.innerText = emoji;
  topic.classList.add("options");
  container2.appendChild(topic);
}

superQuestion.addEventListener("click", () => {
  moneyType.textContent = "SUPER QUESTION";
  container1.style.display = "none";
  container2.style.display = "block";
  question.style.display = "none";

  let geography = document.createElement("button");
  let food = document.createElement("button");
  supQuestion(geography, "🌍", "superGeo");
  supQuestion(food, "🍔", "superFood");

  setupJeopardyBoard(geography, food);
});

document.addEventListener("DOMContentLoaded", function () {
  setupJeopardyBoard(null, null);
});

// sljslfdsksdfksdsfdskfdsjkfjsdksdfkjdskj
