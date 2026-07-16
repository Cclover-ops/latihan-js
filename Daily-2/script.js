// ============================================
// 🎯 LATIHAN DOM - DAY 1.5 (Tanpa Event)
// ============================================

console.log("🚀 Latihan DOM Day 1.5 dimulai!");

// ============================================
// BAGIAN 1: SELEKTOR DASAR
// ============================================

// EKSTRA SCOPE!

const cardGrid = document.getElementById("cardGrid");
const listSection = document.querySelector(".list-section");
const infoContainer = document.getElementById("infoContainer");

// 1.1 Ambil h1#mainTitle pake getElementById
// Lalu console.log

const mainTitle = document.getElementById("mainTitle");

console.log(mainTitle);

// 1.2 Ambil semua .card pake querySelectorAll
// Lalu console.log

const card = cardGrid.querySelectorAll(".card");

console.log(card);

// 1.3 Ambil .card pertama pake querySelector
// Lalu console.log

const card1 = cardGrid.querySelector(".card");

console.log(card1);

// 1.4 Ambil semua .todo-item pake getElementsByClassName
// Lalu console.log

const todoItem = listSection.getElementsByClassName("todo-item");

for (const element of todoItem) {
  console.log(element.classList);
}

// ============================================
// BAGIAN 2: MANIPULASI TEKS
// ============================================

// 2.1 Ubah textContent h1#mainTitle menjadi "🔥 DOM Mastery - Level Up!"

mainTitle.textContent = "🔥 DOM Mastery - Level Up!";

// 2.2 Ubah innerHTML .subtitle menjadi "Saya sudah bisa <strong>manipulasi node</strong> dengan percaya diri!"

const subtitle = document.getElementById("subtitle");

subtitle.innerHTML =
  "Saya sudah bisa <strong>manipulasi node</strong> dengan percaya diri!";

// 2.3 Ubah textContent dari card1 .card-desc menjadi "Sudah paham dasar JavaScript!"

const cardDescCard1 = card1.querySelector(".card-desc");

cardDescCard1.textContent = "Sudah paham dasar JavaScript!";

// 2.4 Gunakan innerText untuk mengambil teks dari #info1, lalu console.log

const info1 = document.getElementById("info1");
console.log(info1.innerText);

// ============================================
// BAGIAN 3: MANIPULASI ATRIBUT & CLASS
// ============================================

// 3.1 Tambahkan atribut 'data-level' dengan value 'intermediate' ke card1

card1.setAttribute("data-level", "intermediate");

// 3.2 Ambil atribut 'data-level' dari card1, console.log

console.log(card1.getAttribute("data-level"));

// 3.3 Hapus atribut 'data-level' dari card1

card1.removeAttribute("data-level");
console.log(card1);

// 3.4 Tambahkan class 'featured' ke card2
const card2 = cardGrid.querySelector("#card2");
card2.classList.add("featured");

// 3.5 Cek apakah card3 punya class 'featured', console.log true/false

console.log(card2.classList.contains("featured"));

// 3.6 Hapus class 'featured' dari card2

card2.classList.remove("featured");

// 3.7 Tambahkan class 'highlight-text' ke semua .card-desc

// ============================================
// BAGIAN 4: MANIPULASI STYLE
// ============================================

// 4.1 Ubah background color card3 menjadi '#fef3c7' (kuning muda)

const card3 = cardGrid.querySelector("#card3");
card3.style.backgroundColor = "#fef3c7";

// 4.2 Ubah font size .subtitle menjadi '18px'

subtitle.style.fontSize = "18px";

// 4.3 Ubah color #info2 menjadi '#2b6cb0' (biru tua)

const info2 = infoContainer.querySelector("#info2");
info2.style.backgroundColor = "#2b6cb0";

// 4.4 Tambahkan border '3px solid #667eea' ke #output

const output = document.getElementById("output");
output.style.border = "3px solid #667eea";

// ============================================
// BAGIAN 5: MEMBUAT NODE BARU (createElement)
// ============================================

// 5.1 Buat element <div> baru dengan class 'card'

const divCard = document.createElement("div");
divCard.classList.add("card")
console.log(divCard);

// 5.2 Buat element <div> baru dengan class 'card-title', isi teks "React JS"

const divCardTitle = document.createElement("div");
divCardTitle.classList.add("card-title");
divCardTitle.textContent = "React JS";
console.log(divCardTitle);

// 5.3 Buat element <div> baru dengan class 'card-desc', isi teks "Framework JavaScript untuk UI"

const divCardDesc = document.createElement("div");
divCardDesc.classList.add("card-desc");
divCardDesc.textContent = "Framework JavaScript untuk UI";
console.log(divCardDesc);

// 5.4 Buat element <span> baru dengan class 'card-badge', isi teks "Progress: 10%"

const spanCardBadge = document.createElement("span");
spanCardBadge.classList.add("card-badge");
spanCardBadge.textContent = "Progress: 10%";

// 5.5 Gabungkan semua element di atas ke dalam card baru
//     (card-title, card-desc, card-badge masuk ke dalam card)

divCard.append(divCardTitle, divCardDesc, spanCardBadge);
console.log(divCard);

// 5.6 Masukkan card baru ke dalam #cardGrid (di AKHIR)

cardGrid.appendChild(divCard);
console.log(cardGrid);

// ============================================
// BAGIAN 6: TEXT NODE (createTextNode)
// ============================================

// 6.1 Buat text node dengan isi " ⭐ Ini adalah teks dari text node"

const newTextOutputContent = document.createTextNode(
  " ⭐ Ini adalah teks dari text node",
);

// 6.2 Ambil #outputContent, lalu append text node tersebut

const outputContent = output.querySelector("#outputContent");
outputContent.append(newTextOutputContent);

// 6.3 Buat text node lain dengan isi " ✨ Selamat belajar!"

const newText = document.createTextNode(" ✨ Selamat belajar!");

// 6.4 Masukkan text node kedua ke #outputContent (di BELAKANG text node pertama)

outputContent.append(newTextOutputContent, newText);

// ============================================
// BAGIAN 7: APPEND vs APPENDCHILD vs INSERTBEFORE
// ============================================

// 7.1 Gunakan append() untuk menambahkan 3 element sekaligus ke #outputContent:
//     - <p> dengan teks "Item 1 - pake append()"
//     - <p> dengan teks "Item 2 - pake append()"
//     - <span> dengan teks "Item 3 - pake append()"

const item1P = document.createElement("p");
const item2P = document.createElement("p");
const itemSpan = document.createElement("span");

item1P.textContent = "Item 1";
item2P.textContent = "Item 2";
itemSpan.textContent = "Item 3";

outputContent.append(item1P, item2P, itemSpan);

// 7.2 Gunakan appendChild() untuk menambahkan <p> dengan teks "Item 4 - pake appendChild()" ke #outputContent
//     Lalu console.log return value-nya

const item4P = document.createElement("p");

item4P.textContent = "Item 4";

outputContent.appendChild(item4P, itemSpan);

// 7.3 Gunakan insertBefore() untuk menambahkan <p> dengan teks "Item 0 - pake insertBefore()"
//     ke #outputContent, TARUH DI AWAL (sebelum semua item)

const item0P = document.createElement("p");

item0P.textContent = "Item 0";

outputContent.insertBefore(item0P, item1P);

// ============================================
// BAGIAN 8: DOM TRAVERSAL
// ============================================

// 8.1 Ambil parent element dari #card2, console.log

console.log(card2);

// 8.2 Ambil semua children dari #todoList, console.log

const todoList = document.getElementById("todoList");
console.log(todoList.children);

// 8.3 Ambil next sibling dari #card1, console.log

console.log(card1.nextElementSibling);

// 8.4 Ambil previous sibling dari #card3, console.log

console.log(card3.previousElementSibling);

// 8.5 Ambil first child dari #todoList, console.log

console.log(todoList.firstElementChild);

// 8.6 Ambil last child dari #todoList, console.log

console.log(todoList.lastElementChild);

// ============================================
// BAGIAN 9: CHALLENGE (Gabungan Semua)
// ============================================

// 9.1 Buat element <li> baru dengan class 'todo-item medium'
//     Isi dengan teks "Tugas dari challenge"
//     Tambahkan <span class="priority">Medium</span> di dalamnya

const newListItem = document.createElement("li");
// const newSpanListItem = document.createElement("span")

newListItem.classList.add("todo-item", "medium");

// newListItem.innerHTML = "<span>Tugas dari challange</span>";

// newSpanListItem.innerText = "medium"
// newSpanListItem.classList.add("priority")

// newListItem.appendChild(newSpanListItem)

// ATAU

newListItem.innerHTML = `
<span>Tugas dari challange</span>
<span class=priority>medium</span>`;

// 9.2 Masukkan li baru ke #todoList di POSISI KEDUA (setelah item pertama)

const li2 = todoList.children[1];
todoList.insertBefore(newListItem, li2);

// 9.3 Ambil semua .todo-item, lalu tambahkan atribut 'data-id' dengan value index-nya
//     (index mulai dari 0) ke setiap item

for (let i = 0; i < todoItem.length; i++) {
    todoItem[i].setAttribute("data-id", i)
}

// 9.4 Ubah textContent dari #footerStats menjadi "Total item: [jumlah .todo-item]"
//     Ganti [jumlah .todo-item] dengan jumlah sebenarnya

const footerStats = document.getElementById("footerStats");

footerStats.textContent = `Total item: ${todoItem.length}`;

// 9.5 Ubah textContent dari #outputText menjadi "✅ SEMUA LATIHAN SELESAI! 🎉"

const outputText = document.getElementById("outputText")
outputText.textContent = "✅ SEMUA LATIHAN SELESAI! 🎉"

// 9.6 Tambahkan teks " - Total card: [jumlah .card]" di akhir #footerStats
//     Ganti [jumlah .card] dengan jumlah sebenarnya

const textStatsCard = document.createTextNode(` - Total card: ${card.length}`)
footerStats.appendChild(textStatsCard)

// ============================================
// 🎉 SELESAI! Cek hasilnya di browser.
// ============================================

console.log("✅ Semua latihan selesai!");
