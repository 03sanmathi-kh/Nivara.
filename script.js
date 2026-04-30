function showPage(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

function calcRisk() {
  document.getElementById("riskResult").innerText = "Risk Level: Medium (Consult doctor)";
}

function sendMsg() {
  const input = document.getElementById("chatInput");
  const box = document.getElementById("chatBox");

  const msg = input.value;

  if (!msg) return;

  box.innerHTML += `<div class="text-right mb-2">
    <span class="bg-purple-600 text-white px-3 py-1 rounded">${msg}</span>
  </div>`;

  box.innerHTML += `<div class="text-left mb-2">
    <span class="bg-gray-200 px-3 py-1 rounded">Stay strong 💜 We are here for you.</span>
  </div>`;

  input.value = "";
  box.scrollTop = box.scrollHeight;
}
