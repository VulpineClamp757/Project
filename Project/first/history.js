const selectedMood = localStorage.getItem("mood");

const todayMoodDiv = document.getElementById("todayMood");
if (selectedMood && todayMoodDiv) {
  const moodImg = document.createElement("img");
  moodImg.src = `images/${selectedMood}.png`;
  moodImg.alt = selectedMood;
  moodImg.style.width = "100px";
  todayMoodDiv.appendChild(moodImg);
}

function generateCalendar() {
  const calendar = document.getElementById("calendar");
  if (!calendar) return;

  const moodHistory = JSON.parse(localStorage.getItem("moodHistory")) || {};

  for (let i = 1; i <= 31; i++) {
    const day = document.createElement("div");
    day.classList.add("day");
    day.innerText = i;

    const mood = moodHistory[i];
    if (mood) {
      const img = document.createElement("img");
      img.src = `images/${mood}.png`;
      img.alt = mood;
      img.style.width = "30px";
      img.style.display = "block";
      img.style.margin = "5px auto 0";
      day.appendChild(img);
    }

    calendar.appendChild(day);
  }
}

generateCalendar();
