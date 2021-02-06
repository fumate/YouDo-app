let youDoform = document.getElementById("youDoForm");



document.addEventListener("DOMContentLoaded", () => {

    let addBtn = document.getElementById("addBtn");
    let youDoList = document.getElementById("youDoList");




    addBtn.addEventListener("click", event => {
        event.preventDefault();
        let youDoText = youDoform.textForTodos.value;
        let removeBtn = document.createElement("button");
        let liEl = document.createElement("li");

        removeBtn.innerText = "Remove";

        liEl.textContent = youDoText;

        youDoList.prepend(removeBtn);
        youDoList.prepend(liEl);

        removeBtn.addEventListener("click", event => {
            liEl.remove();
            removeBtn.remove();
        })






        console.log("Console log works!");
    });
});











//console.log("Console log works!");
