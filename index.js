const newP = document.createElement("p");
newP.textContent = "ini element baru";
newP.classList.add("p4")

const sectionA = document.getElementById("a");
sectionA.appendChild(newP);

const newListItem = document.createElement('li')
newListItem.textContent = "Ini item baru"

const sectionB = document.getElementById('b')
const ul = sectionB.querySelector("ul")
const li2 = ul.querySelector("li:nth-child(2)")

ul.insertBefore(newListItem, li2)

const link = sectionA.querySelector('a')

sectionA.removeChild(link)

const paragraphB = sectionB.querySelector('p')
const h2SectionB = document.createElement('h2')

h2SectionB.textContent = "Ini Subjudul"

sectionB.replaceChild(h2SectionB, paragraphB)

newP.classList.add("new-element")
newListItem.classList.add("new-element")
h2SectionB.classList.add("new-element")