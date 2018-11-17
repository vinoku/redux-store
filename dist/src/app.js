"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var fromStore = require("./store");
var input = document.querySelector("input");
var button = document.querySelector("button");
var destroy = document.querySelector(".unsubscribe");
var todoList = document.querySelector(".todos");
var reducers = {
    todos: fromStore.reducer
};
var store = new fromStore.Store(reducers, {});
button.addEventListener("click", function () {
    if (!input.value.trim())
        return;
    var todo = { label: input.value, complete: false };
    store.dispatch(new fromStore.AddTodo(todo));
    input.value = "";
}, false);
var unsubscribe = store.subscribe(function (state) {
    utils_1.renderTodos(state.todos.data);
});
destroy.addEventListener("click", unsubscribe, false);
todoList.addEventListener("click", function (event) {
    var target = event.target;
    if (target.nodeName.toLowerCase() === "button") {
        var todo = JSON.parse(target.getAttribute('data-todo'));
        store.dispatch(new fromStore.RemoveTodo(todo));
    }
});
