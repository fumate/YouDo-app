let youDoform = document.getElementById("youDoForm");



document.addEventListener("DOMContentLoaded", () => {

    let addBtn = document.getElementById("addBtn");
    let youDoList = document.getElementById("youDoList");




    addBtn.addEventListener("click", event => {
        event.preventDefault();
        let youDoText = youDoform.textForTodos.value;
        let liEl = document.createElement("li");

        liEl.textContent = youDoText;

        youDoList.prepend(liEl);





        console.log("Console log works!");
    });
});











//console.log("Console log works!");
