function showPage(pageId) {
  document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
  document.getElementById(pageId).classList.remove("hidden");
}

function calculateRisk() {
  document.getElementById("riskResult").innerText = "Your Risk Level: Medium";
}

function sendMessage() {
  const input = document.getElementById("chatInput");
  const chatBox = document.getElementById("chatBox");

  const msg = input.value;

  if (!msg) return;

  chatBox.innerHTML += `
    <div class="text-right mb-2">
      <span class="bg-indigo-600 text-white px-3 py-1 rounded">${msg}</span>
    </div>
  `;

  chatBox.innerHTML += `
    <div class="text-left mb-2">
      <span class="bg-gray-200 px-3 py-1 rounded">Stay healthy! Consult doctor.</span>
    </div>
  `;

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}
