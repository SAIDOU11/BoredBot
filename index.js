document.getElementById("bored-bot").addEventListener("click", getIdea);

function getIdea() {
  fetch("https://www.boredapi.com/api/activity")
    .then((res) => res.json())
    .then((data) => {
      document.body.classList.add("fun").textContent = data.activity;
      document.getElementById("idea").textContent = "🦾 HappyBot🦿";
    });
}
