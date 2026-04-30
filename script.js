// LOGIN
function login() {
  window.location.href = "dashboard.html";
}

// SIGNUP
function signup() {
  window.location.href = "dashboard.html";
}

// RISK
function showRisk() {
  const levels = ["Low", "Medium", "High"];
  const random = levels[Math.floor(Math.random() * levels.length)];

  document.getElementById("result").innerText =
    "Risk Level: " + random + " (Consult doctor)";
}

// CHAT
function send() {
  let input = document.getElementById("msg");
  let box = document.getElementById("chatBox");

  if (!input.value) return;

  // user message
  box.innerHTML += `
    <div style="text-align:right; margin:5px;">
      <span style="background:#ec4899; color:white; padding:8px; border-radius:10px;">
        ${input.value}
      </span>
    </div>
  `;

  // AI reply
  box.innerHTML += `
    <div style="text-align:left; margin:5px;">
      <span style="background:#eee; padding:8px; border-radius:10px;">
        You are not alone 💜 Stay strong. Consult a doctor for proper guidance.
      </span>
    </div>
  `;

  input.value = "";
  box.scrollTop = box.scrollHeight;
}

// FILE UPLOAD (UI DEMO ONLY)
function uploadReport() {
  alert("Report uploaded successfully!");
}
