const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleBtn.textContent = document.body.classList.contains('dark') ? "☀️" : "🌙";
});


function createChart(id, label, color, min, max) {
  const ctx = document.getElementById(id).getContext("2d");
  return new Chart(ctx, {
    type: 'line',
    data: {
      labels: Array.from({length: 10}, (_, i) => `T${i+1}`),
      datasets: [{
        label,
        data: Array.from({length: 10}, () => Math.floor(Math.random()*(max-min+1)+min)),
        borderColor: color,
        borderWidth: 2,
        fill: false,
        tension: 0.4
      }]
    },
    options: { responsive: true }
  });
}

createChart("heartChart", "Heart Rate (BPM)", "#e74c3c", 60, 120);
createChart("bpChart", "Blood Pressure", "#3498db", 70, 150);
createChart("oxygenChart", "Oxygen (%)", "#2ecc71", 90, 100);


document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  document.getElementById("form-msg").innerText = "\u2705 Message sent! Doctor will contact you soon.";
});