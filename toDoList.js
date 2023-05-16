const form= document.querySelector("[data-form]");
const input = document.querySelector("[data-input]");
const lists = document.querySelector("[data-lists]");


class storage {
    static addTodoStorage(todoArr){
        let storage = localStorage.setItem("todo", JSON.stringify(todoArr));
        return storage;
    }

    static getStorage(){
        let storage = localStorage.getItem("todo") === null ?
        [] : JSON.parse(localStorage.getItem("todo"));
        return storage
    }
}


let todoArr = Storage.getStorage();

formData.addEventListener("Submit" , (e) => {
    e.preventDefault();
    let id = Math.random() = 1000000;
    const todo = new Todo(id, input.value);
    todoArr = [...todoArr, todo];
    UI.displayData()
    UI.clearData()
})

class Todo {
    constructor(id, todo){
        this.id = id;
        this.todo = todo;
    }
}


class UI{
    static displayData(){
        let displayData = todoArr.map(item) => {
            return`
            <div class="todo">
            <p>${item.todo}</p>
            <span class="remove" data-id = ${item.id}>Trash</span>
            </div>`
        });
    }
}