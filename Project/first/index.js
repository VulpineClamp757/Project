function selectMood(mood) {
  const today = new Date().getDate();
  localStorage.setItem("mood", mood);

  // Зберігаємо історію
  const moodHistory = JSON.parse(localStorage.getItem("moodHistory")) || {};
  moodHistory[today] = mood;
  localStorage.setItem("moodHistory", JSON.stringify(moodHistory));

  // Переходимо до історії
  window.location.href = "history.html";
}
