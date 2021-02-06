let youDoform = document.getElementById("youDoForm");

youDoform.addBtn.disabled = true;

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
        });



        console.log("Console log works!");
    });

    youDoform.textForTodos.addEventListener("keyup", event => {
                if (event.target.value.length > 6) {
                    event.target.classList.add("success");
                    event.target.classList.remove("error");
                    youDoform.addBtn.disabled = false;
                } else {
                    event.target.classList.add("error");
                    event.target.classList.remove("success");
                    youDoform.addBtn.disabled = true;
                }
    });
});











//console.log("Console log works!");
