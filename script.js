var questions = document.getElementsByClassName("question");
var searchInput = document.getElementById("searchInput");

for (var i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", toggleAnswer);
}

searchInput.addEventListener("input", filterQuestions);

function toggleAnswer() {
  var answer = this.nextElementSibling;
  answer.classList.toggle("show");
}

function filterQuestions() {
  var searchValue = searchInput.value.toLowerCase();

  for (var i = 0; i < questions.length; i++) {
    var questionText = questions[i].innerText.toLowerCase();
    var answer = questions[i].nextElementSibling;

    if (questionText.includes(searchValue)) {
      questions[i].style.display = "block";
      answer.style.display = answer.classList.contains("show") ? "block" : "none";
    } else {
      questions[i].style.display = "none";
      answer.style.display = "none";
    }
  }
}
