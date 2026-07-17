// ============================================
// 🎯 LATIHAN EVENT - DAY 2 (Dari Nol)
// ============================================

console.log("🚀 Latihan Event Day 2 dimulai!");

// ============================================
// FUNGSI BANTUAN (Utility)
// ============================================

// Function untuk menambahkan log ke #output
function addLog(message, type = "") {
  const output = document.querySelector("#output");

  // Hapus pesan "Belum ada aktivitas..."
  const placeholder = output.querySelector("p");
  if (placeholder && placeholder.style.color === "rgb(160, 174, 192)") {
    placeholder.remove();
  }

  const logEntry = document.createElement("div");
  logEntry.className = `log-entry ${type}`;
  logEntry.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
  output.appendChild(logEntry);
}

// ============================================
// BAGIAN 1: CLICK EVENTS
// ============================================

const btnGroup = document.querySelector(".btn-group");

// 1.1 Tambahkan event click ke #btnClick
//     Saat diklik, tampilkan alert "Tombol diklik!"

const btnClick = btnGroup.querySelector("#btnClick");

btnClick.addEventListener("click", function () {
  alert("tombol diklik!");
});

// 1.2 Tambahkan event click ke #btnCounter
//     Setiap diklik, counter bertambah 1
//     Counter ada di dalam #counterDisplay

const btnCounter = btnGroup.querySelector("#btnCounter");

let counter = 0;

btnCounter.addEventListener("click", function () {
  const counterDisplay = btnCounter.querySelector("#counterDisplay");
  counterDisplay.textContent = counter++;
});

// 1.3 Tambahkan event click ke #btnReset
//     Reset counter ke 0

const btnReset = btnGroup.querySelector("#btnReset");

btnReset.addEventListener("click", function () {
  const counterDisplay = btnCounter.querySelector("#counterDisplay");
  counter = 0;
  counterDisplay.textContent = counter;
});

// ============================================
// BAGIAN 2: HOVER EVENTS
// ============================================

// 2.1 Tambahkan event mouseenter ke #colorBox
//     Saat mouse masuk, tambahkan class 'hovered'

const colorBox = document.getElementById("colorBox");

colorBox.addEventListener("mouseenter", function () {
  colorBox.classList.add("hovered");
  console.log(colorBox);
});

// 2.2 Tambahkan event mouseleave ke #colorBox
//     Saat mouse keluar, hapus class 'hovered'

colorBox.addEventListener("mouseleave", function () {
  colorBox.classList.remove("hovered");
});

// 2.3 Tambahkan event click ke #colorBox
//     Saat diklik, toggle class 'clicked'

colorBox.addEventListener("click", function () {
  colorBox.classList.toggle("clicked");
});

// ============================================
// BAGIAN 3: INPUT EVENTS
// ============================================

const inputGroup = document.querySelector(".input-group");

// 3.1 Tambahkan event input ke #textInput
//     Setiap kali user ngetik, tampilkan teks di #inputDisplay
//     Format: "Kamu mengetik: [teks]"

const textInput = inputGroup.querySelector("#textInput");

textInput.addEventListener("input", function () {
  const inputDisplay = inputGroup.querySelector("#inputDisplay");
  inputDisplay.textContent = `Kamu mengetik: ${textInput.value}`;
});

// 3.2 Tambahkan event focus ke #textInput
//     Saat input di-focus, beri border-color 'blue'

textInput.addEventListener("focus", function () {
  textInput.style.borderColor = "blue";
});

// 3.3 Tambahkan event blur ke #textInput
//     Saat input kehilangan focus, kembalikan border-color ke default

textInput.addEventListener("blur", function () {
  textInput.style.borderColor = "initial";
});

// ============================================
// BAGIAN 4: FORM SUBMIT
// ============================================

// 4.1 Tambahkan event submit ke #simpleForm
//     Saat form di-submit:
//     - Ambil nilai dari #nameInput dan #messageInput
//     - Tampilkan di #output dengan format:
//       "Nama: [nama] - Pesan: [pesan]"
//     - Jangan lupa e.preventDefault()!
//     - Reset form setelah submit

const simpleForm = document.getElementById("simpleForm");

simpleForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const nameInput = document.getElementById("nameInput");
  const messageInput = document.getElementById("messageInput");

  const output = document.getElementById("output");
  addLog(`Nama: ${nameInput.value} - Pesan: ${messageInput.value}`, "form");
  simpleForm.reset();
  addLog("Form telah direset setelah submit", 'reset');
});

// 4.2 Tambahkan event reset ke #simpleForm
//     Saat form di-reset, tampilkan log "Form di-reset!"

simpleForm.addEventListener("reset", function () {
  addLog("Form di-reset!", "reset");
});

// ============================================
// BAGIAN 5: CHALLENGE (Gabungan)
// ============================================

// 5.1 Buat tombol baru dengan text "Hapus Semua Log"
//     - Tambahkan ke .btn-group (di akhir)
//     - Beri class 'btn btn-danger'
//     - Saat diklik, hapus semua log di #output
//     - Tambahkan kembali pesan "Belum ada aktivitas..."

const buttonRemoveLog = document.createElement("button");

buttonRemoveLog.textContent = "Hapus Semua Log";
btnGroup.appendChild(buttonRemoveLog);
buttonRemoveLog.classList.add("btn", "btn-danger");
buttonRemoveLog.addEventListener("click", function () {
  const output = document.getElementById("output");
  output.innerHTML = "<p style='color: #A0AEC0;'>Belum ada aktivitas...</p>";
});

// 5.2 Buat tombol baru dengan text "Tambah Log"
//     - Tambahkan ke .btn-group (di akhir)
//     - Beri class 'btn btn-warning'
//     - Saat diklik, tambahkan log "Manual log added!"

const buttonAddLog = document.createElement("button");

buttonAddLog.textContent = "Tambah Log";
btnGroup.appendChild(buttonAddLog);
buttonAddLog.classList.add("btn", "btn-warning");
buttonAddLog.addEventListener("click", function () {
  addLog("Manual log added!", "manual");
});

// 5.3 Tambahkan event keydown ke document
//     - Saat user menekan tombol 'c', tampilkan log "Tombol C ditekan!"
//     - Saat user menekan tombol 'r', reset counter ke 0

document.addEventListener("keydown", function (e) {
  if (e.key === "c") {
    addLog("Tombol C ditekan!", "key");
  } else if (e.key === "r") {
    counter = 0;
    updateCounter();
  }
});

// 5.4 Tambahkan event dblclick (double click) ke #colorBox
//     - Saat di-double click, ubah background menjadi random color

colorBox.addEventListener("dblclick", function () {
  colorBox.style.backgroundColor = `maroon`; // susah
});

// 5.5 (Bonus) Buat fitur "Keyboard Shortcut"
//     - Saat user menekan '1', klik otomatis #btnClick
//     - Saat user menekan '2', klik otomatis #btnCounter

document.addEventListener("keydown", function (e) {
  if (e.key === "1") {
    btnClick.click();
  } else if (e.key === "2") {
    btnCounter.click();
  }
});

// ============================================
// 🎉 SELESAI!
// ============================================

console.log("✅ Semua latihan selesai!");
