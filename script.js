
function addBook() {
    let book = document.getElementById("book").value;

    if (book === "") {
        alert("Enter book name!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = book + 
        ' <button onclick="this.parentElement.remove()">Delete</button>';

    document.getElementById("list").appendChild(li);

    document.getElementById("book").value = "";
}
