document.getElementById("bored-bot").addEventListener("click", function () {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((res) => res.json())
    .then((data) => {
      document.body.classList.add("fun");
      document.getElementById("title").textContent = ` 🦾 ${data.type} 🦿`;
      document.getElementById("idea").textContent = data.activity;
    });
});
