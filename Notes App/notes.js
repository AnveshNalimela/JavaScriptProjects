
const notescontainer = document.querySelector(".notes-container");
console.log(notescontainer)
let btn = document.querySelector(".btn");
let notes = document.querySelectorAll(".inputBox")
function showNotes() {
    notescontainer.innerHTML = localStorage.getItem("notesContent");
}
showNotes()

function updateStorage() {
    localStorage.setItem("notesContent", notescontainer.innerHTML);
}


btn.addEventListener('click', function () {
    let inputBox = document.createElement("p")
    let deleteIcon = document.createElement("img");

    deleteIcon.setAttribute("src", "trash.png");
    inputBox.setAttribute("contenteditable", "true");
    inputBox.className = "inputBox";
    deleteIcon.className = "deleteIcon"
    notescontainer.appendChild(inputBox).appendChild(deleteIcon);
    console.log(inputBox)

})

notescontainer.addEventListener('click', function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".inputBox")
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLinebreak");
        event.preventDefault();

    }
})


