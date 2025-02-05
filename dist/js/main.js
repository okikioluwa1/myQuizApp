const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Trainer Marking Language",
      "Hyper Text Markup Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "Which attribute specifies an image source in HTML?",
    options: ["alt", "src", "href", "link"],
    answer: "src",
  },
  {
    question: "What is the correct file extension for an HTML file?",
    options: [".html", ".htm", ".web", ".css"],
    answer: ".html",
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: ["style", "class", "css", "font"],
    answer: "style",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Coding Style Syntax",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "Which CSS property is used to change text color?",
    options: ["background-color", "color", "text-color", "font-color"],
    answer: "color",
  },
  {
    question: "Which property is used to change the background color?",
    options: ["bgcolor", "color", "background-color", "bg-color"],
    answer: "background-color",
  },
  {
    question: "Which property controls text size?",
    options: ["font-style", "text-size", "font-size", "size"],
    answer: "font-size",
  },
  {
    question: "Which CSS selector targets all elements?",
    options: ["*", "#", ".", "!"],
    answer: "*",
  },
  {
    question: "Which property makes text bold?",
    options: ["text-bold", "bold", "font-weight", "bolder"],
    answer: "font-weight",
  },
  {
    question: "Which property changes the font?",
    options: ["text-font", "font-weight", "font-family", "font-style"],
    answer: "font-family",
  },
  {
    question: "How do you center an element in CSS?",
    options: [
      "margin: auto;",
      "align: center;",
      "text-align: center;",
      "center: auto;",
    ],
    answer: "margin: auto;",
  },
  {
    question: "Which unit represents relative font size?",
    options: ["px", "em", "%", "cm"],
    answer: "em",
  },
  {
    question: "Which property adds space inside an element?",
    options: ["margin", "padding", "spacing", "border"],
    answer: "padding",
  },
  {
    question: "Which property controls the visibility of an element?",
    options: ["hidden", "display", "visibility", "opacity"],
    answer: "visibility",
  },
  {
    question: "Which CSS property creates a shadow effect on text?",
    options: ["text-shadow", "shadow", "box-shadow", "font-shadow"],
    answer: "text-shadow",
  },
  {
    question: "Which property controls the space outside an element?",
    options: ["padding", "margin", "border", "spacing"],
    answer: "margin",
  },
  {
    question: "What is used to apply styles to one specific element?",
    options: ["Class", "ID", "Tag", "Element"],
    answer: "ID",
  },
  {
    question: "Which keyword is used to declare a variable?",
    options: ["let", "var", "const", "All of the above"],
    answer: "All of the above",
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "/* */", "#", "--"],
    answer: "//",
  },
  {
    question: "Which function displays a message in an alert box?",
    options: ["alert()", "msg()", "prompt()", "display()"],
    answer: "alert()",
  },
  {
    question: "How do you get the length of a string?",
    options: ["size", "length", "count", "textLength"],
    answer: "length",
  },
  {
    question: "Which method is used to print to the console?",
    options: ["log()", "print()", "console.log()", "write()"],
    answer: "console.log()",
  },
  {
    question: "Which operator is used for strict equality?",
    options: ["=", "==", "===", "!="],
    answer: "===",
  },
  {
    question: "Which function is used to convert a string to an integer?",
    options: ["parseInt()", "int()", "toInt()", "Number()"],
    answer: "parseInt()",
  },
  {
    question: "Which keyword is used for loops?",
    options: ["loop", "repeat", "for", "while"],
    answer: "for",
  },
  {
    question: "Which function is used to execute code after a delay?",
    options: ["setTimeout()", "wait()", "delay()", "setInterval()"],
    answer: "setTimeout()",
  },
  {
    question: "Which function is used to execute code repeatedly?",
    options: ["setInterval()", "repeat()", "loop()", "setTimeout()"],
    answer: "setInterval()",
  },
  {
    question: "Which object represents the browser window?",
    options: ["browser", "window", "document", "screen"],
    answer: "window",
  },
  {
    question: "Which keyword is used to define a function?",
    options: ["def", "function", "fn", "func"],
    answer: "function",
  },
  {
    question: "Which method adds an element to an array?",
    options: ["push()", "add()", "insert()", "append()"],
    answer: "push()",
  },
  {
    question: "Which method removes the last element from an array?",
    options: ["pop()", "remove()", "delete()", "shift()"],
    answer: "pop()",
  },

  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Machine Language",
      "Home Tool Markup Language",
      "HyperText Markup Language",
      "Hyperlink Text Markup Language",
    ],
    answer: "HyperText Markup Language",
  },

  {
    question: "What property is used to change the background color in CSS?",
    options: ["bg-color", "color-background", "background-color", "color-bg"],
    answer: "background-color",
  },
  {
    question: "How do you center an element in CSS?",
    options: [
      "text-align: center",
      "display: center",
      "margin: 0 auto",
      "align: center",
    ],
    answer: "margin: 0 auto",
  },
  {
    question: "What is the default value of the 'position' property in CSS?",
    options: ["absolute", "relative", "static", "fixed"],
    answer: "static",
  },
  {
    question: "Which HTML attribute is used to specify an image's alt text?",
    options: ["title", "alt", "src", "longdesc"],
    answer: "alt",
  },
  {
    question: "What does the 'class' attribute do in HTML?",
    options: [
      "Links an element to a file",
      "Defines a class for styling",
      "Sets the element’s ID",
      "Links to an external page",
    ],
    answer: "Defines a class for styling",
  },
  {
    question: "In JavaScript, what does 'NaN' stand for?",
    options: ["Not a Node", "Not a Name", "Not a Number", "No Action Needed"],
    answer: "Not a Number",
  },
  {
    question: "How do you declare a variable in JavaScript?",
    options: ["variable", "var", "let", "constant"],
    answer: "let",
  },
  {
    question: "What does the 'console.log()' method do in JavaScript?",
    options: [
      "Prints output to the console",
      "Logs data to a file",
      "Executes code",
      "Displays alerts",
    ],
    answer: "Prints output to the console",
  },

  {
    question: "Which CSS property is used to change the font of text?",
    options: ["font-style", "font-family", "text-family", "font-size"],
    answer: "font-family",
  },
  {
    question: "How do you call a function in JavaScript?",
    options: [
      "By calling function()",
      "By using its name followed by parentheses",
      "By using 'invoke()'",
      "By calling the function with {}",
    ],
    answer: "By using its name followed by parentheses",
  },
  {
    question: "What is the 'src' attribute used for in an <img> tag?",
    options: [
      "To specify the image file",
      "To define image size",
      "To set image border",
      "To define image style",
    ],
    answer: "To specify the image file",
  },
  {
    question: "What does 'display: none' do in CSS?",
    options: [
      "Shows an element",
      "Hides an element",
      "Changes the element color",
      "Changes the element layout",
    ],
    answer: "Hides an element",
  },
  {
    question: "In JavaScript, what is a 'function'?",
    options: [
      "A data type",
      "A loop",
      "A block of code that performs a task",
      "A conditional statement",
    ],
    answer: "A block of code that performs a task",
  },
  {
    question: "What is the correct HTML element for inserting an image?",
    options: ["image", "pic", "img", "source"],
    answer: "img",
  },
  {
    question: "Which CSS property is used to change text color?",
    options: ["text-color", "font-color", "color", "background-color"],
    answer: "color",
  },
  {
    question: "What is the purpose of the 'id' attribute in HTML?",
    options: [
      "To classify elements",
      "To uniquely identify an element",
      "To link to external files",
      "To group similar elements",
    ],
    answer: "To uniquely identify an element",
  },
  {
    question: "How do you define a constant variable in JavaScript?",
    options: ["const", "let", "var", "static"],
    answer: "const",
  },
];

//add timeBar animation
const timeBar = document.querySelector(".timebar-progress");
timeBar.classList.add("animate");

let currentDataIndex = 0;
let currentData;
let currentScore = 0;
let active = true;
let htmlMarkup;
const container = document.querySelector(".main__info-markup");

//dynamic representation of the markup
const generateMarkup = function (currentDataIndex) {
  return ` <h3 class="main__info-question">${currentDataIndex + 1}. ${
    quizData[currentDataIndex].question
  }</h3>
<div class="main__info-options">
  <p class="info-option option-1">${quizData[currentDataIndex].options[0]}</p>
  <p class="info-option option-2">${quizData[currentDataIndex].options[1]}</p>
  <p class="info-option option-3">${quizData[currentDataIndex].options[2]}</p>
  <p class="info-option option-4">${quizData[currentDataIndex].options[3]}</p>
</div>`;
};

htmlMarkup = generateMarkup(currentDataIndex);

container.insertAdjacentHTML("afterbegin", htmlMarkup);

//Finding from the array of "options", the element of the correct answer
currentData = quizData[currentDataIndex];

const optionsArray = Array.from(document.querySelectorAll(".info-option"));
const answerElement = optionsArray.find((p) => {
  if (p.textContent === currentData.answer) return p;
});

//implementing click on different options
const showAnswer = function (ansEle) {
  container.addEventListener("click", function (e) {
    if (active) {
      if (e.target === ansEle) {
        ansEle.style.backgroundColor = "";
        ansEle.classList.add("correctAnswer");
        currentScore++;
        active = false;
      } else {
        e.target.style.backgroundColor = "";
        e.target.classList.add("wrongAnswer");
        ansEle.style.backgroundColor = "";
        ansEle.classList.add("correctAnswer");
        active = false;
      }
    }
  });
};
showAnswer(answerElement);

//implementing timer of 15s for each question
const timerEl = document.querySelector(".time");
let time;
let intervalID;
const startTimer = function () {
  time = 15;
  timerEl.textContent = String(time).padStart(2, 0);

  intervalID = setInterval(() => {
    time--;
    timerEl.textContent = String(time).padStart(2, 0);
    if (time < 1) {
      clearInterval(intervalID);
      active = false;
    }
  }, 1000);
};
startTimer();

//Implementing the DOM changes for the pagination section
const currentPage = document.querySelector(".current-page");
const totalPage = document.querySelector(".total-page");
currentPage.textContent = currentDataIndex + 1;
totalPage.textContent = quizData.length;

//
//
//
//
//
//
//
//
//
//
//
//
//
//

let newAnsElement;

const nextBtn = document.querySelector(".next-btn");

nextBtn.addEventListener("click", function () {
  //clear markup container
  container.innerHTML = "";

  //quizDataIndex increases by 1
  currentDataIndex++;
  currentPage.textContent = currentDataIndex + 1;

  //reset timebar progress back to start;
  timeBar.style.animation = "none";
  void timeBar.offsetWidth;
  timeBar.style.animation = "";

  //state is active again
  active = true;

  //new markup generated from new currentDataIndex
  htmlMarkup = generateMarkup(currentDataIndex);

  //new markup inserted in main markup container;
  container.insertAdjacentHTML("afterbegin", htmlMarkup);

  // reset time back to 15s
  if (intervalID) clearInterval(intervalID);
  startTimer();

  currentData = quizData[currentDataIndex];

  //find from the "options" array the new answer Element
  const optionsArray = Array.from(document.querySelectorAll(".info-option"));
  newAnsElement = optionsArray.find((p) => {
    if (p.textContent === currentData.answer) return p;
  });
});

//using a promise to wait for the click on "nextBtn" before implementing click on the options
const waitForClick = function (element, event) {
  return new Promise((resolve) => {
    element.addEventListener(event, resolve, { once: true });
  });
};

//function to run after clicking "nextBtn" is handled;
async function runAfterClick() {
  console.log("waiting for container click...");
  await waitForClick(nextBtn, "click");
  console.log(newAnsElement.textContent);
  console.log(active);

  // showAnswer(newAnsElement);
  container.addEventListener("click", function (e) {
    console.log(e.target === newAnsElement);
    if (!active) return;
    else if (active) {
      if (e.target === newAnsElement) {
        newAnsElement.style.backgroundColor = "";
        newAnsElement.classList.add("correctAnswer");
        currentScore++;
        active = false;
        console.log("men");
      } else {
        e.target.style.backgroundColor = "";
        e.target.classList.add("wrongAnswer");
        newAnsElement.style.backgroundColor = "";
        newAnsElement.classList.add("correctAnswer");
        active = false;
        console.log("women");
      }
    }
  });
}

runAfterClick();
