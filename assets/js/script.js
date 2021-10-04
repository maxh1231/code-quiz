var beginBtn = document.getElementById("beginBtn");
var hero = document.getElementById("hero");

function beginBtnHandler() {
    // document.getElementById("header").style.display = "none";
    document.getElementById("welcome").style.display = "none";
    document.getElementById("beginBtn").style.display = "none";

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

    hero.appendChild(questionCard);
}

beginBtn.addEventListener("click", beginBtnHandler);