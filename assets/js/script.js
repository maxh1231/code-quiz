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


        questionOption1.addEventListener("click", function () {
            answer.textContent = "Wrong!";
            timerElement.textContent = timerElement.textContent - 10;
            endQuiz();
        })

        questionOption2.addEventListener("click", function () {
            answer.textContent = "Wrong!";
            timerElement.textContent = timerElement.textContent - 10;
            endQuiz();
        })

        questionOption3.addEventListener("click", function () {
            answer.textContent = "Wrong!";
            timerElement.textContent = timerElement.textContent - 10;
            endQuiz();
        })

        questionOption4.addEventListener("click", function () {
            answer.textContent = "Correct!";

            // counteract previous function which deducts 10 seconds on questionOption4 click
            timerElement.textContent = Number(timerElement.textContent) + 10;
            endQuiz();

        })

        function endQuiz() {
            clearInterval(timer);
            questionTitle.textContent = "Your score is " + questionTitle.textContent;

            questionOption1.style.display = "none";
            questionOption2.style.display = "none";
            questionOption3.style.display = "none";
            questionOption4.style.display = "none";
            answer.style.display = "none";



            var formInput = document.createElement("form");
            var saveName = document.createElement("input");
            saveName.setAttribute("type", "input");
            saveName.setAttribute("id", "username");
            saveName.setAttribute("placeholder", "Enter your name!");
            saveName.classList.add("name-input");
            formInput.appendChild(saveName);

            var submitNameBtn = document.createElement("button");
            submitNameBtn.className = "submit-quiz";
            submitNameBtn.textContent = "Submit";
            formInput.appendChild(submitNameBtn);

            questionCard.appendChild(formInput);

            submitNameBtn.addEventListener("click", function (event) {
                event.preventDefault();








            })

        }
    }


}





beginBtn.addEventListener("click", beginBtnHandler);