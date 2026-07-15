// ============================================
// 🎯 TULIS KODE LATIHAN KAMU DI SINI
// ============================================

console.log("🚀 Latihan DOM Day 1 dimulai!");

// ---------- SOAL 1: Selektor Dasar ----------
// 1.1 Ambil element dengan id 'mainTitle' menggunakan getElementById
// Lalu console.log hasilnya

const mainTitle = document.getElementById("mainTitle");
console.log(mainTitle);

// 1.2 Ambil semua element dengan class 'card' menggunakan getElementsByClassName
// Lalu console.log hasilnya

const card = document.getElementsByClassName("card");
console.log(card);

// 1.3 Ambil semua element <li> menggunakan getElementsByTagName
// Lalu console.log hasilnya

const li = document.getElementsByTagName("li");
console.log(li);

// 1.4 Ambil element pertama dengan class 'card-desc' menggunakan querySelector
// Lalu console.log hasilnya

const cardDesc = document.querySelector(".card-desc");
console.log(cardDesc);

// 1.5 Ambil semua element dengan class 'todo-item' menggunakan querySelectorAll
// Lalu console.log hasilnya

const todoItem = document.querySelectorAll(".todo-item");
console.log(todoItem);

// ---------- SOAL 2: Ubah Isi Element ----------
// 2.1 Ubah textContent dari h1#mainTitle menjadi "🔥 DOM Mastery Day 1"

mainTitle.innerHTML = "🔥 DOM Mastery Day 1";
// 2.2 Ubah innerHTML dari .description menjadi "Saya sudah bisa <strong>manipulasi DOM</strong>!"

const description = document.querySelector("div.container .description");
console.log(description);

description.innerHTML = "Saya sudah bisa <strong>manipulasi DOM</strong>!";

// 2.3 Ubah text dari card-desc di card1 menjadi "Deskripsi card pertama sudah diubah!"

cardDesc.textContent = "Deskripsi card pertama sudah diubah!";

// ---------- SOAL 3: Manipulasi Atribut ----------
// 3.1 Tambahkan atribut 'data-status' dengan value 'active' ke card1

const card1 = document.getElementById("card1");
card1.setAttribute("data-status", "active");
console.log(card1);

// 3.2 Ambil atribut 'data-status' dari card1 dan console.log hasilnya

console.log(card1.getAttribute("data-status"));

// 3.3 Hapus atribut 'data-status' dari card1

card1.removeAttribute("data-status");

// ---------- SOAL 4: Manipulasi Class ----------
// 4.1 Tambahkan class 'active' ke card2

const card2 = document.getElementById("card2");
card2.classList.add("active");

// 4.2 Hapus class 'active' dari card2 (kalo ada)

card2.classList.toggle("active");

// 4.3 Tambahkan class 'highlight' ke semua element dengan class 'todo-item'

console.log(todoItem[2].classList);

for (const element of todoItem) {
  element.classList.add("highlight");
}

// 4.4 Cek apakah card3 punya class 'active', lalu console.log true/false

const card3 = document.getElementById("card3");
console.log(card3.classList.contains("active"));

// ---------- SOAL 5: Manipulasi Style ----------
// 5.1 Ubah background color card3 menjadi 'lightgreen'

card3.style.backgroundColor = "lightgreen";

// 5.2 Ubah font size .description menjadi '20px'

description.style.fontSize = "20px";

// 5.3 Ubah color #infoBox menjadi 'darkblue'

const infoBox = document.getElementById("infoBox");
infoBox.style.color = "darkblue";

// ---------- SOAL 6: Membuat Element Baru ----------
// 6.1 Buat element <p> baru dengan text "Ini paragraf baru dari JavaScript!"

const newParagraph = document.createElement("p");
newParagraph.innerText = "Ini paragraf baru dari JavaScript!";

// 6.2 Tambahkan class 'info-box' ke paragraf baru tersebut

newParagraph.setAttribute("class", "info-box");

// 6.3 Masukkan paragraf baru ke dalam #output (sebelum #outputText)

const output = document.getElementById("output");
const outputText = output.querySelector("#outputText");

output.insertBefore(newParagraph, outputText);
// ---------- SOAL 7: DOM Traversal ----------
// 7.1 Ambil parent element dari #card1, lalu console.log

const parentCard1 = card1.parentElement;
console.log(parentCard1);

// 7.2 Ambil child element (semua) dari #todoList, lalu console.log

const todoList = document.getElementById("todoList");
const allChildTodoList = todoList.children;
console.log(allChildTodoList);

// 7.3 Ambil next sibling dari #card2, lalu console.log

const nextSiblingCard2 = card2.nextElementSibling;
console.log(nextSiblingCard2);

// ---------- SOAL 8: Challenge (Gabungan) ----------
// 8.1 Buat element <li> baru dengan text "Tugas baru dari JS"

const newElementListItem = document.createElement("li");
newElementListItem.innerText = "Tugas baru dari JS";

// 8.2 Tambahkan class 'todo-item' ke li baru

newElementListItem.setAttribute("class", "todo-item");

// 8.3 Masukkan li baru ke dalam #todoList (di bagian akhir)

todoList.append(newElementListItem);

// 8.4 Ubah text dari #outputText menjadi "✅ Semua manipulasi selesai! Cek console."

outputText.innerText = "✅ Semua manipulasi selesai! Cek console.";

// 8.5 Cek jumlah total <li> sekarang, lalu console.log

console.log(li.length);

// ============================================
// SELESAI! Cek hasilnya di browser.
// ============================================
