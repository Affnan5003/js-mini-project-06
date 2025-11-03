const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".create-btn");

let notes = document.querySelectorAll(".input-box");


function displayNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}

displayNotes();


function saveNotes() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {

    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);

    saveNotes();
})

notesContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();

        saveNotes();
    }
    else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(note => {
            note.onkeyup = () => {
                saveNotes();
            };
        });


    }

});




