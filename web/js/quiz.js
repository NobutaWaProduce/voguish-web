function VisualKei() {
  var quizScore = 0;
  var questionOneAnswer = document.querySelector("input[name='Drummer']:checked").value;
  if (questionOneAnswer == "Meto") {
    quizScore = quizScore + 1;
  }
  var questionTwoAnswer = document.querySelector("input[name='purple']:checked").value;
  if (questionTwoAnswer == "Kuina") {
    quizScore = quizScore + 1;
  }
    var questionThreeAnswer = document.querySelector("input[name='fab']:checked").value;
  if (questionThreeAnswer == "Mahiro") {
    quizScore = quizScore + 1;
  }
  var questionFourAnswer = document.querySelector("input[name='noble']:checked").value;
  if (questionFourAnswer == "Kamijo") {
    quizScore = quizScore + 1;
  }
    var questionFiveAnswer = document.querySelector("input[name='pink']:checked").value;
  if (questionFiveAnswer == "Minpha") {
    quizScore = quizScore + 1;
  }
  var questionSixAnswer = document.querySelector("input[name='color']:checked").value;
  if (questionSixAnswer == "Keiya") {
    quizScore = quizScore + 1;
  }
    var questionSevenAnswer = document.querySelector("input[name='owl']:checked").value;
  if (questionSevenAnswer == "Amu") {
    quizScore = quizScore + 1;
  }
  var questionEightAnswer = document.querySelector("input[name='creepy']:checked").value;
  if (questionEightAnswer == "Yoshiatsu") {
    quizScore = quizScore + 1;
  }
    var questionNineAnswer = document.querySelector("input[name='cherry']:checked").value;
  if (questionNineAnswer == "Yasu") {
    quizScore = quizScore + 1;
  }
  var questionTenAnswer = document.querySelector("input[name='white']:checked").value;
  if (questionTenAnswer == "Kei") {
    quizScore = quizScore + 1;
  }
  alert("Your score is...");
  alert(quizScore);
}
