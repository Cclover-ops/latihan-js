const p3 = document.querySelector(".p3")

function ubahWarna() {
    p2.style.backgroundColor = "lightblue";
}

const p2 = document.querySelector(".p2")

p2.onclick = ubahWarna

const p4 = document.querySelector("#b p")

p4.addEventListener("click", function() {
    const ul = document.querySelector('#b ul')

    const li = document.createElement("li")
    li.textContent = "item baru"
    ul.appendChild(li)
})