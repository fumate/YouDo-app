let youDoform = document.getElementById("youDoForm");

let selectPriors = document.getElementById("selecPriors");

let selectField = document.getElementById("selectField");


youDoform.addBtn.disabled = true;


document.addEventListener("DOMContentLoaded", () => {

    let addBtn = document.getElementById("addBtn");
    let youDoList = document.getElementById("youDoList");


    addBtn.addEventListener("click", event => {
        event.preventDefault();
        let youDoText = youDoform.textForTodos.value;
        let removeBtn = document.createElement("button");
        let liEl = document.createElement("li");
        youDoform.textForTodos.value = "";


        liEl.textContent = youDoText;
        removeBtn.innerText = "Remove";

        youDoList.prepend(removeBtn);
        youDoList.prepend(liEl);
        youDoList.prepend(selectPriors);

        removeBtn.addEventListener("click", event => {
            liEl.remove();
            removeBtn.remove();
            selectPriors.remove();
        });

    });

    youDoform.textForTodos.addEventListener("keyup", event => {
                if (event.target.value.length > 6) {
                    event.target.classList.add("success");
                    event.target.classList.remove("error");
                    youDoform.addBtn.disabled = false;
                } else if (event.target.value === "") {
                    event.target.classList.remove("success");
                }
                else {
                    event.target.classList.add("error");
                    event.target.classList.remove("success");
                    youDoform.addBtn.disabled = true;
                }
    });

});

/*let todos = [];

function addTodo() {
    let inputValue = document.getElementById(youDoform.textForTodos.value);
    todos.push(inputValue);
}
function printTodos() {
    let list = document.getElementById("youDoList");
    list.innerHTML = "";

    for (let i = 0; i < todos.length; i++) {
        let i = document.createElement("li");
        let listItem = li.appendChild((document.createTextNode(todos[i])));
        list.appendChild(listItem);
        console.log(todos);
    }
    document.getElementById("click", function() {
        addTodo();
        printTodos();
    })
}*/
