let codes = {};

fetch('codes.json')
  .then(response => response.json())
  .then(data => {
    codes = data;
  })
  .catch(error => {
    console.error("Failed to load codes.json", error);
  });

// Form submission handling
document.getElementById("ticketForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const ticketCode = document.getElementById("ticketCode").value.trim().toUpperCase();
  const successMessage = document.getElementById("successMessage");
  const errorMessage = document.getElementById("errorMessage");
  const submitBtn = document.querySelector(".submit-btn");

  successMessage.style.display = "none";
  errorMessage.style.display = "none";

  if (codes.hasOwnProperty(ticketCode)) {
    const score = codes[ticketCode];

    submitBtn.textContent = "Verifying...";
    submitBtn.style.background = "linear-gradient(135deg, #4ade80, #22c55e)";

    setTimeout(() => {
      successMessage.innerHTML = `🎉 Valid Code! Your Score: <strong>${score} Points</strong>`;
      successMessage.style.display = "block";
      submitBtn.textContent = "Verified ✓";
      console.log(`Code: ${ticketCode}, Score: ${score}`);
    }, 1500);
  } else {
    submitBtn.textContent = "Invalid Code";
    submitBtn.style.background = "linear-gradient(135deg, #ef4444, #f87171)";
    errorMessage.style.display = "block";

    setTimeout(() => {
      submitBtn.textContent = "Access Dashboard";
      submitBtn.style.background = "linear-gradient(135deg, #ff6b6b, #ff8e8e)";
    }, 2000);
  }
});
