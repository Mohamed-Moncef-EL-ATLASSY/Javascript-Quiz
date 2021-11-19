const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
  .map(score => {
    if (score.score >= 400) {
      return `<li class="high-score">${score.name} - ${score.score} <i class="fas fa-trophy"></i></li>`;
    } else if(score.score >= 300) {
      return `<li class="high-score">${score.name} - ${score.score} <i class="fas fa-medal"></i></li>`;
    } else if(score.score >= 200) {
      return `<li class="high-score">${score.name} - ${score.score} <i class="fa fa-star"></i></li>`;
    } else if(score.score >= 100) {
      return `<li class="high-score">${score.name} - ${score.score} <i class="fa fa-thumbs-up"></i></li>`;
    } else {
      return `<li class="high-score">${score.name} - ${score.score} <i class="fa fa-thumbs-down"></i></li>`;
    }
  })
  .join("");