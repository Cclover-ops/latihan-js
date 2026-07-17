// ============================================
// 🎯 LATIHAN EVENT - DAY 3.5
// ============================================

console.log("🚀 Latihan Event Day 3.5 dimulai!");

// ============================================
// FUNGSI BANTUAN
// ============================================

function addLog(message, type = "") {
  const output = document.querySelector("#output");

  // Hapus pesan kosong
  const empty = output.querySelector(".empty-log");
  if (empty) empty.remove();

  const entry = document.createElement("div");
  entry.className = `log-entry ${type}`;
  entry.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
  output.appendChild(entry);
}

// ============================================
// BAGIAN 1: LAMPU (Click Events)
// ============================================

// 1.1 Ambil element lampu, btnTurnOn, btnTurnOff, btnToggle
// Tips: lampu punya class 'lightbulb off' atau 'lightbulb on'

const lamp = document.getElementById("lamp");
const btnTurnOn = document.getElementById("btnTurnOn");
const btnTurnOff = document.getElementById("btnTurnOff");
const btntoggle = document.getElementById("btnToggle");

// 1.2 Saat btnTurnOn diklik, tambahkan class 'on', hapus class 'off'
//     Ubah teks lampu jadi '💡' (kalo belum)
//     Tambah log "Lampu dinyalakan"

btnTurnOn.addEventListener("click", function () {
  lamp.classList.remove("off");
  lamp.classList.add("on");
});

// 1.3 Saat btnTurnOff diklik, tambahkan class 'off', hapus class 'on'
//     Ubah teks lampu jadi '💡' (tetap)
//     Tambah log "Lampu dimatikan"

btnTurnOff.addEventListener("click", function () {
  lamp.classList.remove("on");
  lamp.classList.add("off");

  addLog("Lampu dimatikan");
});

// 1.4 Saat btnToggle diklik, toggle class 'on' dan 'off'
//     Tambah log "Lampu di-toggle"

btntoggle.addEventListener("click", function () {
  lamp.classList.toggle("off");
  lamp.classList.toggle("on");
  addLog("Lampu di-toggle");
});

// ============================================
// BAGIAN 2: COUNTER (Click Events)
// ============================================

// 2.1 Ambil counterNumber, btnPlus, btnMinus, btnResetCounter
//     Tips: counterNumber pake id 'counterNumber'

const counterNumber = document.getElementById("counterNumber");
const btnPlus = document.getElementById("btnPlus");
const btnMinus = document.getElementById("btnMinus");
const btnResetCounter = document.getElementById("btnResetCounter");

// 2.2 Buat variable 'counter' dengan nilai awal 0

let counter = 0;
// 2.3 Saat btnPlus diklik, counter + 1, update tampilan
//     Tambah log "Counter: [nilai]"

btnPlus.addEventListener("click", function () {
  counterNumber.innerText = counter += 1;
  addLog(`Counter: ${counter}`);
});

// 2.4 Saat btnMinus diklik, counter - 1, update tampilan
//     Tambah log "Counter: [nilai]"

btnMinus.addEventListener("click", function () {
  counterNumber.innerText = counter -= 1;

  addLog(`Counter: ${counter}`);
});

// 2.5 Saat btnResetCounter diklik, counter = 0, update tampilan
//     Tambah log "Counter di-reset!"

btnResetCounter.addEventListener("click", function () {
  counterNumber.innerText = counter = 0;
  addLog("Counter di-reset!");
});

// 2.6 BONUS: Kalo counter < 0, counter tetap 0 (ga boleh negatif)

// ============================================
// BAGIAN 3: SHOPPING LIST
// ============================================

// 3.1 Ambil shoppingList, itemInput, btnAddItem

const shoppingList = document.getElementById("shoppingList");
const itemInput = document.getElementById("itemInput");
const btnAddItem = document.getElementById("btnAddItem");

// 3.2 Function untuk menambah item:
//     - Ambil nilai dari itemInput
//     - Kalo kosong, alert("Isi dulu!")
//     - Buat <li> dengan struktur:
//       <li><span>[item]</span><button class="delete-btn">Hapus</button></li>
//     - Masukkan ke shoppingList
//     - Kosongkan input
//     - Tambah log "Item ditambahkan: [item]"

const addItem = function () {
  if (!itemInput.value.trim()) {
    alert("Isi dulu");
  } else {
    const newListItem = document.createElement("li");
    newListItem.innerHTML = `<span>${itemInput.value}</span><button class="delete-btn">Hapus</button>`;
    shoppingList.appendChild(newListItem);
    itemInput.value = "";
    addLog(`Item ditambahkan: ${itemInput.value}`);
  }
};

// 3.3 Tambahkan event click ke btnAddItem
//     Panggil function di atas

btnAddItem.addEventListener("click", addItem);

// 3.4 Tambahkan event keydown ke itemInput
//     Kalo user tekan Enter, jalankan function tambah item

itemInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addItem();
  }
});

// 3.5 Event click ke setiap delete-btn (pake loop)
//     Saat diklik, hapus <li> parent-nya
//     Tambah log "Item dihapus: [item]"

const deleteButtons = document.querySelectorAll(".delete-btn");
deleteButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const listItem = this.parentElement;
    shoppingList.removeChild(listItem);
    addLog(`Item dihapus: ${listItem.querySelector("span").textContent}`);
  });
});

// 3.6 Event click ke setiap <li> (toggle bought)
//     Saat diklik, toggle class 'bought'
//     Tambah log "Item [item] ditandai dibeli"

const listItems = shoppingList.querySelectorAll("li");
listItems.forEach(function (li) {
  li.addEventListener("click", function () {
    this.classList.toggle("bought");
    const itemText = this.querySelector("span").textContent;
    addLog(`Item ${itemText} ditandai dibeli`);
  });
});

// ============================================
// BAGIAN 4: FORM (Submit & Reset)
// ============================================

// 4.1 Ambil simpleForm, foodInput, drinkInput

const simpleForm = document.getElementById("simpleForm")
const foodInput = document.getElementById("foodInput")
const drinkInput = document.getElementById("drinkInput")

// 4.2 Event submit ke simpleForm
//     - e.preventDefault()
//     - Ambil nilai foodInput dan drinkInput
//     - Kalo kosong, alert("Isi semua field!")
//     - Tambah log "Makanan: [food] - Minuman: [drink]"
//     - Reset form

simpleForm.addEventListener('submit', function (e) {
  e.preventDefault()
  e.stopPropagation()
  if (!foodInput.value.trim() || !drinkInput.value.trim()) {
    alert("Isi semua field!")
  } else {
    addLog(`Makanan: ${foodInput.value} - Minuman: ${drinkInput.value}`)
    simpleForm.reset()
  }
})

// 4.3 Event reset ke simpleForm
//     - Tambah log "Form di-reset!"

simpleForm.addEventListener('reset', function (e) {
  addLog("Form di-reset!")
})

// ============================================
// BAGIAN 5: KEYBOARD SHORTCUTS
// ============================================

// 5.1 Tambahkan event keydown ke document
//     - Tekan 'n' → toggle lampu (seperti klik btnToggle)
//     - Tekan '+' → tambah counter 1
//     - Tekan '-' → kurang counter 1
//     - Tekan 'a' → fokus ke itemInput (biar langsung ngetik)
//     - Tambah log untuk setiap shortcut

document.addEventListener("keydown", function (e) {
  if (e.key === "n") {
    lamp.classList.toggle("off");
    lamp.classList.toggle("on");
    addLog("Lampu di-toggle (shortcut)");
  }
  if (e.key === "+") {
    counterNumber.innerText = counter += 1;
    addLog(`Counter: ${counter} (shortcut)`);
  }
  if (e.key === "-") {
    counterNumber.innerText = counter -= 1;
    addLog(`Counter: ${counter} (shortcut)`);
  }
  if (e.key === "a") {
    itemInput.focus();
    addLog("Fokus ke input item (shortcut)");
  }
});

// ============================================
// BAGIAN 6: CHALLENGE (Bonus)
// ============================================

// 6.1 Buat tombol "Hapus Semua Item" di shopping list
//     - Tambahkan ke .input-group (setelah btnAddItem)
//     - Class 'btn btn-danger'
//     - Saat diklik, hapus SEMUA <li> di shoppingList
//     - Tambah log "Semua item dihapus!"

const btnDeleteAll = document.createElement("button");
btnDeleteAll.textContent = "Hapus Semua Item";
btnDeleteAll.className = "btn btn-danger";
document.querySelector(".input-group").appendChild(btnDeleteAll); 

// 6.2 Double click ke lampu
//     - Saat di-double click, toggle lampu
//     - Tambah log "Lampu di-double click!"

lamp.addEventListener("dblclick", function () {
  lamp.classList.toggle("off");
  lamp.classList.toggle("on");
  addLog("Lampu di-double click!");
});

// ============================================
// 🎉 SELESAI!
// ============================================

console.log("✅ Semua latihan selesai!");
