var beginBtn = document.getElementById("beginBtn");
var heroElement = document.getElementById("hero");
var timerElement = document.getElementById("timer");
timerElement.textContent = 60;

function beginBtnHandler() {
    // document.getElementById("header").style.display = "none";
    document.getElementById("welcome").style.display = "none";
    document.getElementById("beginBtn").style.display = "none";

    var timer = setInterval(function () {
        timerElement.textContent = timerElement.textContent - 1;
        if (timerElement.textContent <= 0) {
            clearInterval(timer);
        }
    }, 1000);

    var questionCard = document.createElement("div");
    var questionTitle = document.createElement("h2")
    var questionOption1 = document.createElement("button");
    questionOption1.className = "questionOptions";
    var questionOption2 = document.createElement("button");
    questionOption2.className = "questionOptions";
    var questionOption3 = document.createElement("button");
    questionOption3.className = "questionOptions"; questionOption1.className = "questionOptions";
    var questionOption4 = document.createElement("button");
    questionOption4.className = "questionOptions";


    questionTitle.textContent = "1+1?";
    questionCard.appendChild(questionTitle);

    questionOption1.textContent = "1";
    questionCard.appendChild(questionOption1);

    questionOption2.textContent = "2";
    questionCard.appendChild(questionOption2);

    questionOption3.textContent = "3";
    questionCard.appendChild(questionOption3);

    questionOption4.textContent = "4";
    questionCard.appendChild(questionOption4);

    var answer = document.createElement("p");
    questionCard.appendChild(answer);


    hero.appendChild(questionCard);

    questionOption1.addEventListener("click", function () {
        answer.textContent = "Wrong!";
        timerElement.textContent = timerElement.textContent - 10;
        question2();
    })

    questionOption2.addEventListener("click", function () {
        answer.textContent = "Correct!";

        question2();
    })

    questionOption3.addEventListener("click", function () {
        answer.textContent = "Wrong!";
        timerElement.textContent = timerElement.textContent - 10;
        question2();
    })

    questionOption4.addEventListener("click", function () {
        answer.textContent = "Wrong!";
        timerElement.textContent = timerElement.textContent - 10;
        question2();
    })

    function question2() {
        questionTitle.textContent = "2+2";


        questionOption1.textContent = "1";


        questionOption2.textContent = "2";


        questionOption3.textContent = "3";


        questionOption4.textContent = "4";

    }


}





beginBtn.addEventListener("click", beginBtnHandler);